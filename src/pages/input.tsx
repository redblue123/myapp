/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio, ConfigProvider, Space} from 'antd';

import {theme} from '../layouts/index' //公共样式引入

const baseStyle: React.CSSProperties = {
  width: 72,
  height: 64,
};

const splitlist = theme.token.colorPrimary.split(",");
splitlist.pop();
const colorResult = splitlist.join(",");
console.log(colorResult)
/* 
{...}：这是JavaScript中的解构赋值语法，用于从对象中提取属性
...baseStyle：这意味着我们将baseStyle对象中的所有样式都应用到这个div上。

Array.from({ length: 4 })：这是创建一个数组，其长度为4
.map((_, i) => ( ... ))：这是数组的map方法，用于遍历数组的每个元素。
_是数组元素的值（在这里是undefined），i是数组元素的索引。
key={i}：这是React的一个要求，当你遍历一个数组来渲染多个元素时，每个元素都需要一个唯一的“key”属性

backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf'：这是一个三元运算符，用于设置div的背景颜色。
如果数组索引（即i）是偶数（即0、2、4），则背景颜色为#1677ff（一种蓝色）。
如果i是奇数（即1、3），则背景颜色为#1677ffbf（一种半透明的蓝色）。
*/

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
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? theme.token.colorPrimary: theme.token.redSecondary}}/>
    
        ))}
      </Flex>
    </Flex>
    </Space>  
    </ConfigProvider> 
  );
};


export default App;