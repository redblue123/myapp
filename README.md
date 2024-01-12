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

 -->
 