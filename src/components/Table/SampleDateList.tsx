import React from 'react';  
import { Button, Popconfirm, Table, Typography } from 'antd';  
import { Space, Tag } from 'antd';
import type { TableProps } from 'antd';
const { Text, Link } = Typography;
  
type SampleDate = {
  key: string;
  数据表名: string;
  数据库名:string;
  表中文名:string;
};
  
type SampleDates = SampleDate[];  
  
type SampleDateListProps = {  
  onDelete: (key: string) => void;  
  sampleDate: SampleDates;  
};  
  
const SampleDateList: React.FC<SampleDateListProps> = ({  
  onDelete,  
  sampleDate,  
}) => {  
  const columns = [  
    {  
      title: '数据表名',  
      dataIndex: '数据表名',
      render: (text:string) => <Link href="/button" target="_blank">{text}</Link>  
      ,
    },
    {  
      title: '数据库名',  
      dataIndex: '数据库名',
    },
    {  
      title: '表中文名',  
      dataIndex: '表中文名',
    },    
    {  
      title: '操作',  
      render(text: string, record: SampleDate) {  
          
        return (
           // 使用Popconfirm组件创建一个确认框，标题为“Delete?”。当用户点击“Delete”按钮时，它会调用onDelete回调函数并传递当前记录的key作为参数。  
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.key)}>  
            <Button>Delete</Button>  
          </Popconfirm>  
        );  
      },  
    },  
  ];  
  return <Table rowKey="key" dataSource={sampleDate} columns={columns} />;  
};  
  
export default SampleDateList;