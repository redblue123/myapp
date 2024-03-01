import { defineMock } from 'umi';

// 类型声明
type ProjectData = {
  name: string;
  value: number;
};

// 数据集
  // 定义柱状图的数据  
  const projectData= [  
    { name: '穆迪', value: 10 },  
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

// defineMock 是 umi 中模拟请求响应数据的方法
export default defineMock({
  'GET /api/projectData': (_, res) => {
    res.send({
      // status: 'ok',
      data: projectData,
    });
  }
});

