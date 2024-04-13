
import styles from '../layouts/index.less'; 
import {
  Flex,
  ConfigProvider,
  Typography,
  Button,
  Space,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Alert,
  message,
} from 'antd';   
import { CopyOutlined  } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons'; 
import React, { useState, useEffect } from 'react';
import {theme} from '../layouts' //公共样式引入
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const {Text} = Typography;
const codeString = `
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input } from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button style={{ boxShadow: 'none'}} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>     
          </Flex >                 

      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`;
const codeString_A = `
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography,Checkbox, Form, Input, Select, Space } from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {  
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

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (  
    <ConfigProvider theme={theme}>  
      <Flex gap="small" vertical >

          <Flex  gap="small" vertical className={styles.flexborder}>
          <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>

          </Flex >

      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`;
const codeString_B = `
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Typography, Form, Input, Radio } from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {  

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
        </Flex>    
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`;
const codeString_C = `
import styles from '../layouts/index.less';
import { PlusOutlined } from '@ant-design/icons'; 
import {
Flex,
ConfigProvider,
Typography,
Button,
Space,
Cascader,
Checkbox,
ColorPicker,
DatePicker,
Form,
Input,
InputNumber,
Radio,
Select,
Slider,
Switch,
TreeSelect,
Upload,
} from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const { Paragraph, Text, Link } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e: any) => {
if (Array.isArray(e)) {
return e;
}
return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {  
const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
return (  
<ConfigProvider theme={theme} >  
  <Flex gap="small" vertical >
    
      <Flex  gap="small" vertical className={styles.flexborder}>
      <>
  <Checkbox
    checked={componentDisabled}
    onChange={(e) => setComponentDisabled(e.target.checked)}
  >
    Form disabled
  </Checkbox>
  <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    disabled={componentDisabled}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
      <Checkbox>Checkbox</Checkbox>
    </Form.Item>
    <Form.Item label="Radio">
      <Radio.Group>
        <Radio value="apple"> Apple </Radio>
        <Radio value="pear"> Pear </Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="Input">
      <Input />
    </Form.Item>
    <Form.Item label="Select">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="TreeSelect">
      <TreeSelect
        treeData={[
          { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
        ]}
      />
    </Form.Item>
    <Form.Item label="Cascader">
      <Cascader
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
              },
            ],
          },
        ]}
      />
    </Form.Item>
    <Form.Item label="DatePicker">
      <DatePicker />
    </Form.Item>
    <Form.Item label="RangePicker">
      <RangePicker />
    </Form.Item>
    <Form.Item label="InputNumber">
      <InputNumber />
    </Form.Item>
    <Form.Item label="TextArea">
      <TextArea rows={4} />
    </Form.Item>
    <Form.Item label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>
    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
      <Upload action="/upload.do" listType="picture-card">
        <button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      </Upload>
    </Form.Item>
    <Form.Item label="Button">
      <Button>Button</Button>
    </Form.Item>
    <Form.Item label="Slider">
      <Slider />
    </Form.Item>
    <Form.Item label="ColorPicker">
      <ColorPicker />
    </Form.Item>
  </Form>
</>
      </Flex >      
  </Flex>                                       
</ConfigProvider>  
);  
};  

export default () => <FormDisabledDemo />;
`;
const codeString_D = `
import styles from '../layouts/index.less'; 
import {
  Flex,
  ConfigProvider,
  Typography,
  Form,
  Input,
  Alert,
} from 'antd';  
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
const {Text} = Typography;
const App: React.FC = () => {  
          
  return (  
    <ConfigProvider theme={theme} >
     
      <Flex gap="small" vertical >
          <Flex  gap="small" vertical className={styles.flexborder}>
          <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off"> 
          <Alert message="这里是一段Alert" />
          <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
            </Form> 
          </Flex >            
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;
`;


