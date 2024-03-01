


import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';  
 

const App: React.FC = () => {  
  interface Project {  
    x: number;   
    y: number;
    label: string;  
  } 
  const svgRef = useRef<SVGSVGElement>(null); 

  const projectData: Project[] = [  
    { x: 0, y: 0, label: 'Label A' },  
    { x: 1, y: 2, label: 'Label B' },  
    { x: 2, y: 1, label: 'Label C' },  
    { x: 3, y: 3, label: 'Label D' },  
  ];  

  // 声明图标的尺寸和边距  
  const width = 640;  
  const height = 400;  
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }; 

  // 定义 projectData 的最大值
  const projecX = projectData.map(d => d.x)
  const projecY = projectData.map(d => d.y) ;
  const maxX = projecX.reduce((max, projecX) => Math.max(max, projecX || 0), 0);
  const maxY = projecY.reduce((max, projecY) => Math.max(max, projecY || 0), 0);

  // 创建比例尺  
  const xScale = d3.scaleLinear()  
    .domain([0, maxX]) // 根据项目数据的 x 值范围设置  
    .range([margin.left, width - margin.right]);  

  const yScale = d3.scaleLinear()  
    .domain([0, maxY]) // 根据项目数据的 y 值范围设置  
    .range([height - margin.bottom, margin.top]);  
  

  useEffect(() => {  
    if (svgRef.current) {
      const svg = d3.select(svgRef.current); 
      
      // 创建 x 轴  
      const xAxis = d3.axisBottom(xScale);  
      svg.append('g')  
        .attr('transform', `translate(0,${height - margin.bottom})`)  
        .call(xAxis);  
  
      // 创建 y 轴  
      const yAxis = d3.axisLeft(yScale);  
      svg.append('g')  
        .attr('transform', `translate(${margin.left},0)`)  
        .call(yAxis); 

      // 创建折线图  
      const line = d3.line()  
        .x(d => xScale(d.x))  
        .y(d => yScale(d.y))  
        .curve(d3.curveCardinal);  
        
       // 添加折线路径  
      svg.append('path')  
        .attr('d', line(projectData))  
        .attr('fill', 'none')  
        .attr('stroke', 'rgba(110, 30, 30, 0.75)')
        .attr("stroke-width", 2);

      svg.selectAll('.label') 
      .data(projectData)
      .join('text')
      .attr('class','lable')
      .attr('x', d => xScale(d.x)) // 设置标签的x坐标
      .attr('y', d => yScale(d.y) - 5) // 设置标签的y坐标，稍微向下偏移以避免与折线重叠
      .attr('text-anchor', 'middle') // 居中文本
      .text(d => `${d.label} (${d.y})`); // 设置标签的文本内容  .text(d => d.label);    
    }  
  }, [svgRef, width, height]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    
    <svg ref={svgRef} width={width} height={height} />  
  );  
};  
  
export default App;