// Icon.tsx    
import { Result } from 'antd';
import React from 'react';    
    
interface IconProps {    
  viewBox?: string;    
  id: string;    
}    
    
const Icon: React.FC<IconProps> = ({ id,viewBox  }) => {    
  return (    
    <svg id={id}  viewBox={viewBox}>
                
    </svg> 
 
  ); 
 
};    
    
export default Icon;

