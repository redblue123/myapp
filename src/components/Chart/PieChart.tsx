import React, { useRef, useEffect } from 'react';  
import * as d3 from 'd3';

interface Datum{
  name:string;
  value:number;

}

  
  // 声明图标的尺寸和边距  
  const width = 640;  
  const height = 400;  
  const margin = { top: 20, right: 20, bottom: 30, left: 40 }; 

  // const pieData: Datum[]  = [  
  //   { name: '穆迪', value: 10 },  
  //   { name: '财汇', value: 100 },  
  //   { name: 'MSCI', value: 30 },
  //   { name: '启信宝', value: 64 },
  //   { name: '同余', value: 120 },
  // ]; 

  interface PieChartProps {
    title?: string;
    discription?:string;
    icon?:any; 
    pieData?:Datum[];
  }

const App: React.FC<PieChartProps> = ({
    title = '默认标题',  
    discription = '默认描述',  
    pieData = [], // 为 pieData 提供一个空数组作为默认值  

}) => { 

      // 计算饼图的半径  
      const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;  
   
      // 创建弧生成器  


    // SVG元素引用
    const svgRef = useRef<SVGSVGElement>(null); 
    
  useEffect(() => {  
    if (svgRef.current) {
      const svg = d3.select(svgRef.current); 

      const arc = d3.arc<d3.PieArcDatum<Datum>>() 
      .innerRadius(radius - 10)
      .outerRadius(100) 


    // 饼图布局  
    const pie = d3.pie<Datum>() 
    .padAngle(1 / 50) 
    .sort(null)  
    .value(d => d.value);  

      // 设置圆心点位置  
      const centerX = width / 2;  
      const centerY = height / 2;
      const pieColor = 'rgba(110, 30, 30,' 

      // 创建颜色比例尺  
      const color = d3.scaleOrdinal<string>()  
        .domain(pieData.map(d => d.name))  
        .range(['rgba(110, 30, 30, 0.65)','rgba(110, 30, 30, 0.35)', 'rgba(110, 30, 30, 0.25)', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']); 

      // 创建饼图组  
      const pieGroup = svg.append('g')  
      .attr('class', 'pie-group')  
      .attr('transform', `translate(${width / 2}, ${height / 2})`); // 将组定位到圆心        
      
      // 绘制饼图  
      pieGroup.selectAll('.arc')  
        .data(pie(pieData))  
        .enter()  
        .append('path')  
        .attr('class', 'arc')  
        .attr('d', arc)   
        .attr('fill', d => color(d.data.name)); 

      // 添加一个组来容纳所有的标签  
      const nameGroup = svg.append('g')  
        .attr('class', 'name-group')  
        .attr('transform', `translate(${centerX}, ${centerY})`); // 将组定位到圆心  
 
      nameGroup.selectAll('.label')  
        .data(pie(pieData))  
        .enter()  
        .append('text')  
        .attr('class', 'name')  
        .attr("transform", d => {  
          // 计算标签的位置  
          const centroid = arc.centroid(d);  
          return `translate(${centroid[0]}, ${centroid[1]})`;  
        })  
        .text(d => d.data.name + ': ' + d.data.value); // 显示扇形的标签  

        
      // 将饼图移动到指定的圆心位置  
      // svg.selectAll('*').attr('transform', `translate(${centerX}, ${centerY})`);
    }  
  }, [svgRef, width, height,pieData ]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    
    <div style={{position: 'relative', width: '100%', height: '100%' ,textAlign:'center'}}>
    <h3 style={{ margin:'0'}}>{title}</h3>
    <h4 style={{ margin:'0'}}>{discription}</h4>
    <svg ref={svgRef} width={width} height={height} /> 
    </div>    
  );  
};  
  
export default App;