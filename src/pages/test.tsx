// 图表框架
import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';  
interface valueData{
  date: Date ;
  value: number;
}

interface BandChartMonthProps {

  title?: string;
  discription?:string;
  icon?:any; 
  dataData:valueData[];
}


  const dataData: valueData[] = [  
    { date: new Date(2023, 0, 1), value: 20 },  
    { date: new Date(2023, 1, 1), value: 40 },  
    { date: new Date(2023, 2, 1), value: 30 },  
    { date: new Date(2023, 3, 1), value: 50 },  
    { date: new Date(2023, 4, 1), value: 20 },
    { date: new Date(2023, 5, 1), value: 40 },
    { date: new Date(2023, 6, 1), value: 30 },
    { date: new Date(2023, 7, 1), value: 100 },
    { date: new Date(2023, 8, 1), value: 20 },
    { date: new Date(2023, 9, 1), value: 40 },
    { date: new Date(2023, 10, 1), value: 30 },
    { date: new Date(2023, 11, 1), value: 40 },
    { date: new Date(2023, 12, 1), value: 20 },  
    // ... 更多数据  
  ];  


    const width = 640;  
    const height = 400;  
    const marginTop = 20;  
    const marginRight = 20;  
    const marginBottom = 30;  
    const marginLeft = 40;  
     
// 转换函数，将Date转换为时间戳  
// function convertDateToTimestamp(data: (Date | number)[][]): [number, number][] {  
//   return data.map(([date, value]) => {  
//     if (date instanceof Date) {  
//       return [date.getTime(), value as number]; // 使用getTime()将Date转换为时间戳  
//     } else {  
//       return [date as number, value as number]; // 如果已经是数字，则直接返回  
//     }  
//   });  
// }  

const App: React.FC<BandChartMonthProps>= () => {  

  const svgRef = useRef<SVGSVGElement>(null); 

  const width = 960;  
  const height = 500;  

  useEffect(() => {  
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      .attr("width", width)  
      .attr("height", height);  
      
      const x = d3.scaleTime()  
      .domain([new Date(2023, 0, 1), new Date(2024, 0, 1)])  
      .range([marginLeft, width - marginRight]);

      const y = d3.scaleLinear()  
      .domain([0, d3.max(dataData, (d) => d.value)!])    // 使用d3.max来获取value的最大值 
      .range([height - marginBottom, marginTop]);

    // 使用转换后的数据创建line生成器  
    const lineGenerator = d3.line<valueData>()  
    .x((d) => x(d.date)) // 使用 x 比例尺转换日期  
    .y((d) => y(d.value)); // 使用 y 比例尺转换值  



// 使用转换后的数据生成SVG路径字符串  
// const pathString = lineGenerator(dataData);

      svg.append("g")  
        .attr("transform", `translate(0,${height - marginBottom})`)  
        .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1))); 
        
      svg.append("g")  
      .attr("transform", `translate(${marginLeft},0)`)  
      .call(d3.axisLeft(y));          

      // 添加折线图路径
      svg.append("path")    
      .attr("d",lineGenerator(dataData)) 
      .attr("fill", "none")    
      .attr("stroke", '#BE8C4A')    
      .attr("stroke-width", 3);

    // 添加数值标签  
    svg.selectAll('.label')  
      .data(dataData)  
      .join('text')  
      .attr('class', 'label')  
      .attr('x', (d) => x(d.date)) // 柱形中心 x 坐标  
      .attr('y', (d) => y(d.value) -6) // 柱形顶部稍下方  
      .attr('dy', '0.35em') // 垂直对齐  
      .attr('text-anchor', 'middle') // 文本水平居中  
      .text((d) => d.value); // 显示数值 
    }  
  }, [svgRef, width, height, dataData]); 
  
  return (  
    
    <svg ref={svgRef} width={width} height={height} />  
  );  
};  
  
export default App;