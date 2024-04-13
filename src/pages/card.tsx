
import styles from '../layouts/index.less'; 
import { Divider, Typography,Flex,ConfigProvider,Card, Space , Tooltip,Avatar} from 'antd';
import {theme} from '../layouts' //公共样式引入
import {  Col, Row,  Button } from 'antd';
import '../../libs/highlight/styles/panda-syntax-light.css';
import NumCard from '@/components/Card/NumCard'; 
import HomeCard from '@/components/Card/HomeCard';
import homeicon1 from '@/assets/homeicon/homeicon1.svg'
import homeicon2 from '@/assets/homeicon/homeicon2.svg'



const App: React.FC = () => {  
  return (
      
    <ConfigProvider theme={theme}>  
<Flex gap="small"  vertical className={styles.flexborder}>
  <Space >
  <Flex gap="small" wrap="wrap" >
  <HomeCard title = '数据查询分析OnePage' description='高度整合数据库表、API数据服务等内部数据，支持通过表名、数据表内容标...' Tooltiptitle='高度整合数据库表、API数据服务等内部数据，支持通过表名、数据表内容标签、API说明、API出参等维度高效检索数据，提升用户触达，解决用户找数难的问题 ' icon={homeicon1}
  ></HomeCard>
  <HomeCard title = '企查查' description='高度整合数据库表、API数据服务等内部数据，支持通过表名、数据表内容标...' Tooltiptitle='高度整合数据库表、API数据服务等内部数据，支持通过表名、数据表内容标签、API说 '  icon={homeicon2}
  ></HomeCard>
    </Flex>

    
  </Space> 
</Flex> 
<Row justify="space-between" style={{ width: '100%', height: '10vh', minWidth:'1280px'}} gutter={[16, 16]} >  
      <Col span={6} >  
        <NumCard  
          title="采购项"  
          description="105"  
          fontSize={36}  
          Tooltiptitle="卡片提示"  
        />  
      </Col>
      <Col span={6} >  
        <NumCard  
          title="采购总金额"  
          description="1256000.00"  
          fontSize={36}  
          Tooltiptitle="卡片提示"  
        />  
      </Col>
      <Col span={6} >  
        <NumCard  
          title="访问人数"  

          description="123"  
          fontSize={36}  
          Tooltiptitle="卡片提示"  
        />  
      </Col>  
      <Col span={6} >  
        <NumCard  
          title="API调用次数"  
          description="32"  
          fontSize={36}  
          Tooltiptitle="卡片提示"  
        />  
      </Col>      
  </Row>
</ConfigProvider>                                        
  );  
}; 
  
export default App;