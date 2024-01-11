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


/* import styles from '../layouts/index.less'; 
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
  
export default App;  */


// ---


/* import styles from '../layouts/index.less'; 
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
    if(text){
      navigator.clipboard.writeText(text)
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
  
export default App;   */

// ---

/* import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Space, Typography, message } from 'antd';  
import { CopyOutlined  } from '@ant-design/icons';
import React, { useState, useEffect} from 'react';
import {theme} from '../layouts/index' 
const { Title, Paragraph, Text, Link } = Typography;
import { ColorPicker } from 'antd';

import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 


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
                <Flex gap="small" vertical> 
                <Text>中金北斗(默认文字)</Text>
                <Text type="secondary">中金北斗(辅助文字)</Text>
                <Text type="success">中金北斗(成功字体)</Text>
                <Text type="warning">中金北斗(警告字体)</Text>
                <Text type="danger">中金北斗(危险字体)</Text>
                <Text disabled>中金北斗(禁用字体)</Text>
                <Text mark>中金北斗(标记字体)</Text>
                <Text code>中金北斗(代码字体)</Text>
                <Text keyboard>中金北斗(键盘字体)</Text>
                <Text underline>中金北斗(下划字体)</Text>
                <Text delete>中金北斗(删除字体)</Text>
                <Text strong>中金北斗(加粗字体)</Text>
                <Text italic>中金北斗(斜体字)</Text>
                <Link href="https://www.cicc.com/" target="_blank">
                  中金北斗 (文字链)
                </Link>                
                </Flex>
        </Flex> 
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;  */

//---
/* eslint-disable react/no-array-index-key */


/* eslint-disable react/no-array-index-key */


import styles from '../layouts/index.less'; 
import {
  Flex,
  ConfigProvider,
  Typography,
  Form,
  Input,
  Alert,
} from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const {Text} = Typography;
const App: React.FC = () => {  
          
  return (  
    <ConfigProvider theme={theme} >
     
      <Flex gap="small" vertical >
          <Flex  gap="small" vertical className={styles.flexborder}>
          <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off"> 
          <Alert message="这里是一段Alert" />
          <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
            </Form> 
          </Flex >            
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;










