
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography} from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

//这里引入了高亮代码的样式和组件库 highlight.js
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/vs2015.css'; 

const codeString = `
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

const App: React.FC = () => {  
  const [isVisible, setIsVisible] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    }             
  };
  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >               
            <Button type="primary">主要按钮</Button>  
            <Button>默认按钮</Button>  
            <Button type="dashed">虚线按钮</Button>  
            <Button type="text">文字按钮</Button>  
            <Button type="link">链接按钮</Button>              
          </Flex >                 
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>                
            {isVisible && (
              <Text copyable className={styles.codeText}>  
            {'这里是一段代码'}           
              </Text>                                  
              )}                                       
          </Flex>                                                 
        </Flex>
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;`;  

const codeString_A = `
<Flex gap="small" wrap="wrap" >               
    <Button type="primary" size="large">大尺寸</Button> 
    <Button type="primary" size="middle">中尺寸</Button> 
    <Button type="primary" size="small">小尺寸</Button>               
</Flex > `;

const codeString_B = `
<Flex gap="small" wrap="wrap" >               
    <Button type="primary" icon={<PoweroffOutlined />}>图标按钮</Button>
    <Button type="primary" icon={<PoweroffOutlined />}></Button>  
    <Button type="primary" loading>Loading</Button>                
</Flex >`;

const App: React.FC = () => {  

  /* 
  useState 钩子来管理代码块的显示状态
  类型-> 显示代码
  toggleDiv函数来切换对应代码块的状态
  onClick调用toggleDiv这个函数分别传值作为参数,每个按钮就分别控制了对应的代码块的显示和隐藏
  */
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B ] = useState(false);

  const [isHighlighted, setIsHighlighted] = useState(false);

  const [copied, setCopied] = useState(false); 
  const [codeStr, setCodeString] = useState(''); 

  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {             
      setIsVisible_A(!isVisible_A); 
    } else{
      setIsVisible_B(!isVisible_B);  
    }
    setIsHighlighted(false);  // 手动重置高亮状态      
  };


  useEffect(() => {  
    if (isVisible && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll();     
    } else if(isVisible_A && !isHighlighted){
      hljs.highlightAll();  
    } else if(isVisible_B && !isHighlighted){
      hljs.highlightAll();  
    }
    setIsHighlighted(true); // 标记已高亮 
  }, [isVisible, isVisible_A, isVisible_B]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作  



  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <h1 className={styles.title}>Button 按钮</h1>      
        <h2>简述</h2>  
        <p>为了提高用户体验和点击率，需要考虑主次关系和疏密关系。根据不同的需求和情况，选择合适的尺寸、颜色和位置来呈现按钮。</p>  
        <p>在 Potal Design 中我们提供了五种按钮。</p>  
        <ul>  
          <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>  
          <li>默认按钮：用于没有主次之分的一组行动点。</li>  
          <li>虚线按钮：常用于添加操作。</li>  
          <li>文本按钮：用于最次级的行动点。</li>  
          <li>链接按钮：一般用于链接，即导航至某位置。</li>  
        </ul>  

        <h2>样式展示</h2>  
        <h3>类型</h3> 
        <Flex  gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >               
            <Button type="primary" style={{ boxShadow: 'none' }} >主要按钮</Button>  
            <Button>默认按钮</Button>  
            <Button type="dashed" >虚线按钮</Button>  
            <Button type="text">文字按钮</Button>  
            <Button type="link">链接按钮</Button>              
          </Flex >                 
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>
            <Button style={{margin:'24px 0 0  0'}} onClick={(e) => {
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
        <h3>尺寸</h3>
        <Flex gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >               
              <Button type="primary" size="large" style={{ boxShadow: 'none'}}>大尺寸</Button> 
              <Button type="primary" size="middle" style={{ boxShadow: 'none'}}>中尺寸</Button> 
              <Button type="primary" size="small" style={{ boxShadow: 'none'}}>小尺寸</Button>               
          </Flex >                 
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>
            <Button style={{margin:'24px 0 0  0'}} onClick={(e) => {
    
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
        <h3>状态</h3>
        <Flex gap="small" vertical className={styles.flexborder}>           
          <Flex gap="small" wrap="wrap" >               
              <Button style={{ boxShadow: 'none' }} type="primary"  icon={<PoweroffOutlined  />}>图标按钮</Button>
              <Button type="primary" style={{ boxShadow: 'none'}} icon={<PoweroffOutlined  />}></Button>  
              <Button type="primary" loading style={{ boxShadow: 'none'}}>Loading</Button>                
          </Flex >                 
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>
                        <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>                
            {isVisible_B  && (
              <Text copyable className={styles.codeText}>
                {codeString_B}           
              </Text>                                  
              )}                                       
          </Flex>                                                 
        </Flex>          


      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;