import React from 'react';  
import { Button, Popconfirm, Table } from 'antd';  
  
type Product = {
  id: string;
  name: string;
  字段类型:string;
};
  
type Products = Product[];  
  
type ProductListProps = {  
  onDelete: (id: string) => void;  
  products: Products;  
};  
  
const ProductList: React.FC<ProductListProps> = ({  
  onDelete,  
  products,  
}) => {  
  const columns = [  
    {  
      title: 'Name',  
      dataIndex: 'name',
    },
    {  
      title: '字段类型',  
      dataIndex: '字段类型',
    },   
    {  
      title: '操作',  
      render(text: string, record: Product) {  
          
        return (
           // 使用Popconfirm组件创建一个确认框，标题为“Delete?”。当用户点击“Delete”按钮时，它会调用onDelete回调函数并传递当前记录的ID作为参数。  
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>  
            <Button>Delete</Button>  
          </Popconfirm>  
        );  
      },  
    },  
  ];  
  return <Table rowKey="id" dataSource={products} columns={columns} />;  
};  
  
export default ProductList;