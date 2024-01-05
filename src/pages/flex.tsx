/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { Button, Flex, Radio, ConfigProvider, Typography,Segmented } from 'antd';
import type { FlexProps } from 'antd';
import type { SegmentedProps } from 'antd/es/segmented';

import styles from '../layouts/index.less'; 
import {theme} from '../layouts/index' //公共样式引入

const { Paragraph, Text, Link } = Typography;

const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 40,
};

const splitlist = theme.token.colorPrimary.split(",");
splitlist.pop();
const colorResult = splitlist.join(",");


const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #C5A5A5',
};

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const alignOptions = ['flex-start', 'center', 'flex-end'];
// console.log(colorResult)
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
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A] = useState(false);

  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    }else if(div === 'isVisible_A'){
      setIsVisible_A(!isVisible_A);
    } 
  };

  const [value, setValue] = React.useState<string>('horizontal');

  const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0]);
  return (
    <ConfigProvider theme={theme}>
        
    <Flex gap="middle" vertical className={styles.flexborder}>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? theme.token.colorPrimary:`${colorResult}, 0.8)`}}/>
    
        ))}
      </Flex>
      <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'8px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>                
            {isVisible && (
              <Text copyable className={styles.codeText}>
                {`
import React, { useState } from 'react';
import { Button, Flex, Radio, ConfigProvider, Typography,Segmented } from 'antd';
import styles from '../layouts/index.less'; 
import {theme} from '../layouts/index' //公共样式引入
const {Text} = Typography;
const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 40,
};
const splitlist = theme.token.colorPrimary.split(",");
splitlist.pop();
const colorResult = splitlist.join(",");
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } 
  };
  const [value, setValue] = React.useState<string>('horizontal');
  return (
    <ConfigProvider theme={theme}>    
    <Flex gap="middle" vertical className={styles.flexborder}>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? theme.token.colorPrimary:'#AB4930'}}/>
        ))}
      </Flex>
      <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'8px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>                
            {isVisible && (
              <Text copyable className={styles.codeText}>
                {'这里用反引号显示文字'}
              </Text>                                  
              )}                                       
          </Flex> 
    </Flex>   
    </ConfigProvider> 
  );
};
export default App;`}             
              </Text>                                  
              )}                                       
          </Flex> 
       
     
    </Flex>

    <Flex gap="middle" vertical className={styles.flexborder}>
      <Flex gap="middle" align="start" vertical>
        <p>Select justify :</p>
        <Segmented options={justifyOptions} onChange={setJustify as SegmentedProps['onChange']} />
        <p>Select align :</p>
        <Segmented options={alignOptions} onChange={setAlignItems as SegmentedProps['onChange']} />
        <Flex style={boxStyle} justify={justify} align={alignItems}>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
        </Flex>
      </Flex> 
      <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'8px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
            {isVisible_A && (
              <Text copyable className={styles.codeText}>
                {`
import React, { useState } from 'react';
import { Button, Flex, ConfigProvider, Typography,Segmented } from 'antd';
import type { FlexProps } from 'antd';
import type { SegmentedProps } from 'antd/es/segmented';
import styles from '../layouts/index.less'; 
import {theme} from '../layouts/index' //公共样式引入

const {Text} = Typography;
const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #C5A5A5',
};
const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } 
  };
  const [value, setValue] = React.useState<string>('horizontal');
  const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0]);
  return (
    <ConfigProvider theme={theme}>    
    <Flex gap="middle" vertical className={styles.flexborder}>
      <Flex gap="middle" align="start" vertical>
        <p>Select justify :</p>
        <Segmented options={justifyOptions} onChange={setJustify as SegmentedProps['onChange']} />
        <p>Select align :</p>
        <Segmented options={alignOptions} onChange={setAlignItems as SegmentedProps['onChange']} />
        <Flex style={boxStyle} justify={justify} align={alignItems}>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
        </Flex>
      </Flex>      
      <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'8px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>                
            {isVisible && (
              <Text copyable className={styles.codeText}>
                {'这里用反引号显示一段代码'}             
              </Text>                                  
              )}                                       
      </Flex>        
    </Flex>   
    </ConfigProvider> 
  );
};

export default App;
                `}             
              </Text>                                  
              )}                                       
      </Flex>      
    </Flex>

    
    </ConfigProvider> 
  );
};



export default App;