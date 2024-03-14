// 横向柱形图
import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';  
 // 定义 BandChartProps 接口，其中 name 和 value 是必须的属性 
 
interface nameData {
  name: string;  
  value: number;
}

interface BandChartProps {  

  title:string;
  discription:string;
  projectData: nameData[]; // 指定了数组元素的类型  
}  
  
// 定义 projectData 为 BandChartProps 类型的数组  
// const projectData= [  
//   { name: '穆迪', value: 10 },  
//   { name: '财汇', value: 100 },  
//   { name: 'MSCI', value: 30 },
//   { name: '启信宝', value: 64 },
//   { name: '同余', value: 420 },
//   { name: 'BBG', value: 84 },
//   { name: '上海寰擎', value: 34 },
//   { name: '外汇交易中心', value: 74 },
//   { name: '证通数据', value: 34 },
//   { name: 'WIND', value: 10 },   
// ];  


  // 声明图表的尺寸和边距  
  const width = 640  ;  
  const height = 400;  
  const marginTop = 20;  
  const marginRight = 20;  
  const marginBottom = 30;  
  const marginLeft = 40; 




const App: React.FC<BandChartProps> = ({
  title = '默认标题',  
  discription = '默认描述',  
  projectData = [], // 为 projectData 提供一个空数组作为默认值 

}) => { 


  const svgRef = useRef<SVGSVGElement>(null); 


  const maxValue = d3.max(projectData.map(d => d.value)) || 0
  

  useEffect(() => {  
    if (svgRef.current) {
      const svg = d3.select(svgRef.current); 
      // 设置比例尺
      const yScale = d3.scaleBand()
        .domain(projectData.map(d => d.name))
        .range([0, height - marginBottom])
        .padding(0.1)
        


        const xScale = d3.scaleLinear()
        .domain([0,maxValue])
        .range([0, width - marginLeft - marginRight]);
        
      
      // 定义坐标轴
      const yAxis = d3.axisLeft(yScale);
      const xAxis = d3.axisBottom(xScale);

      // 绘制坐标轴
      svg.append('g').call(yAxis)
      .attr("transform", `translate(${marginLeft},0)`) 
      // .attr('transform','rotate(-90)') 
      svg.append('g').call(xAxis)
      .attr("transform", `translate(40,${height - marginBottom})`)
      

      // 添加柱形
      svg.selectAll('.bar')
      .data(projectData)
      .join('rect')
      .attr('class','bar')

      .attr('height',(d, i) =>yScale.bandwidth() )  // 柱形宽度
      .attr('width',(d) => d.value )  // 柱形值
      .attr('x',(d, i) => 0 + marginLeft   )
      // .attr('y',(d, i) => i * yScale.bandwidth()+ i * 0 )
      .attr('y',d => yScale(d.name) || 0)
      .attr("fill", 'rgba(110, 30, 30, 0.75)')
      // .attr("transform", "translate(100, 1000)") 
      // .attr("transform", "rotate(90 0 0)")
      
      // ((height - marginBottom) / i) - yScale.bandwidth() 
      

      
      


   
    }  
  }, [svgRef, width, height]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    <div style={{textAlign:'center'}}>
    <h3 style={{ margin:'0'}}>{title}</h3>
    <h4 style={{ margin:'0'}}>{discription}</h4>
    <svg ref={svgRef} width={width} height={height} /> 
    </div>  
  );  
};  
  
export default App;