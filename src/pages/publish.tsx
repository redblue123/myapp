
import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, message, Modal, Form, Input, Checkbox, Divider, Select, Radio} from 'antd';
import {theme} from '../layouts' //公共样式引入
import React, { useState, useEffect , createContext} from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
import { fetchSelectList } from '@/models/store/selectStore';
import { useSelector,useDispatch} from "react-redux";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '@/pages/publish.less'

const { Title, Paragraph, Text, Link } = Typography; 

// 提交表单
const onFinish = (formvalues: any) => {
  console.log('Success:', formvalues);
  const {title, content, channel_id} = formvalues;
  // 1. 按照接口文档处理收集到的表单数据
  const reqData = {
    title,
    content,
    cover:{
      type:0,
      images:[]
    },
    channel_id
  }
  // 2. 调用接口提交

};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);

};
type FieldType = {
  title?: string;
  channel?: string;
  remember?: string;
  content?:string;
};
//---

type selectObjectType ={
  id:number;
  name:string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  // 频道下拉数据获取
    // 频道数据
    const selectUrl = 'http://localhost:3007/data'
    const selectPath = [ 'data', 'channels']
    const {selectList} = useSelector((state: any)  => state.selectList);
    const selectDispatch = useDispatch();
    useEffect(()=>{
      selectDispatch(fetchSelectList(selectUrl,selectPath))
    },[selectDispatch])
    // console.log({ selectList})
  // 频道下拉
  const { Option } = Select;
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <ConfigProvider theme={theme}>
    <Space>

    <>
      <Button type="primary" onClick={showModal}>
        发布按钮
      </Button>
      <Modal
        open={open}
        width={600}
        title="标题"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >        
            <Form
              name="basic"
              labelCol={{ span: 6}}
              wrapperCol={{ span: 18 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="标题"
                name="title"
                rules={[{ required: true, message: '请输入文章标题!' }]}
              >
                <Input placeholder='请选择文章频道' />
              </Form.Item>

              <Form.Item name="channel" label="频道" rules={[{ required: true }]}>
                  <Select
                    placeholder="请选择文章频道"
                    onChange={onGenderChange}
                    allowClear
                    // options={selectList}
                  >
                    {selectList.map((item:selectObjectType) => <Option key ={item.id} value={item.id}>{item.name}</Option>)}
                  </Select>
                </Form.Item>

              {/* <Form.Item label="封面">
                <Radio.Group>
                  <Radio value="pic_1"> 单图 </Radio>
                  <Radio value="pic_2"> 三图 </Radio>
                  <Radio value="pic_3"> 无图 </Radio>
                </Radio.Group>
              </Form.Item> */}

              <Form.Item<FieldType>
                label="内容"
                name="content"
                rules={[{ message: '请输入描述!' }]}
              >
                {/* 这里后期要放富文本编辑框 */}
                <ReactQuill
                  className='publish-quill'
                  theme="snow"
                  placeholder="请输入文章内容"
                 
                />

              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>记住我</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Flex gap="small" vertical >           
                  <Flex gap="small" wrap="wrap" justify='end' align='end'>  
                  <Button style={{ boxShadow: 'none'}} type="primary" htmlType="submit" onClick={handleOk}>
                    发布提交
                  </Button>
                  </Flex>
                </Flex>

              </Form.Item>
            </Form>     
      </Modal>
    </>
    </Space>
    </ConfigProvider> 
  );
};

export default App;

