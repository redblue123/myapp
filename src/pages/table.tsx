import React from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'umi';
import styles from '../layouts/index.less'; 
import {  Flex, ConfigProvider} from 'antd';  
import SampleDateList from '@/components/Table/SampleDateList';
import TagsDataList from '@/components/Table/TagsDateList';
import {theme} from '../layouts/index' //公共样式引入

// const App: React.FC = () => { ... }: 定义一个名为App的函数式组件。
const App: React.FC = () => {  
  const queryClient = useQueryClient();
  // 使用 useQuery 发起一个 HTTP GET 请求 ,从 /api/sampleDate 路径获取数据
  const sampleDateQuery = useQuery(['sampleDate'], {
    // queryFn: 一个返回 Promise 的函数，通常用于发起 HTTP 请求
    queryFn() {
      return axios.get('/api/sampleDate').then((res) => res.data);
    },
  });
  const sampleDateDeleteMutation = useMutation({
    mutationFn(key: string) {
      return axios.delete(`/api/sampleDate/${key}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['sampleDate'] });
    },
  });
  if (sampleDateQuery.isLoading) return null;
  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
              <h1 className={styles.title}>表格</h1>
              <h3>标准表格</h3> 
              <SampleDateList
                sampleDate={sampleDateQuery.data.data}
                onDelete={(key) => {
                  sampleDateDeleteMutation.mutate(key);
                }}
              /> 
              <h3>标签表格</h3>   
              <TagsDataList
                sampleDate={sampleDateQuery.data.data}
                onDelete={(key) => {
                  sampleDateDeleteMutation.mutate(key);
                }}
              />                                      
      </Flex> 
                                        
    </ConfigProvider>  
    
  );  
};  
  
export default App;