
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Pagination, message } from 'antd';
import type { PaginationProps } from 'antd';  
import { CopyOutlined  } from '@ant-design/icons';
import React, { useState ,useEffect} from 'react';
import {theme} from '../layouts/index' //公共样式引入
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const { Paragraph, Text, Link } = Typography;
const codeString = `
import styles from '../layouts/index.less'; 
import { Flex, ConfigProvider, Pagination } from 'antd';  
import {theme} from '../layouts/index' //公共样式引入

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >
          <Pagination defaultCurrent={1} total={50} />
          <br></br>
          <Pagination defaultCurrent={6} total={500} />
          <br></br>                     
          </Flex >                                                                
        </Flex>
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
export default App;
`
const codeString_A = `
import styles from '../layouts/index.less'; 
import { Flex, ConfigProvider, Typography, Pagination } from 'antd';
import type { PaginationProps } from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入

const App: React.FC = () => {
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >
          <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
          />   
          <br />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            disabled
          />                   
          </Flex >                                                   
        </Flex>
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`
const App: React.FC = () => {  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {
      // console.log("111");             
      setIsVisible_A(!isVisible_A);  
    } 
    setIsHighlighted(false);  // 手动重置高亮状态       
  };

  useEffect(() => {  
    if ((isVisible||isVisible_A) && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll(); 
      setIsHighlighted(true); // 标记已高亮 
    }
  }, [isVisible, isVisible_A]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作 
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: '复制成功',
    });
  };

  const [copied, setCopied] = useState(false);
  const copyText = (text:string) =>{
    navigator.clipboard.writeText(text).then(() => {  
      setCopied(true);   
    }).catch((err) => {  
      console.error('Error in copying text', err);  
    });  
  } 
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (  
    <ConfigProvider theme={theme}>
      {contextHolder}    
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" vertical >
          <Pagination defaultCurrent={1} total={50} />
          <br></br>
          <Pagination defaultCurrent={6} total={500} />
          <br></br>

          </Flex >                 
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>
            <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
              copyText(codeString);
              success();
            }}>复制代码</Button>
            {isVisible && (
                   <pre  style={{ width: '100%', overflow: 'auto' }} > 
                  <code  className="language-javascript" > 
                    {codeString}
                  </code>  
                </pre>
              )}                                    
          </Flex>                                                   
        </Flex>

        
      </Flex>
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" vertical >
          <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />   
          <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />

          </Flex >                 
          <Flex gap="small" wrap="wrap" >
                <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>
                <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
                  copyText(codeString_A);
                  success();
                }}>复制代码</Button>
                {isVisible_A && (
                      <pre  style={{ width: '100%', overflow: 'auto' }} > 
                      <code  className="language-javascript" > 
                        {codeString_A}
                      </code>  
                    </pre>
                  )}                                    
              </Flex>                                               
        </Flex>

        
      </Flex>      
                                             
    </ConfigProvider>  
  );  
};  
  
export default App;