
import styles from './button.less';  
import { Button, Flex, ConfigProvider, Space } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';  
  
const App: React.FC = () => {  
  const theme = {  
    token: {  
      colorPrimary: '#6C1E1E',  
      borderRadius: 2,  
      colorLink: '#6C1E1E',  
    },  
  };  

  return (  
    <ConfigProvider theme={theme}>  
      <Space>  
        <div>  


          <Flex gap="small" wrap="wrap">
          <h2>I am</h2>  
          <h3>home</h3>               

          </Flex>

          
                        
        </div>  
      </Space>  
    </ConfigProvider>  
  );  
};  
  
export default App;





  




