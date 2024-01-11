
// import styles from '../layouts/index.less'; 
// import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input, Select, Space, Radio } from 'antd';  
// import { PoweroffOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import {theme} from '../layouts/index' //公共样式引入
// const { Paragraph, Text, Link } = Typography;



// const App: React.FC = () => {  
//   const [isVisible_A, setIsVisible_A] = useState(false);


//   const toggleDiv = (div:string) => {  
//     if(div === 'isVisible'){      
//       setIsVisible_A(!isVisible_A);
//     }            
//   }; 
//   return (  
//     <ConfigProvider theme={theme} >  
//       <Flex gap="small" vertical >
//           <Flex  gap="small" vertical className={styles.flexborder}>
//             <Flex gap="small" wrap="wrap" >
//                 <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
//                 {isVisible_A && (
//                   <Text copyable className={styles.codeText}>  
//                 {'这是一段文字'}               
//                   </Text>                                  
//                   )}                                                                                   
//             </Flex>  
//           </Flex >      
//       </Flex>                                       
//     </ConfigProvider>  
//   );  
// };  
  
// export default App;

// ---

// import styles from '../layouts/index.less'; 
// import { Button, Flex, ConfigProvider, Typography } from 'antd';  
// import { PoweroffOutlined } from '@ant-design/icons';
// import React, { useState, useEffect } from 'react';
// import {theme} from '../layouts/index' //公共样式引入


// //这里引入了高亮代码的样式和组件库 highlight.js
// import hljs from '../../libs/highlight/highlight.js';  
// import '../../libs/highlight/styles/monokai-sublime.css'; 

// const { Paragraph, Text, Link } = Typography;

// const codeString_A = `
// <Flex gap="small" wrap="wrap" >               
//     <Button type="primary" size="large">大尺寸</Button> 
//     <Button type="primary" size="middle">中尺寸</Button> 
//     <Button type="primary" size="small">小尺寸</Button>               
// </Flex > `;

// const App: React.FC = () => {  
//   const [isVisible_A, setIsVisible_A] = useState(false);
//   const [isHighlighted, setIsHighlighted] = useState(false);


//   const toggleDiv = (div:string) => {  
//     if(div === 'isVisible_A'){      
//       setIsVisible_A(!isVisible_A);
//       setIsHighlighted(false); // 手动重置高亮状态
//     }            
//   }; 

//   useEffect(() => {  
//     if (isVisible_A && !isHighlighted) {  
//       // 仅在显示代码且未高亮时执行高亮操作  
//       hljs.highlightAll();  
//       setIsHighlighted(true); // 标记已高亮  
//     }  
//   }, [isVisible_A]); // 仅在isVisible_A变化时触发高亮操作   

//   return (  
//     <ConfigProvider theme={theme} >  
//       <Flex gap="small" vertical >
//           <Flex  gap="small" vertical className={styles.flexborder}>
//             <Flex gap="small" wrap="wrap" >
//                 <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
//                 {isVisible_A && (
//                                   <pre style={{ width: '100%', overflow: 'auto' }}> 
//                                   <code className="language-javascript" >  
//                                     {codeString_A}       
//                                   </code>  
//                                 </pre> 
//                   )}                                                                                   
//             </Flex>  
//           </Flex >      
//       </Flex>                                       
//     </ConfigProvider>  
//   );  
// };  
  
// export default App;

// ---

// import React, { useState } from 'react';  
// import { Button, message } from 'antd';  
// import { CopyOutlined } from '@ant-design/icons';  

// interface ErrorType {  
//   message?: string;  
//   stack?: string;  
//   // 其他可能的错误属性  
// }  
  
// function CopyButton() {  
//   const [copied, setCopied] = useState(false);  
//   const textToCopy = '这是一段要复制的字符串';  
  
//   const handleClick = async () => {  
//     try {  
//       await navigator.clipboard.writeText(textToCopy); // 将字符串写入剪贴板  
//       setCopied(true);  
//       setTimeout(() => setCopied(false), 2000); // 2 秒后清除复制状态  
//       message.success('字符串已复制到剪贴板！'); // 显示成功消息  
//     } catch (err) {  
//       message.error('复制失败：' + err.message); // 显示错误消息  
//     }  
//   };  
  
//   return (  
//     <div>  
//       <Button icon={<CopyOutlined />} onClick={handleClick}>  
//         复制字符串  
//       </Button>  
//     </div>  
//   );  
// }  
  
// export default CopyButton;

import React, { useState } from 'react';    
import { Button, message } from 'antd';    
import { CopyOutlined } from '@ant-design/icons';    
    
function CopyButton() {    
  const [copied, setCopied] = useState(false);    
  const textToCopy = '这是一段要复制的字符串';    
    
  const handleClick = async () => {    
    try {  
      await navigator.clipboard.writeText(textToCopy);  
      setCopied(true);  
      setTimeout(() => setCopied(false), 2000);  
      message.success('字符串已复制到剪贴板！');  
    } catch (err: any) { // 添加了类型注解：Error  
      if (err && err.message) {  
        message.error('复制失败：' + err.message);  
      } else {  
        message.error('复制失败：未知错误');  
      }  
    }    
  };    
    
  return (    
    <div>    
      <Button icon={<CopyOutlined />} onClick={handleClick}>    
        复制字符串    
      </Button>    
    </div>    
  );    
}    
    
export default CopyButton;












