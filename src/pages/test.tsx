
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Pagination } from 'antd';
import type { PaginationProps } from 'antd';   
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

const App: React.FC = () => {
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };  
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible_A'){      
      setIsVisible_A(!isVisible_A);
    }             
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
          <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
            {isVisible_A && (
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
  
export default App;