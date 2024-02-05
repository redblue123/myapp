import React from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'umi';
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography } from 'antd';  
import SampleDateList from '@/components/Table/SampleDateList';
import TagsDataList from '@/components/Table/TagsDateList';
import { PoweroffOutlined } from '@ant-design/icons';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

const App: React.FC = () => {  
  const queryClient = useQueryClient();
  const sampleDateQuery = useQuery(['sampleDate'], {
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