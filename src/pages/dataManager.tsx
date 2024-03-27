import React from 'react';
import { useEffect, useState } from 'react';
import { Space, Table, Tag,ConfigProvider, Button, Flex } from 'antd';
import type { TableProps } from 'antd';
import {theme} from '../layouts/index' 
import axios from 'axios';
import styles from '../layouts/index.less';
import {fetchChannelList} from '@/models/channleStore'
import { useSelector,useDispatch} from "react-redux";


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const DataURL = 'http://localhost:3005/data'
const path = ['data']



const { Column} = Table;
// 通过打标签传递标签值的形式改变组件中的样式

const color = {color:'rgba(110, 30, 30, 1)'}  

const App: React.FC = () =>{
  const {channelList} = useSelector(state => state.channelList)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChannelList(DataURL,path))
    console.log(fetchChannelList(DataURL,path))
    
  },[dispatch])

  return(
    <ConfigProvider theme={theme}> 
    {/* <Flex gap="small" wrap="wrap" justify='flex-end'> */}
    <Flex gap="small" wrap="wrap" justify='flex-end' className={styles.flexborder}>
      <Button type="primary" >新增数据</Button>

    </Flex>
      <Table dataSource={channelList} > 
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column 
        title="Tags" 
        dataIndex="tags" 
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )}
        />
        <Column
          title="Action"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a style={ color}>编辑</a>
              <a style={ color}>Delete</a>
              
            </Space>
          )}
        />
        

      </Table>
    </ConfigProvider> 
  )
};

export default App;