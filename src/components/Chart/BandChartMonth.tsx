import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';
 
  
const App: React.FC = () => {  
  const svgRef = useRef<SVGSVGElement>(null);  
  
  // 声明图标的尺寸和边距  
  const width = 640;  
  const height = 400;  
  const marginTop = 20;  
  const marginRight = 20;  
  const marginBottom = 30;  
  const marginLeft = 40;  
  
  // 横轴  
  const x = d3.scaleTime()  
    .domain([new Date(2023, 0, 1), new Date(2024, 0, 1)]) // 注意，D3 的月份是从 0 开始的，所以 0 代表 1 月  
    .range([marginLeft, width - marginRight]);  
  
  // 纵轴  
  const y = d3.scaleLinear()  
    .domain([0, 100])  
    .range([height - marginBottom, marginTop]);  
  
  // 示例数据  
  const data = [  
    { date: new Date(2023, 0, 1), value: 20 },  
    { date: new Date(2023, 1, 1), value: 40 },  
    { date: new Date(2023, 2, 1), value: 30 },  
    { date: new Date(2023, 3, 1), value: 50 },  
    { date: new Date(2023, 4, 1), value: 20 },
    { date: new Date(2023, 5, 1), value: 40 },
    { date: new Date(2023, 6, 1), value: 30 },
    { date: new Date(2023, 7, 1), value: 80 },
    { date: new Date(2023, 8, 1), value: 20 },
    { date: new Date(2023, 9, 1), value: 40 },
    { date: new Date(2023, 10, 1), value: 30 },
    { date: new Date(2023, 11, 1), value: 40 },
    { date: new Date(2023, 12, 1), value: 20 },  
    // ... 更多数据  
  ];  
  
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
  
      // Add the bars  
      svg.selectAll(".bar")  
        .data(data)  
        .join("rect")  
        .attr("class", "bar")  
        .attr("x", (d) => x(d.date))  
        .attr("y", (d) => y(d.value))  
        .attr("width", 16) // 设置柱形的宽度  x.bandwidth()
        .attr("height", (d) => height - marginBottom - y(d.value)) // 设置柱形的高度  
        .attr("fill", 'rgba(110, 30, 30, 0.75)'); // 设置柱形的填充颜色 

    // 添加数值标签  
    svg.selectAll('.label')  
      .data(data)  
      .join('text')  
      .attr('class', 'label')  
      .attr('x', (d) => x(d.date) + 8) // 柱形中心 x 坐标  
      .attr('y', (d) => y(d.value) - 6) // 柱形顶部稍下方  
      .attr('dy', '0.35em') // 垂直对齐  
      .attr('text-anchor', 'middle') // 文本水平居中  
      .text((d) => d.value); // 显示数值 

      // Cleanup function to be called on component unmount  
      return () => {  
        // Remove any event listeners or bindings here  
      };  
    }  
  }, []); // Only run this effect once, on mount  
  
  return (  
    <svg ref={svgRef} width={width} height={height} />
    
  );  
};  
  
export default App;