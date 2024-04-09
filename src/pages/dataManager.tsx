import React from 'react';
import { useEffect, useState } from 'react';
import { Space, Table, Tag,ConfigProvider, Button, Flex, Tabs, Breadcrumb, Radio, Select,DatePicker } from 'antd';

//时间选择器汉化包
// import locale from 'antd/es/date-picker/locale/zh_CN';

import type { TableProps, RadioChangeEvent } from 'antd';

import {theme} from '../layouts/index' 
import axios from 'axios';
import styles from '../layouts/index.less';
import {fetchChannelList} from '@/models/store/channleStore'
import { fetchSelectList } from '@/models/store/selectStore';
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





const { Column} = Table;
// 通过打标签传递标签值的形式改变组件中的样式

const color = {color:'rgba(110, 30, 30, 1)'}  

const App: React.FC = () =>{
  // 列表数据
  const DataURL = 'http://localhost:3005/data'
  const path = ['data']
  // 频道数据
  const selectUrl = 'http://localhost:3007/data'
  const selectPath = ['data']
  const {selectList} = useSelector((state: any)  => state.selectList);
  const selectDispatch = useDispatch();
  useEffect(()=>{
    selectDispatch(fetchSelectList(selectUrl,selectPath))
    

  },[selectDispatch])
  console.log({selectList})



  // radio 单选
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  // 获取下拉筛选列表
  
  // 下拉筛选
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const { RangePicker } = DatePicker;

  const {channelList} = useSelector((state: any)  => state.channelList);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChannelList(DataURL,path))
    console.log(fetchChannelList(DataURL,path))
    
  },[dispatch])

  return(
    <ConfigProvider theme={theme}> 
      <Breadcrumb
    items={[
      {
        title: '首页',
      },
      {
        title: <a href="">数据列表</a>,
      },
    ]}
  />
  <Flex gap="small" wrap="wrap" align='center' >
  <p>状态:</p>
    <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>全部</Radio>
        <Radio value={2}>草稿</Radio>
        <Radio value={3}>审核通过</Radio>
      </Radio.Group>
  </Flex >

  <Flex gap="small" wrap="wrap" align='center' >
  <p>频道:</p>
  <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={selectList}
    />
  </Flex >
  <Flex gap="small" wrap="wrap" align='center' >
  <p>日期:</p>
  <RangePicker />

  </Flex >

    <Flex gap="small" wrap="wrap" justify='flex-end' className={styles.flexborder}>
      <Button type="primary" >筛选</Button>

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