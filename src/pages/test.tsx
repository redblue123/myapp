

import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, Modal, Form, Input, Checkbox} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
import React, { useState} from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const { Title, Paragraph, Text, Link } = Typography;

//---

const App: React.FC = () => {

  return (
    <ConfigProvider theme={theme}>

    <Flex gap="small" vertical >
      <Flex  gap="small" vertical className={styles.flexborder}>
        <Flex gap="small" wrap="wrap"  > 
          <Input placeholder="请输入" /> 


        </Flex>
      </Flex>
    </Flex>

    </ConfigProvider> 
  );
};

export default App;