const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
type LayoutType = Parameters<typeof Form>[0]['layout'];

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const App: React.FC = () => {  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A] = useState(false);
  const [isVisible_B, setIsVisible_B] = useState(false);
  const [isVisible_C, setIsVisible_C] = useState(false);
  const [isVisible_D, setIsVisible_D] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    }else if(div === 'isVisible_A'){
      setIsVisible_A(!isVisible_A) 
    }else if(div === 'isVisible_B'){
      setIsVisible_B(!isVisible_B)
    }else if(div === 'isVisible_C'){
      setIsVisible_C(!isVisible_C)
    }else if(div === 'isVisible_D'){
      setIsVisible_D(!isVisible_D)
    }
    setIsHighlighted(false);  // 手动重置高亮状态                 
  }; 
  useEffect(() => {  
    if ((isVisible || isVisible_A ||isVisible_B || isVisible_C || isVisible_D) && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll(); 
      setIsHighlighted(true); // 标记已高亮 
    }
  }, [isVisible, isVisible_A, isVisible_B,isVisible_C,isVisible_D]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作  

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: '复制成功',
    });
  };

  const [copied, setCopied] = useState(false);
  const copyText = (text:string) =>{
    navigator.clipboard.writeText(text).then(() => {  
      setCopied(true);   
    }).catch((err) => {  
      console.error('Error in copying text', err);  
    });  
  }
  
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
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
  formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
  const buttonItemLayout =
  formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  return (  
    <ConfigProvider theme={theme} > 
    {contextHolder} 
      <Flex gap="small" vertical >
        <Flex  gap="small" vertical className={styles.flexborder}>           
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button style={{ boxShadow: 'none' }} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form> 
            <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible')}>显示代码</Button>
            <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
              copyText(codeString);
              success();
            }}>复制代码</Button>
            {isVisible && (
                   <pre  style={{ width: '100%', overflow: 'auto' }} > 
                  <code  className="language-javascript" > 
                    {codeString}
                  </code>  
                </pre>
              )}                                    
          </Flex>        
          </Flex >
          <Flex  gap="small" vertical className={styles.flexborder}>
          <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
      <Flex gap="small" wrap="wrap" >
      <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>
      <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
        copyText(codeString_A);
        success();
      }}>复制代码</Button>
      {isVisible_A && (
            <pre  style={{ width: '100%', overflow: 'auto' }} > 
            <code  className="language-javascript" > 
              {codeString_A}
            </code>  
          </pre>
        )}                                    
    </Flex>  
          </Flex >
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
        <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>
        <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
          copyText(codeString_B);
          success();
        }}>复制代码</Button>
        {isVisible_B && (
                <pre  style={{ width: '100%', overflow: 'auto' }} > 
              <code  className="language-javascript" > 
                {codeString}
              </code>  
            </pre>
          )}                                    
      </Flex>  

      </Flex>
      <Flex  gap="small" vertical className={styles.flexborder}>
      <>
  <Checkbox
    checked={componentDisabled}
    onChange={(e) => setComponentDisabled(e.target.checked)}
  >
    Form disabled
  </Checkbox>
  <Form
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    disabled={componentDisabled}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
      <Checkbox>Checkbox</Checkbox>
    </Form.Item>
    <Form.Item label="Radio">
      <Radio.Group>
        <Radio value="apple"> Apple </Radio>
        <Radio value="pear"> Pear </Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="Input">
      <Input />
    </Form.Item>
    <Form.Item label="Select">
      <Select>
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="TreeSelect">
      <TreeSelect
        treeData={[
          { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
        ]}
      />
    </Form.Item>
    <Form.Item label="Cascader">
      <Cascader
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
              },
            ],
          },
        ]}
      />
    </Form.Item>
    <Form.Item label="DatePicker">
      <DatePicker />
    </Form.Item>
    <Form.Item label="RangePicker">
      <RangePicker />
    </Form.Item>
    <Form.Item label="InputNumber">
      <InputNumber />
    </Form.Item>
    <Form.Item label="TextArea">
      <TextArea rows={4} />
    </Form.Item>
    <Form.Item label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>
    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
      <Upload action="/upload.do" listType="picture-card">
        <button style={{ border: 0, background: 'none' }} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </button>
      </Upload>
    </Form.Item>
    <Form.Item label="Button">
      <Button>Button</Button>
    </Form.Item>
    <Form.Item label="Slider">
      <Slider />
    </Form.Item>
    <Form.Item label="ColorPicker">
      <ColorPicker />
    </Form.Item>
  </Form>
</>

      <Flex gap="small" wrap="wrap" >
        <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_C')}>显示代码</Button>
        <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
          copyText(codeString_C);
          success();
        }}>复制代码</Button>
        {isVisible_C && (
                <pre  style={{ width: '100%', overflow: 'auto' }} > 
              <code  className="language-javascript" > 
                {codeString_C}
              </code>  
            </pre>
          )}                                    
      </Flex>   
      
      </Flex > 
      <Flex  gap="small"  vertical className={styles.flexborder}>
      <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
      <Alert message="使用'最大'规则，继续输入字符查看结果" />
      <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>
    
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
    </Form>     
    <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_D')}>显示代码</Button>
            <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
              copyText(codeString_D);
              success();
            }}>复制代码</Button>
            {isVisible_D && (
                   <pre  style={{ width: '100%', overflow: 'auto' }} > 
                  <code  className="language-javascript" > 
                    {codeString_D}
                  </code>  
                </pre>
              )}                                    
          </Flex>   
          </Flex >     
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App;