
import React, { useRef, useEffect, useState } from 'react';  
import * as d3 from 'd3';

interface Datum{
  name:string;
  value:number;

}
// 声明图标的尺寸和边距  
const width = 640;  
const height = 400;  
const margin = { top: 20, right: 20, bottom: 30, left: 40 }; 

  const pieData: Datum[]  = [  
    { name: '穆迪', value: 10 },  
    { name: '财汇', value: 100 },  
    { name: 'MSCI', value: 30 },
    { name: '启信宝', value: 64 },
    { name: '同余', value: 120 },
  ]; 
 

  interface PieChartProps {
    title?: string;
    discription?:string;
    icon?:any; 
    pieData?:Datum[];
  }

const App: React.FC<PieChartProps> = ({
    title = '默认标题',  
    discription = '默认描述',  
    // pieData = [], // 为 pieData 提供一个空数组作为默认值  
}) => { 
    const total = pieData.reduce((sum, d) => sum + d.value, 0);

    // 计算所有数据的总和  
    const totalSum = pieData.reduce((sum, d) => sum + d.value, 0);

    const dataWithPercentages = pieData.map(d => ({  
      ...d,  
      percentage: Math.round((d.value / totalSum) * 100) // 计算百分比并四舍五入  
    }));

    // 计算饼图的半径  
    const radius = Math.min(width - margin.left - margin.right, height - margin.top - margin.bottom) / 2;  

    const [isHovering, setIsHovering] = useState<null | { name: string; percentage: string }>(null); 
    const [hoverX, setHoverX] = useState(0);  
    const [hoverY, setHoverY] = useState(0);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });  

    // SVG元素引用
    const svgRef = useRef<SVGSVGElement>(null); 
    // hover后矩形
    const tooltipRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {  
    if (svgRef.current) {
      // 当执行handleResize的时候会使用setWindowSize函数来更新 windowSize 的状态

      const handleMouseMove = (event: MouseEvent) => { 
        // 获取原始的clientX和clientY值  
        const rawHoverX = event.clientX;  
        const rawHoverY = event.clientY; 
        // 根据窗口尺寸调整hoverX和hoverY的值  
        if (windowSize.width > 640 && windowSize.height > 400) {  
          setHoverX(rawHoverX - 300);  
          setHoverY(rawHoverY - 100);  
        } else {  
          setHoverX(rawHoverX - 100);  
          setHoverY(rawHoverY - 100);  
        }  
      };

      const handleMouseLeave = () => {  
        setIsHovering(null);  
      }

      window.addEventListener('mousemove', handleMouseMove);  
      window.addEventListener('mouseleave', handleMouseLeave);  

      const handleResize = () =>{
        setWindowSize({width:window.innerWidth, height:innerHeight});
      }
      // 这行代码向浏览器窗口的resize事件添加了一个事件监听器。每当浏览器窗口大小发生变化时，浏览器会自动调用handleResize函数，从而更新windowSize状态.
      window.addEventListener('resize', handleResize)

      // if (windowSize.width > 640 && windowSize.height > 400) {  
      //   setHoverX(hoverX - 300);  
      //   setHoverY(hoverY - 100);  
      // }
      const svg = d3.select(svgRef.current); 

      const arc = d3.arc<d3.PieArcDatum<Datum>>() 
      .innerRadius(radius)
      .outerRadius(100) 


    // 饼图布局  
    const pie = d3.pie<Datum>() 
    .padAngle(1 / 50) 
    .sort(null)  
    .value(d => d.value);  


      // 设置圆心点位置  
      const centerX = width / 2;  
      const centerY = height / 2;

      // 创建颜色比例尺  
      const color = d3.scaleOrdinal<string>()  
        .domain(pieData.map(d => d.name))  
        .range(['rgba(110, 30, 30, 0.65)','rgba(110, 30, 30, 0.35)', 'rgba(110, 30, 30, 0.25)', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']); 

      // 计算饼图的布局  
      const pieLayout = pie(dataWithPercentages);   

      // 创建饼图组  
      const pieGroup = svg.append('g')  
      .attr('class', 'pie-group')  
      .attr('transform', `translate(${centerX}, ${centerY})`); // 将组定位到圆心 
     
      // 添加一个组来容纳所有的标签  
      const nameGroup = svg.append('g')  
        .attr('class', 'name-group')  
        .attr('transform', `translate(${centerX}, ${centerY})`); // 将组定位到圆心 

        
      // 创建标签
      nameGroup.selectAll('.label')  
        .data(pieLayout)  
        .enter()  
        .append('text')  
        .attr('class', 'name')  
        .attr('transform', (d) => `translate(${arc.centroid(d)})`) 
        .text((d) => d.data.name + ': ' + `${dataWithPercentages[d.index].percentage}%`+ (`(`+d.data.value+`)`)); // 使用计算好的百分比 
        // .text(d => d.data.name + ': ' + d.data.value); // 显示扇形的标签  

      // 将饼图移动到指定的圆心位置  
      // svg.selectAll('*').attr('transform', `translate(${centerX}, ${centerY})`);

      // 绘制饼图  
      pieGroup.selectAll('.arc')  
        .data(pieLayout)  
        .enter()  
        .append('path')  
        .attr('class', 'arc')  
        .attr('d', arc)   
        .attr('fill', d => color(d.data.name))

        .on('mouseover',(event, d) => {  

          const percentage = ((d.data.value / total) * 100).toFixed(1)
          setIsHovering({ name: d.data.name, percentage: `${percentage}%` })
          
          // 设置描边为黑色  
          d3.select(event.target)  
          .transition()  
          .duration(200) // 动画持续时间  
          .attr('stroke', 'black') // 描边颜色为黑色  
          .attr('stroke-width', 1); // 设置描边宽度 

        })
        .on('mouseout', (event, d) => {  
          setIsHovering(null);

          // 移除描边或设置回透明  
          d3.select(event.target)  
          .transition()  
          .duration(200)  
          .attr('stroke', 'none') // 没有描边或者透明  
          .attr('stroke-width', 0); // 描边宽度为0   
      
        });  
    // 监听鼠标移动事件  
    svg.on('mousemove', (event) => {  
      const mouse = d3.pointer(event);  
      setHoverX(mouse[0]);  
      setHoverY(mouse[1]); 
       
    });
    // 清理函数  
    return () => {  
      svg.selectAll('*').remove();
      svg.on('mousemove', null);
      svg.on('mouseout', null);
      svg.on('mouseover', null);
      window.removeEventListener('resize', handleResize);
      
      
    };    
    }
  }, [svgRef, width, height,pieData, windowSize]); // 确保当 projectData 变化时重新渲染  
  
  return (  
    
    <div  style={{position: 'relative', textAlign:'center'}}>
    <h3 style={{ margin:'0'}}>{title}</h3>
    <h4 style={{ margin:'0'}}>{discription}</h4>
    <svg  ref={svgRef} width={width} height={height}>
    </svg>
    {isHovering && (  
        <div   
          ref={tooltipRef}  
          style={{  
            position: 'absolute',   
            left: `${hoverX}px`,  
            top: `${hoverY}px`, 
            backgroundColor: 'white',  
            border: '1px solid black',  
            padding: '10px',  
            // 添加其他样式...  
          }}  
        > 
          <p>{`名称: ${isHovering.name}`}</p> 
          <p>{`百分比: ${isHovering.percentage}`}</p>  
        </div>  
      )} 

    </div>    
  );  
};  
  
export default App;