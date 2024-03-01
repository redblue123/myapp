import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';  



const BandChart: React.FC = () => {  
 
  const svgRef = useRef<SVGSVGElement>(null);  
  
  // 声明图标的尺寸和边距  
  const width = 640  ;  
  const height = 400;  
  const marginTop = 20;  
  const marginRight = 20;  
  const marginBottom = 30;  
  const marginLeft = 40;  
  
  // 定义柱状图的数据  
  const projectData= [  
    { name: '穆迪', value: 23 },  
    { name: '财汇', value: 100 },  
    { name: 'MSCI', value: 30 },
    { name: '启信宝', value: 64 },
    { name: '同余', value: 34 },
    { name: 'BBG', value: 84 },
    { name: '上海寰擎', value: 34 },
    { name: '外汇交易中心', value: 74 },
    { name: '证通数据', value: 34 },
    { name: 'WIND', value: 10 },   
  ];  

  // 计算每个柱形图之间的间距  
  const barSpacing = (width - marginLeft - marginRight) / (projectData.length * 10); 
  
  // 每个柱形的宽度 
  const bandWidth = (width-(projectData.length-1)* barSpacing)/projectData.length/2;

// 生成一个包含每个柱形图 x 位置的数组  


  const projectNames = projectData.map(d => d.name); 
  const projecValue = projectData.map(d => d.value) ; 
  const maxValue = projecValue.reduce((max, value) => Math.max(max, value || 0), 0); 
console.log(barSpacing)
  
  useEffect(() => {  
    if (svgRef.current) {  
      const svg = d3.select(svgRef.current);  
      
      const x = d3.scaleBand()
        .domain(projectNames)
        .range([marginLeft, width - marginRight])
        .paddingInner(0.1)

      const y = d3.scaleLinear()
      .domain([0,maxValue])
      .range([height - marginBottom, marginTop]);

      const barXPositions = projectData.map((_, index) => {  
        return marginLeft + index * (barSpacing + x.bandwidth());  
      });  

      svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`) 
      .call(d3.axisBottom(x))

      svg.append("g")  
      .attr("transform", `translate(${marginLeft},0)`)  
      .call(d3.axisLeft(y)); // 添加Y轴  
      // console.log(projecValue)

      // 添加柱形  
      svg.selectAll('.bar')  
        .data(projectData)  
        .join('rect')  
        .attr('class', 'bar')  
        .attr('x', (d, i) => barXPositions[i])
        .attr('y', (d) => y(d.value))  
        .attr('height', (d) => height - marginTop - marginBottom - y(d.value))  
        .attr('width', x.bandwidth())
        .attr("fill", 'rgba(110, 30, 30, 0.75)')
      
      // 添加数值标签  
      svg.selectAll('.label')  
        .data(projectData)  
        .join('text')  
        .attr('class', 'label')  
        .attr('x', (d, i) => barXPositions[i]+ bandWidth)  // bandWidth每个柱形的宽度
        .attr('y', (d) => y(d.value) - 20) // 稍微低于柱形顶部  
        .attr('dy', '0.75em') // 垂直对齐  
        .attr('text-anchor', 'middle') // 文本水平居中  
        .text((d) => d.value); // 显示数值
    }  
  }, [svgRef, width, height, projectData]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    
    <svg ref={svgRef} width={width} height={height} />  
  );  
};  
  
export default BandChart;