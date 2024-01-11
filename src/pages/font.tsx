
import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, message } from 'antd';  
import { CopyOutlined  } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const { Title, Paragraph, Text, Link } = Typography;
const codeString = `
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
          <Title> 一级标题</Title>
          <Title level={2}> 二级标题</Title>
          <Title level={3}> 三级标题</Title>
          <Title level={4}> 四级标题</Title>
          <Title level={5}> 五级标题</Title>                        
        </Flex>  
        </Flex> 
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; 
`
const codeString_A = `
import styles from '../layouts/index.less'; 
import {Flex, ConfigProvider, Typography, } from 'antd';  
import {theme} from '../layouts/index' 
const { Text, Link } = Typography;
import '../../libs/highlight/styles/panda-syntax-light.css'; 

const App: React.FC = () => {  
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
  
export default App;     
`
const App: React.FC = () => {  
  const theme = {  
    token: {  
      colorPrimary: '#6C1E1E',  
      borderRadius: 2,  
      colorLink: '#6C1E1E',              
    },  
  };

  /* 
  useState 钩子来管理代码块的显示状态
  类型-> 显示代码
  toggleDiv函数来切换对应代码块的状态
  onClick调用toggleDiv这个函数分别传值作为参数,每个按钮就分别控制了对应的代码块的显示和隐藏
  */
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

  return (  
    <ConfigProvider theme={theme}>
      {contextHolder}  
      <Space>
        <Flex gap="small" vertical>
            <h1 className={styles.title}>Font 字体</h1>      
            <h2>简述</h2>  
            <p>文本的字体、字号、颜色、行距等视觉属性进行标准化的规定和统一，以确保文本在不同平台和设备上呈现的一致性和易读性。</p>           
            <ul>  
              <li><Text strong>颜色：</Text>使用深浅不一的色调可以提高文本的可读性。推荐使用黑色作为主色调。</li>  
              <li><Text strong>字重：</Text>标题应该加粗以突出重点，同时副文可以使用正常字体，以保持文本的层次感。</li>  
              <li><Text strong>字号：</Text>根据内容的重要性，使用三种不同的字号：标签、正文和副文。标签字号最大，副文字号最小，标签和正文字号之间保持4-6px的差异。</li>  
              <li><Text strong>字体：</Text>选择简洁、易读的字体，以突出文本的重点。</li>  
              <li><Text strong>文字呼吸感：</Text>通过调整行高和字距，增加文本的呼吸感。行高应该是字体大小的1.2-1.5倍，更舒适、易读。</li>  
            </ul>  
    
            <h2>样式展示</h2>  
            <h3>标题级别</h3> 
            <Flex  gap="small" vertical className={styles.flexborder}>
              <Flex gap="small" vertical> 
                <Title> 一级标题</Title>
                <Title level={2}> 二级标题</Title>
                <Title level={3}> 三级标题</Title>
                <Title level={4}> 四级标题</Title>
                <Title level={5}> 五级标题</Title>                        
              </Flex>  
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
            <h3>正文</h3> 
            <Flex gap="small" vertical className={styles.flexborder}>
      
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
            
                                                                                  
      </Space>  
    </ConfigProvider>  
  );  
};  
  
export default App;