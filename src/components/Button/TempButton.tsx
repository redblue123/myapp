import React, { useState } from 'react';  
  
// 为组件的状态提供类型注解  
interface TempButtonState {  
  isHovered: boolean;  
}  
  
// TempButton组件本身不需要props，但如果有需要，你可以在这里定义它们  
// interface TempButtonProps {  
//   // ...你的props类型  
// }  
  
// 由于这个组件没有props，我们可以使用React.FC或React.FunctionComponent而不传递任何类型参数  
const TempButton: React.FC = () => {  
  // 使用类型注解初始化状态  
  const [isHovered, setIsHovered] = useState<TempButtonState['isHovered']>(false);  
  
  const handleMouseEnter = () => {  
    setIsHovered(true);
  };  
  
  const handleMouseLeave = () => {  
    setIsHovered(false);  
  };  
  
  return (  
    <button  
    //当用户的鼠标指针进入按钮的边界时，handleMouseEnter函数将被调用。
    //当用户的鼠标指针离开按钮的边界时，handleMouseLeave函数将被调用。
      onMouseEnter={handleMouseEnter}  
      onMouseLeave={handleMouseLeave}  
      style={{  
        backgroundColor: isHovered ? 'rgba(110, 30, 30, 0.8)' : 'rgba(110, 30, 30, 1)',  
        color: isHovered ? 'white' : 'white',  
        padding: '10px 20px',  
        border: 'none',  
        cursor: 'pointer',  
      }}  
    >  
      {isHovered ? '点击我' : '点击我'}  
    </button>  
  );  
};  
  
export default TempButton;