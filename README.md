<!-- https://umijs.org/docs/guides/directory-structure

项目框架 react + umi + antd

1 新建路由
npx umi g page products
Write: src/pages/products.tsx
Write: src/pages/products.less

npx umi g page testPage
src/pages/testPage/index.tsx
src/pages/testPage/index.less

import React, { useState} from 'react';

  useState 钩子来管理代码块的显示状态
  类型-> 显示代码
  toggleDiv函数来切换对应代码块的状态
  onClick调用toggleDiv这个函数分别传值作为参数,每个按钮就分别控制了对应的代码块的显示和隐藏
  
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {
      // console.log("111");             
      setIsVisible_A(!isVisible_A);  
    } 
    setIsHighlighted(false);  // 手动重置高亮状态       
  };

  //---

  这里是一个拖拽事件
    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    // 从 window.document.documentElement（即HTML文档的根元素）中解构出 clientWidth 和 clientHeight
    // 这两个属性分别表示浏览器窗口的宽度和高度（不包括工具栏、滚动条等）
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

   //---

// typescript 静态方法 和 动态方法

class Person {  
    name: string;  
    age: number;  
  
    constructor(name: string, age: number) {  
        this.name = name;  
        this.age = age;  
    }  
  
    // 动态方法（实例方法）  
    greet() {  
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);  
    }  
  
    // 静态方法  
    static printMaxAge(a: number, b: number): void {  
        const max = Math.max(a, b);  
        console.log(`最大的数是：${max}`);  
    }  
}  
  
// 创建Person实例并调用动态方法  
const john = new Person("John", 30);  
john.greet(); // 输出: Hello, my name is John and I'm 30 years old.  
  
// 直接通过类名调用静态方法  
Person.printMaxAge(10, 20); // 输出: 20


 -->forEach

 <!-- import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, Modal, Form, Input, Checkbox} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
import React, { useState} from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const { Title, Paragraph, Text, Link } = Typography;

//---

const App: React.FC = () => {
  const initialStates: [string, boolean][] = [  
    ['isVisible', false],  
    ['isVisible_A', false],  
    ['isVisible_B', false]  
  ];  
    
  initialStates.forEach(([stateName, initialValue]) => {  
    const [value, setValue] = useState<boolean | undefined>(initialValue);  
      
    // 你可以在这里添加一些逻辑来使用这些状态变量，例如：  
    console.log(`${stateName}: ${value}`);  
  });
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

//--

let listOfNames: string[] = ['name1', 'name2', 'name3'];
let obj = {};

for (let i = 0; i < listOfNames.length; i++) {
    let propertyName = listOfNames[i];
    obj[propertyName] = 'Some value for ' + propertyName;
}

console.log(obj); // 输出: { name1: 'Some value for name1', name2: 'Some value for name2', name3: 'Some value for name3' }

//--
  const ArraySetVis: string[] = [];  
  const ArrayVisible: string[] = [];  
  let obj: { [key: string]: string } = {}; // 初始化为空对象  
  for (let i = 0; i < 4; i++) {  
    ArrayVisible.push('isVisible' + i);  
    obj[ArrayVisible[i]] = 'some value'; // 添加了值  
    ArraySetVis.push('SitIsVisible' + i);  
  }  
  console.log(obj); // 输出 { isVisible0: 'some value', isVisible1: 'some value', isVisible2: 'some value' }

//--

const f = (shouldInitialize: boolean) => {  
  let x; // 先声明x  
  if (shouldInitialize) {  
    x = 10; // 然后在需要时赋值  
  }  
  return x; // 现在应该可以正确返回x的值了  
};

//--

// 声明一个立即执行的函数表达式  
(function() {  
  // 定义一个私有变量  
  var privateVariable = "private";  
  
  // 定义一个私有函数  
  function privateFunction() {  
    console.log("This is a private function.");  
  }  
  
  // 定义一个公开的接口，用于访问私有变量和函数  
  var publicInterface = {  
    getPrivateVariable: function() {  
      return privateVariable;  
    },  
    callPrivateFunction: function() {  
      privateFunction();  
    }  
  };  
  
  // 返回公开接口，以便在外部使用  
  return publicInterface;  
})();  
  
// 使用返回的公开接口  
var myObject = window.myObject || {}; // 确保 myObject 存在  
myObject.getPrivateVariable = myObject.getPrivateVariable || publicInterface.getPrivateVariable;  
myObject.callPrivateFunction = myObject.callPrivateFunction || publicInterface.callPrivateFunction;  
  
// 测试代码  
console.log(myObject.getPrivateVariable()); // 输出 "private"  
myObject.callPrivateFunction(); // 输出 "This is a private function."

//-- 列表中传入api

import React from 'react';  
import { useEffect, useState } from 'react';  
  
interface Person {  
  name: string;  
  age: number;  
  occupation: string;  
}  
  
const ListComponent: React.FC = () => {  
  const [data, setData] = useState<Person[]>([]);  
  
  useEffect(() => {  
    fetch('/api/data') // 假设这是一个返回 Person[] 的 API  
      .then(response => response.json())  
      .then(people => setData(people))  
      .catch(error => console.error('Error:', error));  
  }, []); // 仅在组件挂载时运行一次  
  
  return (  
    <ul>  
      {data.map((person, index) => (  
        <li key={index}>Name: {person.name}, Age: {person.age}, Occupation: {person.occupation}</li>  
      ))}  
    </ul>  
  );  
};  
  
export default ListComponent;

//--
在package.json中添加一条数据 "server:levelData":"json-server mock/levelData-db.json --port 3006"
  "scripts": {
    "dev": "umi dev",
    "build": "umi build",
    "postinstall": "umi setup",
    "setup": "umi setup",
    "start": "npm run dev",
    "serve": "json-server mock/db.json --port 3004",
    "server:tableList":"json-server mock/tableList-db.json --port 3005",
    "server:levelData":"json-server mock/levelData-db.json --port 3006"
    
  },
在终端运行命令
yarn run server:levelData