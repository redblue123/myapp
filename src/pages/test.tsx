

import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input, Select, Space, Radio } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {  

  const [isVisible_A, setIsVisible_A] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible_A'){      
      setIsVisible_A(!isVisible_A) 
    }           
  }; 
  
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
  formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
  const buttonItemLayout =
  formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;


  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
          <Flex  gap="small" vertical className={styles.flexborder}>
          <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>                
            {isVisible_A && (
              <Text copyable className={styles.codeText}>  
            {'这是一段文字'}            
                      
              </Text>                                  
              )}                                                                                   
        </Flex>  
          </Flex>
          
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;