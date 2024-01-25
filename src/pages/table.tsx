import React from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'umi';
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography } from 'antd';  
import SampleDateList from '@/components/SampleDateList';
import { PoweroffOutlined } from '@ant-design/icons';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

const App: React.FC = () => {  
  const queryClient = useQueryClient();
  const sampleDatesQuery = useQuery(['sampleDate'], {
    queryFn() {
      return axios.get('/api/sampleDate').then((res) => res.data);
    },
  });
  const sampleDatesDeleteMutation = useMutation({
    mutationFn(key: string) {
      return axios.delete(`/api/sampleDate/${key}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['sampleDates'] });
    },
  });
  if (sampleDatesQuery.isLoading) return null;
  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
              <h1 className={styles.title}>列表</h1>
              <h3>标准表格</h3> 
              <SampleDateList
                sampleDate={sampleDatesQuery.data.data}
                onDelete={(key) => {
                  sampleDatesDeleteMutation.mutate(key);
                }}
              />                                      
      </Flex> 
      <Flex gap="small" vertical >
              <h3>标准列表</h3>
              <SampleDateList
                sampleDate={sampleDatesQuery.data.data}
                onDelete={(key) => {
                  sampleDatesDeleteMutation.mutate(key);
                }}
              />                                      
      </Flex>                                         
    </ConfigProvider>  
    
  );  
};  
  
export default App;