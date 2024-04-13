
import styles from '../layouts/index.less'; 
import { Divider, Typography,Flex,ConfigProvider,Card, Space , Tooltip,Avatar} from 'antd';
import {theme} from '@/layouts' //公共样式引入
import '../../libs/highlight/styles/panda-syntax-light.css'; 



import HomeCard from '@/components/Card/HomeCard';
import homeicon1 from '@/assets/homeicon/homeicon1.svg'
import homeicon2 from '@/assets/homeicon/homeicon2.svg'
import TempButton from '@/components/Button/TempButton';
import PortalCarousel from '@/components/Carousel/PortalCarousel';
import banner1 from '@/assets/banner/banner1.svg'
import banner2 from '@/assets/banner/banner2.svg'
import banner3 from '@/assets/banner/banner3.svg'



const App: React.FC = () => { 
  const images = [
    banner1,
    banner2,
    banner3,
  ] 

  return (
      
    <ConfigProvider theme={theme}>  
<Flex gap="small"  vertical className={styles.flexborder}>
  <Space >
  <Flex gap="small" wrap="wrap" >
 
  <TempButton
  ></TempButton>
  <PortalCarousel images={images} interval={5000} />
    </Flex>
    
  </Space> 
</Flex> 
</ConfigProvider>                                        
  );  
}; 
  
export default App;


//---




