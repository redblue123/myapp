import { defineMock } from 'umi';



  // 定义柱状图的数据  

  const lineChartCurveDate= [  
    { x: 0, y: 0, label: 'Label A' },  
    { x: 1, y: 2, label: 'Label B' },  
    { x: 2, y: 1, label: 'Label C' },  
    { x: 3, y: 3, label: 'Label D' },  
  ];  

// defineMock 是 umi 中模拟请求响应数据的方法
export default defineMock({
  'GET /api/projectData': (_, res) => {
    res.send({
      // status: 'ok',
      data: lineChartCurveDate,
    });
  }
});

