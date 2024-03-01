import React, { useRef, useEffect} from 'react'; 
import {Flex}  from 'antd'
import BandChartMonth from '../components/Chart/BandChartMonth'
import BandChart from '../components/Chart/BandChart'
import LineChart from '../components/Chart/LineChart'
import LineChartCurve from '../components/Chart/LineChartCurve'
import axios from 'axios'; 
import{useQuery} from 'umi'
  
const App: React.FC = () => {  

  const projectDateQuery = useQuery(['projectDate'], {
    // queryFn: 一个返回 Promise 的函数，通常用于发起 HTTP 请求
    queryFn() {
      return axios.get('/api/projectData').then((res) => res.data);
    },
  }); 
  console.log(projectDateQuery )
  if(projectDateQuery.isLoading) return null;
  
  if (projectDateQuery.error) {  
    console.log(projectDateQuery.data.data)
  }  

  return (
    <Flex gap="small" vertical >
    <Flex > 
        <BandChartMonth></BandChartMonth>
        <BandChart title="自定义标题" discription="自定义描述" projectData={projectDateQuery.data.data} /> 

    </Flex >  
    <Flex >
      <LineChart  ></LineChart>
      <LineChartCurve></LineChartCurve>
    </Flex>
    </Flex>


  );  
};  
  
export default App;