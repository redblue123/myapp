import React from 'react';
import { useEffect, useState } from 'react';
import { Space, Table, Tag,ConfigProvider, Button, Flex, Tabs} from 'antd';
import type { TableProps } from 'antd';

import {theme} from '../layouts/index' 
import axios from 'axios';
import styles from '../layouts/index.less';
import {fetchChannelList} from '@/models/store/channleStore'
import { useSelector,useDispatch} from "react-redux";

// 引入类型定义 
import{Channel} from '@/types'

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface ChannelListState {  
  channelList: Array<Channel>; // 假设Channel是你的频道对象类型  
  // ... 其他属性  
}

interface RootState {  
  channelList: ChannelListState;  
  // ... 其他reducers的state  
}

const DataURL = 'http://localhost:3005/data'
const path = ['data']



const { Column} = Table;
// 通过打标签传递标签值的形式改变组件中的样式

const color = {color:'rgba(110, 30, 30, 1)'}  

const App: React.FC = () =>{
  const {channelList} = useSelector((state: any)  => state.channelList);
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
        <Column title="名称" dataIndex="name" key="name" />
        <Column title="年龄" dataIndex="age" key="age" />
        <Column title="地址" dataIndex="address" key="address" />
        <Column 
        title="标签" 
        dataIndex="tags" 
        key="tags"
        render={(tags: string[]) => (
          <>
          {/* 确保tags是一个数组，如果不是则提供一个空数组 */} 
            {Array.isArray(tags) ?tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            }): null} {/* 如果tags不是数组，则渲染null */} 
          </>
        )}
        />
        <Column
          title="操作"
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a style={ color}>编辑</a>
              <a style={ color}>删除</a>
              
            </Space>
          )}
        />
        

      </Table>
    </ConfigProvider> 
  )
};

export default App;