
import styles from '../../layouts/index.less'; 
import React from 'react';
import { Card, Tooltip,Avatar} from 'antd';
// import onepage_homeicon from '@/assets/homeicon/onepage_homeicon.svg'

//---
const gridStyle: React.CSSProperties = {
  width: '28em',
  height:'10em',
  textAlign: 'center',
  backgroundColor:'rgba(0, 0, 0, 0.04)',
  borderColor:'rgba(110, 30, 30, 0.55)'
  
};


const {Meta} = Card;

interface HomeCardProps {  
  title?: string; // 默认值为空字符串  
  description?: string;  
  Tooltiptitle?: string;
  icon?:any;  
}  

const HomeCard: React.FC<HomeCardProps> = ({ Tooltiptitle ='', title = '', description = '' ,icon}) => { 
  return (  
    <Card hoverable style={gridStyle}>  
      <Tooltip placement="bottom" title={Tooltiptitle}>  
        <Meta  
          style={{  
            display: "flex",  
            justifyContent: "center",  
            alignItems: "center",  
          }}  
          avatar={<Avatar src={icon} style={{ width: "56px", height: "56px" }} />}  
          title={title} // 使用props中的title覆盖内部title  
          description={description} // 使用props中的description覆盖内部description  
        />  
      </Tooltip>  
    </Card>  
  );  
};

export default HomeCard;




  




