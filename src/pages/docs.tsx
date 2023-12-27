import stylesindex from '../layouts/index.less'; 
import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography } from 'antd';  
import React, { useState } from 'react';
const { Paragraph, Text, Link } = Typography;
const theme = {  
  token: {  
    colorPrimary: '#6C1E1E',  
    borderRadius: 2,  
    colorLink: '#6C1E1E',              
  },  
};
const App: React.FC = () => {  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B ] = useState(false);
  const toggleDiv = (div:string) => {      
      setIsVisible(!isVisible);    
  };
  return (  
    <ConfigProvider theme={theme}>  
      <Space>                                   
        <Flex gap="small" vertical >
          <h1 className={styles.title}>Button 按钮</h1>      
          <Flex gap="small" vertical style={{border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px'}}>           
            <Flex gap="small" wrap="wrap" >               
              <Button type="primary">主要按钮</Button>  
              <Button>默认按钮</Button>             
            </Flex >                 
            <Flex gap="small" wrap="wrap" >
              <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>                
              {isVisible && (
                <Paragraph copyable style={{whiteSpace: 'pre-wrap', border: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(100, 30, 30, 0.04)', padding: '16px', width: '100%', margin: '24px 0 0  0'}}>  
                  {'<Button type="primary">主要按钮</Button>\n<Button>默认按钮</Button>\n<Button type="dashed">虚线按钮</Button>\n<Button type="text">文字按钮</Button>\n<Button type="link">链接按钮</Button>'}           
                </Paragraph>                                  
                )}                                       
            </Flex>                                                 
          </Flex>
        </Flex>                                       
      </Space>  
    </ConfigProvider>  
  );  
};  
  
export default App;