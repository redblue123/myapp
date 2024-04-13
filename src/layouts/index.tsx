import * as React from 'react';  
import { ProLayout } from '@ant-design/pro-layout';
import { ConfigProvider, Breadcrumb, Button, Layout, Menu, Flex} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Sider, Footer} = Layout;
import type { MenuProps } from 'antd';
import { Link, Outlet, useAppData, useLocation  } from 'umi'; 
import SmileUrl, { ReactComponent as SvgSmile } from '../../src/assets/logo.svg'; 
import { removeToken } from '@/utils';
  
import store from '@/store'
import { Provider } from 'react-redux';
import styles from '../layouts/index.less'; 
// 测试token 是否成功注入
import {request} from "@/utils"
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {useAuth} from '@/utils/useAuth'
import LoinPage from '@/components/LoginPage';
// 定义一个类型来匹配您的主题对象结构  
export const theme = {  
  token: {
    //  SeedToken
    colorPrimary:'rgba(110, 30, 30, 1)', // 主色 #6C1E1E
    redSecondary:'#AB4930', // 辅助色
    ciccPrimary:'#BE8C4A', // 中金黄 cicc-yellow
    yellowSecondary:'#845B2E', // 辅助黄
    blueSecondary:'#3E4666',  
    borderRadius: 2,  
    colorLink: '#6C1E1E',
    colorSuccess:'#63BD36',
    colorWarning:'#faad14',
    colorError:'D63E3E',
    greyColor:'000000',
    controlOutline:'rgba(110, 30, 30, 0.1)',
    //下拉框选中时的颜色
    controlItemBgActive:'rgba(110, 30, 30, 0.08)',
    colorInfoBg:'rgba(110, 30, 30, 0.08)', //信息色的浅色背景颜色。
    colorInfoBorder:'rgba(110, 30, 30, 0.65)', //信息色的描边色。
  },
    
};

// 可以通过 import { Settings } from '@ant-design/pro-layout/defaultSettings'
// 来获取这个类型

// 定义并导出您的布局组件  



export default function _Layout() { 


  // 测试token 是否成功注入
  // useEffect(()=>{
  //   request.get('/user/profile')
  // },[])   
  const { clientRoutes } = useAppData(); // 这里先用umi的useAppDate拿到全局客户端路由clientRoutes  

  const navigate = useNavigate(); // 获取导航函数
  const location = useLocation(); // 获取当前位置信息 
  const isAuthenticated = useAuth(); // 假设 useAuth() 返回一个布尔值表示是否已认证 
  const removeTokenHandle = ()=>{
    removeToken()
    navigate('/login'); 
  }


 
useEffect(()=>{
  if (!isAuthenticated && location.pathname !== '/login') {  
    navigate('/login');  
  }  
},[isAuthenticated, location, navigate])

  // 如果当前路径是登录页面，则直接渲染登录页面组件  
if (location.pathname === '/login') {  
  return (  
    <Provider store={store}> 

      <LoinPage></LoinPage> 
    </Provider>  
  );  
} 

 if(isAuthenticated) {
  return (  
    
    <Provider store={store}>
      <ConfigProvider theme={theme}>
      
      <ProLayout  
        route={clientRoutes[0]}  
        location={location}  
        title="Portal Design"  
        logo={SmileUrl}
        token={{ bgLayout: 'white' }} // 通过token属性修改prolayout的布局

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
        <Flex justify='flex-end'>
        <Button onClick={removeTokenHandle} >退出登录</Button> 
        </Flex>
         
        <div style={{ padding: 20 }}> 
          <Outlet/> 
        </div> 
      </ProLayout> 
      </ConfigProvider>
    </Provider>


  );
 }
 return <div>An error occurred.</div>

}