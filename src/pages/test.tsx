/* 
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input, Select, Space, Radio } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;



const App: React.FC = () => {  
  const [isVisible_A, setIsVisible_A] = useState(false);


  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible_A(!isVisible_A);
    }            
  }; 
  return (  
    <ConfigProvider theme={theme} >  
      <Flex gap="small" vertical >
          <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" >
                <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
                {isVisible_A && (
                  <Text copyable className={styles.codeText}>  
                {'这是一段文字'}               
                  </Text>                                  
                  )}                                                                                   
            </Flex>  
          </Flex >      
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; */

// ---


import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input, Select, Space, Radio, message } from 'antd';  
import { PoweroffOutlined, CopyOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;



const App: React.FC = () => {  
  const [isVisible_A, setIsVisible_A] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [copied, setCopied] = useState(false);
  const textToCopy = '这是一段要复制的字符串';    
  const textToCopy_A = '这是一段要复制的字符串aaaaaaaa';    
    
  const success = () => {
    messageApi.open({
      type: 'success',
      content: '复制成功',
    });
  };

  const copyText = (text?:string) =>{
    if(text === textToCopy){
      navigator.clipboard.writeText(textToCopy)
    }else if(text === textToCopy_A){
      navigator.clipboard.writeText(textToCopy_A)
    } 
  }

  const toggleDiv = (div:string) => {  
    if(div === 'isVisible_A'){      
      setIsVisible_A(!isVisible_A);
    }            
  }; 
  return (  
    <ConfigProvider theme={theme} >  
      <Flex gap="small" vertical >
          <Flex  gap="small" vertical className={styles.flexborder}>
          {contextHolder}
            <Flex gap="small" wrap="wrap" >
                <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e)=>{
                  copyText(textToCopy);
                  success();
                }}>复制代码</Button>
                <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e)=>{
                  copyText(textToCopy_A);
                  success();
                }}>复制代码aaa</Button>                                                                                                 
            </Flex>  
          </Flex >      
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; 















