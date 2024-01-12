
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Tabs, message, Divider } from 'antd';
import { CopyOutlined  } from '@ant-design/icons';  
import React, { useState, useEffect } from 'react';
import {theme} from '../layouts/index' //公共样式引入
import type { TabsProps } from 'antd';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
const {Paragraph } = Typography; 

const codeString =`
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Tabs} from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
import type { TabsProps } from 'antd';



const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: '选项卡1的内容',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: '选项卡2的内容',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: '选项卡3的内容',
  },
];

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </Flex >                 

      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`
const codeString_A =`
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Tabs} from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
import type { TabsProps } from 'antd';

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme}>  
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1 是可用的',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3 是可用的',
      },
    ]}
  />                                     
    </ConfigProvider>  
  );  
};  
  
export default App;
`
const codeString_B =`
import styles from '../layouts/index.less'; 
import { ConfigProvider, Typography, Tabs} from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
import type { TabsProps } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme}>  
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        key: id,
        label: 'Tab {id}', //这里用美元符号{id} 用反引号
        children: '选项卡 {id} 的内容', //这里用美元符号{id} 用反引号
        icon: <Icon />,
      };
    })}
  />                                   
    </ConfigProvider>  
  );  
};  
  
export default App;
`
const codeString_C =`
import styles from '../layouts/index.less'; 
import { ConfigProvider, Typography, Tabs} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => { 
   
  return (  
    <ConfigProvider theme={theme}>  
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    indicatorSize={(origin) => origin - 16}
  />                                 
    </ConfigProvider>  
  );  
};  
  
export default App;
`
// codeString功能
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: '选项卡1的内容',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: '选项卡2的内容',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: '选项卡3的内容',
  },
];

const onChange_C = (key: string) => {
  console.log(key);
};

const items_C: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: '选项卡内容面板 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'C选项卡内容面板 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: '选项卡内容面板 3',
  },
];


const App: React.FC = () => { 
  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B ] = useState(false);
  const [isVisible_C, setIsVisible_C ] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {            
      setIsVisible_A(!isVisible_A);  
    } else if(div ==='isVisible_B') {
      setIsVisible_B(!isVisible_B);
    }else if (div ==='isVisible_C') {
      setIsVisible_C(!isVisible_C);
    }
    setIsHighlighted(false);  // 手动重置高亮状态       
  };

  useEffect(() => {  
    if ((isVisible||isVisible_A||isVisible_B||isVisible_C) && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll(); 
      setIsHighlighted(true); // 标记已高亮 
    }
  }, [isVisible, isVisible_A, isVisible_B, isVisible_C]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作  

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
      <Flex gap="small" vertical >
        <h3>类型</h3>
        <Flex  gap="small" vertical className={styles.flexborder}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <Divider />
        <Paragraph strong>普通Tab切换样式</Paragraph>
        <Flex gap="small" wrap="wrap" >
            <Button  onClick={() => toggleDiv('isVisible')}>显示代码</Button>
            <Button icon={<CopyOutlined />}  onClick={(e) => {
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
        </Flex > 
        <Flex  gap="small" vertical className={styles.flexborder}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: 'Tab 1',
                key: '1',
                children: 'Tab 1 是可用的',
              },
              {
                label: 'Tab 2',
                key: '2',
                children: 'Tab 2',
                disabled: true,
              },
              {
                label: 'Tab 3',
                key: '3',
                children: 'Tab 3 是可用的',
              },
            ]}
          />
        <Divider />
        <Paragraph strong>切换Tab的禁用样式</Paragraph>
        <Flex gap="small" wrap="wrap" >
            <Button onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>
            <Button icon={<CopyOutlined />}  onClick={(e) => {
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
        <Flex  gap="small" vertical className={styles.flexborder}>
          <Tabs
            defaultActiveKey="2"
            items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
              const id = String(i + 1);
              return {
                key: id,
                label: `Tab ${id}`,
                children: `选项卡 ${id} 的内容`,
                icon: <Icon />,
              };
            })}
          />
          <Divider />
        <Paragraph strong>有图标的 Tab</Paragraph>
        <Flex gap="small" wrap="wrap" >
          <Button onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>
          <Button icon={<CopyOutlined />} onClick={(e) => {
            copyText(codeString_B);
            success();
          }}>复制代码</Button>
          {isVisible_B && (
                <pre  style={{ width: '100%', overflow: 'auto' }} > 
                <code  className="language-javascript" > 
                  {codeString_B}
                </code>  
              </pre>
            )}                                    
        </Flex>  
        </Flex>
        <Flex  gap="small" vertical className={styles.flexborder}>
          <Tabs
            defaultActiveKey="1"
            items={items_C}
            onChange={onChange_C}
            indicatorSize={(origin) => origin - 16}
          />
          <Divider />
          <Paragraph strong>自定义指示器宽度</Paragraph>
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_C')}>显示代码</Button>
            <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
              copyText(codeString_C);
              success();
            }}>复制代码</Button>
            {isVisible_C && (
                   <pre  style={{ width: '100%', overflow: 'auto' }} > 
                  <code  className="language-javascript" > 
                    {codeString_C}
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
