import React, { useRef, useEffect} from 'react'; 
import {Flex}  from 'antd'
import BandChartMonth from '../components/Chart/BandChartMonth'
import BandChart from '../components/Chart/BandChart'
import BandChartY from '../components/Chart/BandChartY'
import LineChart from '../components/Chart/LineChart'
import LineChartCurve from '../components/Chart/LineChartCurve'
import PieChart from '../components/Chart/PieChart'
import axios from 'axios'; 
import{useQuery} from 'umi'
  
const App: React.FC = () => {  

  const projectDateQuery = useQuery(['projectDate'], {
    // queryFn: 一个返回 Promise 的函数，通常用于发起 HTTP 请求
    queryFn() {
      return axios.get('/api/projectData').then((res) => res.data);
    },
  }); 

  const lineChartCurveDateQuery = useQuery(['lineChartCurveDate'], {
    // queryFn: 一个返回 Promise 的函数，通常用于发起 HTTP 请求
    queryFn() {
      return axios.get('/api/lineChartCurveDate').then((res) => res.data);
    },
  }); 

  const pieDateQuery = useQuery(['pieDate'], {
    // queryFn: 一个返回 Promise 的函数，通常用于发起 HTTP 请求
    queryFn() {
      return axios.get('/api/pieData').then((res) => res.data);
    },
  }); 

  const dataDataQuery = useQuery(['dataData'],{
    queryFn(){
      return axios.get('/api/dataData').then((res) => {

        //我们需要处理的数据是 res.data.data
        const rawData = res.data.data
        const processedData = rawData.map((item:any) => {  
          // 假设我们需要将 date 字符串转换为 Date 对象  
          const date = new Date(item.date);
          date.setDate(1);  
          const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()); 
          item.date = formattedDate;    
          return { date, value: item.value };  
        }); 
        // 返回处理后的对象 
        return processedData;
      });
    }
  }) 

    // 处理 dataDataQuery, 这里位置不能变
    if(projectDateQuery.isLoading) return null;
  return (
    
    <Flex gap="small" vertical >
    <Flex gap="small" wrap="wrap" > 
        <BandChartY title="自定义标题" discription="自定义描述" projectData={projectDateQuery.data.data}></BandChartY>
        <BandChart title="自定义标题" discription="自定义描述" projectData={projectDateQuery.data.data} /> 
    </Flex >  
    <Flex gap="small" wrap="wrap">
    <PieChart title="自定义标题" discription="自定义描述" pieData={pieDateQuery.data.data}></PieChart>
    <LineChartCurve title="自定义标题" discription="自定义描述" Project = {lineChartCurveDateQuery.data}></LineChartCurve>

      
    </Flex>
    <Flex gap="small" wrap="wrap"> 
      <LineChart title="自定义标题" discription="自定义描述" dataData={dataDataQuery.data}></LineChart>
      <BandChartMonth title="自定义标题" discription="自定义描述" dataData={dataDataQuery.data}></BandChartMonth>
    </Flex >
    </Flex>

  );  
};  
  
export default App;