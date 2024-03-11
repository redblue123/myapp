import { defineMock } from 'umi';

// 类型声明
type dataData = {
  date: Date;
  value: number;
};

// 数据集
  // 定义柱状图的数据  
  const dataData= [  
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

  

// defineMock 是 umi 中模拟请求响应数据的方法
export default defineMock({
  'GET /api/dataData': (_, res) => {
    res.send({
      // status: 'ok',
      data: dataData,
    });
  }
});

