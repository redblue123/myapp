import React from 'react';  
import { Button, Popconfirm, Table } from 'antd';  
  
type Product = {  
  id: string;  
  name: string;  
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
      title: 'Actions',  
      render(text: string, record: Product) {  
          
        return (  
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