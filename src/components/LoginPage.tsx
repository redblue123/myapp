

import React from 'react';
import { Card,ConfigProvider, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import url from '@/assets/logo.svg'
import {theme} from '../layouts' //公共样式引入
import { Button, Flex,  Typography,Checkbox, Form, Input } from 'antd'; 
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/models/userModel';
import { useNavigate } from 'react-router-dom'


const { Paragraph, Text, Link } = Typography

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const { Meta } = Card;

const LoinPage: React.FC = () => {
  // 得到一个useNavigate()跳转函数
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const onFinish =async (values: any) => {
    console.log('Success:', values);
    // 触发异步action fetchLogin
    await dispatch(fetchLogin(values))  
    // 1. 跳转到首页
    navigate('/')
    // 2. 提示一下用户   
    // message.success('登录成功')
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  
  };
  return(
  <ConfigProvider theme={theme}> 
  <div style={{ height:'80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{width:'100px',height: 400,backgroundColor:'rgb(245, 245, 245)'}}></div>
    <Card 
      style={{ width: 500,height: 400}}
      cover={
        <div style={{paddingTop:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img style={{ width: 50 }} alt="example" src={url} />
          <Meta style={{paddingLeft:'20px'}}  title="请登录" description="www.instagram.com" />
        </div>
    }
    >
      <Form validateTrigger="onBlur"
      // validateTrigger="onBlur" 在失焦时完成校验逻辑
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish }
    >
      <Form.Item
        name="mobile" // 与提交给后端的接口保持一致 或 name="username"
        // rules里绑定了一个数组,它是可以绑定多个校验规则的 
        // 数组里的对象设置了具体的校验逻辑
        // required: true 是否是必填 
        // 多条校验逻辑, 串型校验逻辑 第一条过了才验证第二条
        rules={[
          { required: true, message: '  请输入手机号!' },
          { pattern:/^1[3-9]\d{9}$/, message:'请输入正确的手机号格式'} // 正则 1开头[3-9]的数字\d 重复9次{9} $精确匹配
           
        ]} 
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="code" //  password
        rules={[{ required: true, message: '请输入验证码!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        
        Or <a href="">register now!</a>
        
      </Form.Item>
    </Form>

    </Card>
  </div>
  </ConfigProvider>

  )
};

export default LoinPage;