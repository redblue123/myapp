// import styles from '../layouts/index.less'; 
// import { Button, Flex, ConfigProvider, Typography } from 'antd';  
// import { PoweroffOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import {theme} from '../layouts/index' //公共样式引入
// const { Paragraph, Text, Link } = Typography;

// const App: React.FC = () => {  
//   type RequestState =
//   | { status: 'idle' }
//   | { status: 'loading' }
//   | { status: 'success', data: any }
//   | { status: 'error', error: Error };

// const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' });
// console.log(requestState)

//   return (  
    
//     <ConfigProvider theme={theme}>  
//       <Flex gap="small" vertical >
//         <Flex  gap="small" vertical className={styles.flexborder}>           
//           <Flex gap="small" wrap="wrap" >               
//             <Button type="primary">主要按钮</Button>  
//             <Button>默认按钮</Button>  
//             <Button type="dashed">虚线按钮</Button>  
//             <Button type="text">文字按钮</Button>  
//             <Button type="link">链接按钮</Button>              
//           </Flex >                 
                                              
//         </Flex>
//       </Flex>                                       
//     </ConfigProvider>  
//   );  
// };  
  
// export default App;

import styles from '../layouts/index.less';   
import { Button, Flex, ConfigProvider, Typography } from 'antd';    
import { PoweroffOutlined } from '@ant-design/icons';  
import React, { useState } from 'react';  
import {theme} from '../layouts/index' //公共样式引入  
const { Paragraph, Text, Link } = Typography;  
  
const App: React.FC = () => {    
  
const f = (shouldInitialize: boolean)=>{  
  let tuple:[number, string, boolean] = [7,'ssr', true];
  let [a, b, c] = tuple;
  let x = 0; // 声明并初始化x  
  if(shouldInitialize){  
    //  x = 10; 

      
  }
  return tuple;   
  
}
 

const m = () => {  
  f(true); // 调用函数f  
  console.log(f(true))

}; 
f(false) // 返回undefined，因为shouldInitialize为false，x没有被赋值  
  return (    
      
    <ConfigProvider theme={theme}>    
      <Flex gap="small" vertical >  
        <Flex  gap="small" vertical className={styles.flexborder}>             
          <Flex gap="small" wrap="wrap" >                 
            <Button type="primary" onClick={m}>主要按钮</Button>   
          </Flex >                   
                                                
        </Flex>  
      </Flex>                                         
    </ConfigProvider>    
  );    
};    
    
export default App;