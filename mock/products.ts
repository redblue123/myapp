import { defineMock } from 'umi';

type Product = {
  id: string;
  name: string;
  字段类型:string;
};

let products: Product[] = [
  { id: '1', 字段类型:'string', name: 'zhanglin' },
  { id: '2', 字段类型:'string', name: 'songjia' },
  { id: '3', 字段类型:'string', name: 'liaoxiaofang' },
  { id: '4', 字段类型:'string', name: 'shishuyu' },
  { id: '5', 字段类型:'string', name: 'liuyingwei' },
];

export default defineMock({
  'GET /api/products': (_, res) => {
    res.send({
      status: 'ok',
      data: products,
    });
  },
  'DELETE /api/products/:id': (req, res) => {
    products = products.filter((item) => item.id !== req.params.id);
    res.send({ status: 'ok' });
  },
});