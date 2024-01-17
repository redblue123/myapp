<!-- https://umijs.org/docs/guides/directory-structure

项目框架 react + umi + antd

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


 -->
 