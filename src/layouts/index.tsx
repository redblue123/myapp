import * as React from 'react';  
import { ProLayout } from '@ant-design/pro-layout';  
import { Link, Outlet, useAppData, useLocation } from 'umi';  
import SmileUrl, { ReactComponent as SvgSmile } from '../../public/logo.svg';  
  
// 定义一个类型来匹配您的主题对象结构  
export const theme = {  
  token: {  
    colorPrimary: '#6C1E1E',  
    borderRadius: 2,  
    colorLink: '#6C1E1E',              
  },  
};
  
// 定义并导出您的布局组件  
export default function Layout() { 
    
  const { clientRoutes } = useAppData();  
  const location = useLocation();  
  return (  
    <ProLayout  
      route={clientRoutes[0]}  
      location={location}  
      title="Portal Design"  
      logo={SmileUrl}  
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