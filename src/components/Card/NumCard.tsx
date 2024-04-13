import styles from '../../layouts/index.less'; 
import React from 'react';
import { Card, Tooltip,Avatar} from 'antd';


//---
const gridStyle: React.CSSProperties = {
  width: '100%',
  height:'100%',
  textAlign: 'center',
  backgroundColor:'rgba(0, 0, 0, 0.04)',
  borderColor:'rgba(110, 30, 30, 0.55)',
  minWidth:'200px',//设置card的最小宽度,
  transition: 'box-shadow 0.3s ease', // 添加过渡效果 
  
  
};


const {Meta} = Card;

interface HomeCardProps {  
    title?: string; // 默认值为空字符串  
    description?: number | string; // 允许传入数字或字符串
    fontSize?:number; //新增属性来接收字号值  
    Tooltiptitle?: string;  
}  

const HomeCard: React.FC<HomeCardProps> = ({ Tooltiptitle ='', title = '',  description = 0, fontSize = 56}) => { 
    // 如果 description 是数字，则转换为字符串
    const descriptionText = typeof description === 'number' ? description.toString() : description; 
  // 确保description是字符串  
  const formattedDescription = typeof description === 'string' ? description : '';  
      // 构建内联样式对象  
  const descriptionStyle: React.CSSProperties = {  
    fontSize: `${fontSize}px`, // 使用传入的字号值  
    // 可以添加其他样式属性，如 color, fontWeight 等  
  }; 
  return (  
    <Card hoverable style={gridStyle}>  
      <div style={{ textAlign: 'center' }}>  
        {/* 自定义 Meta 渲染，将 description 放在上面，title 放在下面 */}  
        <div style={{ fontSize: '14px', marginBottom: '8px' }}>  
          <span style={descriptionStyle}>{description}</span>  
        </div>  
        <Tooltip placement="bottom" title={title}>  
          <span>{title}</span>  
        </Tooltip>  
      </div>  
    </Card>   
  );  
};

export default HomeCard;