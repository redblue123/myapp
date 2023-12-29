/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio, ConfigProvider, Space } from 'antd';
import {theme} from '../layouts/index' //公共样式引入
const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
};

const splitlist = theme.token.colorPrimary.split(",");
splitlist.pop();
const colorResult = splitlist.join(",");

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('horizontal');
  return (
    <ConfigProvider theme={theme}>  
    <Space>  
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
    </Space>  
    </ConfigProvider> 
  );
};

export default App;
