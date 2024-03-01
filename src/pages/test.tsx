import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';  
 
const App: React.FC = () => {  
  interface Project {  
    x: number;   
    y: number;
  } 

  // 饼图数据  
  const data: Datum[] = [  
    { label: '数据1', value: 30 },  
    { label: '数据2', value: 45 },  
    { label: '数据3', value: 10 },
    { label: '数据4', value: 15 },
    { label: '数据5', value: 15 },
    { label: '数据6', value: 15 },  
  ];  

  // 声明图标的尺寸和边距  
  const width = 640;  
  const height = 400;  
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };  

    // 饼图布局  
    const pie = d3.pie<Datum>() 
    .padAngle(1 / 50) 
    .sort(null)  
    .value(d => d.value);  

    // SVG元素引用
    const svgRef = useRef<SVGSVGElement>(null); 
    
  useEffect(() => {  
    if (svgRef.current) {
      const svg = d3.select(svgRef.current); 

      // 计算饼图的半径  
      const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;  

      // 创建弧生成器  
      const arc = d3.arc()  
        .outerRadius(radius  - 10)  
        .innerRadius(100); 

      // 设置圆心点位置  
      const centerX = width / 2;  
      const centerY = height / 2;
      const pieColor = 'rgba(110, 30, 30,' 

      // 创建颜色比例尺  
      const color = d3.scaleOrdinal<Datum, string>()  
        .domain(data.map(d => d.label))  
        .range(['rgba(110, 30, 30, 0.65)','rgba(110, 30, 30, 0.35)', 'rgba(110, 30, 30, 0.25)', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']); 

      // 创建饼图组  
      const pieGroup = svg.append('g')  
      .attr('class', 'pie-group')  
      .attr('transform', `translate(${width / 2}, ${height / 2})`); // 将组定位到圆心        
      
      // 绘制饼图  
      pieGroup.selectAll('.arc')  
        .data(pie(data))  
        .enter()  
        .append('path')  
        .attr('class', 'arc')  
        .attr('d', arc)  
        .attr('fill', d => color(d.data.label)) 

      // 添加一个组来容纳所有的标签  
      const labelGroup = svg.append('g')  
        .attr('class', 'label-group')  
        .attr('transform', `translate(${centerX}, ${centerY})`); // 将组定位到圆心  

      // 添加文本标签到组中  
      labelGroup.selectAll('.label')  
        .data(pie(data))  
        .enter()  
        .append('text')  
        .attr('class', 'label')  
        .attr("transform", d => {  
          // 计算标签的位置  
          const centroid = arc.centroid(d);  
          return `translate(${centroid[0]}, ${centroid[1]})`;  
        })  
        .text(d => d.data.label); // 显示扇形的标签  

      // 将饼图移动到指定的圆心位置  
      // svg.selectAll('*').attr('transform', `translate(${centerX}, ${centerY})`);
    }  
  }, [svgRef, width, height]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    
    <svg ref={svgRef} width={width} height={height}>  
      <g transform={`translate(${margin.left},${margin.top})`} />  
    </svg>   
  );  
};  
  
export default App;