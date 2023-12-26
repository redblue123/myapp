import { ProLayout } from '@ant-design/pro-layout';
// import { ProLayout } from '@ant-design/pro-components';
import { Link, Outlet, useAppData, useLocation } from 'umi';
// import { SmileOutlined } from '@ant-design/icons';
import SmileUrl, { ReactComponent as SvgSmile } from '../../public/logo.svg';//使用import语句导入logo.svg文件
// import imgUrl from '~/public/logo.svg'
 

export default function Layout() {

  const { clientRoutes } = useAppData();
  const location = useLocation();
  return (
    
    <ProLayout 
      route={clientRoutes[0]}
      location={location}      
      title="Portal Design"
      
      logo={SmileUrl}
      // logo={<img src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00327-3368.jpg" alt="Logo" />} 
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
    >
      <Outlet />
    </ProLayout>
  );
}




