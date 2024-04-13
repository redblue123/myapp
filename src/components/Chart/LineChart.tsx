import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';

interface valueData{
  date: Date ;
  value: number;
}

interface BandChartMonthProps {

  title?: string;
  discription?:string;
  dataData:valueData[];
}

const App: React.FC<BandChartMonthProps> = ({
  title = '默认标题',  
  discription = '默认描述',  
  dataData = [], // 为 projectData 提供一个空数组作为默认值  

}) => {  
  const svgRef = useRef<SVGSVGElement>(null);  
  
  // 声明图标的尺寸和边距  
  const width = 640;  
  const height = 400;  
  const marginTop = 20;  
  const marginRight = 20;  
  const marginBottom = 30;  
  const marginLeft = 40;  
  
  // 已通过请求响应数据的方式获取数据
  // const dataData= [  
  //   { date: new Date(2023, 0, 1), value: 20 },  
  //   { date: new Date(2023, 1, 1), value: 40 },  
  //   { date: new Date(2023, 2, 1), value: 30 },  
  //   { date: new Date(2023, 3, 1), value: 50 },  
  //   { date: new Date(2023, 4, 1), value: 20 },
  //   { date: new Date(2023, 5, 1), value: 40 },
  //   { date: new Date(2023, 6, 1), value: 30 },
  //   { date: new Date(2023, 7, 1), value: 100 },
  //   { date: new Date(2023, 8, 1), value: 20 },
  //   { date: new Date(2023, 9, 1), value: 40 },
  //   { date: new Date(2023, 10, 1), value: 30 },
  //   { date: new Date(2023, 11, 1), value: 40 },
  //   { date: new Date(2023, 12, 1), value: 20 },  
  //   // ... 更多数据    
  // ];  
  
  // 横轴  
  const x = d3.scaleTime()  
  .domain([new Date(2023, 0, 1).getTime(), new Date(2024, 0, 1).getTime()]) // 使用 getTime() 来获取时间戳  
  .range([marginLeft, width - marginRight]);
  
  // 纵轴  
  const y = d3.scaleLinear()  
  .domain([0, d3.max(dataData, (d) => d.value)!])    // 使用d3.max来获取value的最大值 
  .range([height - marginBottom, marginTop]);

    // 使用转换后的数据创建line生成器  
    const lineGenerator = d3.line<valueData>()  
    .x((d) => x(d.date)) // 使用 x 比例尺转换日期  
    .y((d) => y(d.value)); // 使用 y 比例尺转换值  
    
  useEffect(() => {  
    if (svgRef.current) { 

      // Create the SVG container  
      const svg = d3.select(svgRef.current)  
        .attr("width", width)  
        .attr("height", height);  


      // Add the x-axis  
      svg.append("g")  
        .attr("transform", `translate(0,${height - marginBottom})`)  
        .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1))); // 设置 x 轴刻度为每月一个  
  
      // Add the y-axis  
      svg.append("g")  
        .attr("transform", `translate(${marginLeft},0)`)  
        .call(d3.axisLeft(y));  

      // 添加柱形图
      // svg.selectAll(".bar")  
      //   .data(dataData)  
      //   .join("rect")  
      //   .attr("class", "bar")  
      //   .attr("x", (d) => x(d.date))  
      //   .attr("y", (d) => y(d.value))  
      //   .attr("width", 16) // 设置柱形的宽度  x.bandwidth()
      //   .attr("height", (d) => height - marginBottom - y(d.value)) // 设置柱形的高度  
      //   .attr("fill", 'rgba(110, 30, 30, 0.75)'); // 设置柱形的填充颜色 

    // 添加数值标签  
    svg.selectAll('.label')  
      .data(dataData)  
      .join('text')  
      .attr('class', 'label')  
      .attr('x', (d) => x(d.date)) // 柱形中心 x 坐标  
      .attr('y', (d) => y(d.value) - 6) // 柱形顶部稍下方  
      .attr('dy', '0.35em') // 垂直对齐  
      .attr('text-anchor', 'middle') // 文本水平居中  
      .text((d) => d.value); // 显示数值 
console.log(lineGenerator)
// 添加折线图路径  
svg.append("path")    
  .attr("d", lineGenerator(dataData)) // 直接调用 lineGenerator 并传入数据  
  .attr("fill", "none")    
  .attr("stroke", '#BE8C4A')    
  .attr("stroke-width", 3);

      return () => {  
        // Remove any event listeners or bindings here  
      };  
    }  
  }, []); // Only run this effect once, on mount  
  
  return (  
    // <div style={{position: 'relative', width: '100%', height: '100%' ,textAlign:'center'}}></div>
    <div style={{textAlign:'center'}}>
    <h3 style={{ margin:'0'}}>{title}</h3>
    <h4 style={{ margin:'0'}}>{discription}</h4>
    <svg ref={svgRef} width={width} height={height} /> 
    </div>  
  );  
};  
  
export default App;