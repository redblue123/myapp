
import styles from '../layouts/index.less'; 
import {  ConfigProvider, Typography,Space, Card, Flex} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;
import React, { useState, useEffect } from 'react';
import '../../libs/highlight/styles/panda-syntax-light.css'; 



const codeString =`

import styles from '../layouts/index.less'; 
import {  ConfigProvider, Typography,Space, Card} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;
import '../../libs/highlight/styles/panda-syntax-light.css'; 

const App: React.FC = () => {  
  return (
      
    <ConfigProvider theme={theme}>  
  <Space direction="horizontal" size={16}>
  <Flex  gap="small" wrap="wrap" className={styles.flexborder}>  
    <Card title="卡片标题" extra={<Link href="#">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    <Card title="卡片标题" extra={<Link href="#">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    <Card title="卡片标题" extra={<Link href="#">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    </Flex>
  </Space>                              
    </ConfigProvider>  
  );  
};  
  
export default App;
`

const App: React.FC = () => {  
  return (
      
    <ConfigProvider theme={theme}>  
  <Space direction="horizontal" size={16}>
  <Flex  gap="small" wrap="wrap" className={styles.flexborder}>  
    <Card title="卡片标题" extra={<Link href="/color">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    <Card title="卡片标题" extra={<Link href="/button">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    <Card title="卡片标题" extra={<Link href="/flex">查看更多</Link>} style={{ width: 300 }}>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    </Flex>
  </Space>

                                    
    </ConfigProvider>  
  );  
};  
  
export default App;