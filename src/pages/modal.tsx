
import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, message, Modal, Form, Input, Checkbox,Divider} from 'antd';   
import { CopyOutlined  } from '@ant-design/icons';
import {theme} from '../layouts/index' //公共样式引入
import React, { useState, useEffect , createContext,useRef} from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
import type { DraggableData, DraggableEvent,} from 'react-draggable';
import Draggable from 'react-draggable';
const { Title, Paragraph, Text, Link } = Typography;

const codeString = `
import React, { useState } from 'react';
import { Button, Modal,ConfigProvider, Space } from 'antd';
import {theme} from '../layouts/index' //公共样式引入

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={theme}>
    <Space>
    <>
      <Button type="primary" onClick={showModal}>
        基础弹窗
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
    </Space>
    </ConfigProvider> 
  );
};

export default App;
`
const codeString_A = `
import React, { useState } from 'react';
import { Button, Modal,ConfigProvider, Space } from 'antd';
import {theme} from '../layouts/index' //公共样式引入

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <ConfigProvider theme={theme}>
    <Space>
    <>
      <Button type="primary" onClick={showModal}>
      异步关闭对话框(提交表单)
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
    </Space>
    </ConfigProvider> 
  );
};

export default App;   
`
const codeString_B = `
import React, { useState } from 'react';
import { Button, Modal,ConfigProvider, Space } from 'antd';
import {theme} from '../layouts/index' //公共样式引入

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

  return (
    <ConfigProvider theme={theme}>
    <Space>
    <>
      <Button type="primary" onClick={showModal}>
      打开带有自定义的模态框
      </Button>
      <Modal
        open={open}
        title="标题"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            返回
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            提交
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            跳转到其他
          </Button>,
        ]}
      >
        <p>这是一些内容文字...</p>
        <p>这是一些内容文字...</p>
        <p>这是一些内容文字...</p>
        <p>这是一些内容文字...</p>
        <p>这是一些内容文字...</p>
      </Modal>
    </>
    </Space>
    </ConfigProvider> 
  );
};

export default App;
`
const codeString_C = `
import React, { createContext } from 'react';
import { Button, Modal, Space, ConfigProvider} from 'antd';
import {theme} from '../layouts/index' //公共样式引入
const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => 'Reachable: $左大括号name右大括号!'}</ReachableContext.Consumer> //替换'为反引号
      <br />
      <UnreachableContext.Consumer>{(name) => 'Unreachable: $左大括号name右大括号!'}</UnreachableContext.Consumer> //替换'为反引号
    </>
  ),
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ConfigProvider theme={theme}>
    <ReachableContext.Provider value="Light">
      <Space>
        <Button
          onClick={async () => {
            const confirmed = await modal.confirm(config);
            console.log('Confirmed: ', confirmed);
          }}
        >
          确认
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          警告
        </Button>
        <Button
          onClick={async () => {
            modal.info(config);
          }}
        >
          信息
        </Button>
        <Button
          onClick={async () => {
            modal.error(config);
          }}
        >
          错误
        </Button>
      </Space>
      {/* 'contextHolder' should always be placed under the context you want to access */} //替换反引号
      {contextHolder}

      {/* Can not access this context since 'contextHolder' is not in it */} //替换反引号
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
    </ConfigProvider>
  );
};

export default App;
`
const codeString_D =`


import React, { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent,} from 'react-draggable';
import Draggable from 'react-draggable';
import { Button, Modal, ConfigProvider,Flex,Space } from 'antd';
import {theme} from '../layouts/index' //公共样式引入

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <ConfigProvider theme={theme}>
      <Space>
        <>
          <Button onClick={showModal}>Open Draggable Modal</Button>
          <Modal
            title={
              <div
                style={{
                  width: '100%',
                  cursor: 'move',
                }}
                onMouseOver={() => {
                  if (disabled) {
                    setDisabled(false);
                  }
                }}
                onMouseOut={() => {
                  setDisabled(true);
                }}
                // fix eslintjsx-a11y/mouse-events-have-key-events
                // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                onFocus={() => {}}
                onBlur={() => {}}
                // end
              >
                Draggable Modal
              </div>
            }
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            modalRender={(modal) => (
              <Draggable
                disabled={disabled}
                bounds={bounds}
                nodeRef={draggleRef}
                onStart={(event, uiData) => onStart(event, uiData)}
              >
                <div ref={draggleRef}>{modal}</div>
              </Draggable>
            )}
          >
            <p>
            提供必要信息：模态对话框可以用于向用户显示重要的信息或警告，以确保他们了解某些操作的影响或提供关于即将发生事件的详细信息。
            </p>
            <br />
            <p>获取用户输入：模态对话框可以包含文本框、下拉列表、复选框等UI控件，以便用户输入或选择所需的信息。这有助于确保用户提供必要的数据，以便应用程序能够继续执行或进行必要的操作。</p>
          </Modal>
        </>       
      </Space>

    </ConfigProvider>


  );
};

export default App;
`
const codeString_E =`
import styles from '../layouts/index.less';  
import { Button, Flex, ConfigProvider, Space, Typography, message, Modal, Form, Input, Checkbox, Divider} from 'antd';  
import {theme} from '../layouts/index' //公共样式引入
import React, { useState, useEffect , createContext} from 'react';
import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 
const { Title, Paragraph, Text, Link } = Typography;
//---
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
  description?:string;
};
//---

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

  return (
    <ConfigProvider theme={theme}>
    <Space>

    <>
      <Button type="primary" onClick={showModal}>
        带表单的弹窗
      </Button>
      <Modal
        open={open}
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
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                label="描述"
                name="description"
                rules={[{ message: '请输入描述!' }]}
              >
                <Input />
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
                    Submit
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

`

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);
const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
};

//---


//---
const onFinish_E = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed_E = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  description?:string;
};
//---
const App: React.FC = () => {  

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B] = useState(false);
  const [isVisible_C, setIsVisible_C] = useState(false);
  const [isVisible_D, setIsVisible_D] = useState(false);
  const [isVisible_E, setIsVisible_E] = useState(false);


  const [isHighlighted, setIsHighlighted] = useState(false);




  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {           
      setIsVisible_A(!isVisible_A);  
    } else if(div ==='isVisible_B'){
      setIsVisible_B(!isVisible_B); 
    }else if(div ==='isVisible_C'){
      setIsVisible_C(!isVisible_C)
    }else if(div ==='isVisible_D'){
      setIsVisible_D(!isVisible_D)
    }else if(div ==='isVisible_E'){
      setIsVisible_E(!isVisible_E)
    }
    setIsHighlighted(false);  // 手动重置高亮状态       
  };

  useEffect(() => {  
    if ((isVisible||isVisible_A||isVisible_B||isVisible_C||isVisible_D||isVisible_E) && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll(); 
      setIsHighlighted(true); // 标记已高亮 
    }
  }, [isVisible, isVisible_A,isVisible_B,isVisible_C,isVisible_D, isVisible_E]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作  


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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [open_A, setOpen_A] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [modalText_A, setModalText_A] = useState('Content of the modal');
  const [confirmLoading_A, setConfirmLoading_A] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal_A = () => {
    setOpen_A(true);
  };

  const handleOk_A = () => {
    setModalText_A('该模式将在2秒钟后关闭');
    setConfirmLoading_A(true);
    setTimeout(() => {
      setOpen_A(false);
      setConfirmLoading_A(false);
    }, 2000);
  };

  const handleCancel_A = () => {
    console.log('点击取消按钮');
    setOpen_A(false);
  };
  const [loading, setLoading] = useState(false);
  const [open_B, setOpen_B] = useState(false);

  const showModal_B = () => {
    setOpen_B(true);
  };

  const handleOk_B = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen_B(false);
    }, 3000);
  };

  const handleCancel_B = () => {
    setOpen_B(false);
  };

  //---

  const [modal, contextHolder_C] = Modal.useModal();
  const [messageApi, contextHolder] = message.useMessage();
  //---
  const [open_D, setOpen_D] = useState(false);
  const [disabled_D, setDisabled_D] = useState(true);
  const [bounds_D, setBounds_D] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal_D = () => {
    setOpen_D(true);
  };

  const handleOk_D = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen_D(false);
  };

  const handleCancel_D = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen_D(false);
  };

  const onStart_D= (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds_D({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  //---
  
  const [loading_E, setLoading_E] = useState(false);
  const [open_E, setOpen_E] = useState(false);

  const showModal_E = () => {
    setOpen_E(true);
  };

  const handleOk_E = () => {
    setLoading_E(true);
    setTimeout(() => {
      setLoading_E(false);
      setOpen_E(false);
    }, 3000);
  };

  const handleCancel_E = () => {
    setOpen_E(false);
  };
  //---
  return (  
    <ConfigProvider theme={theme}>

        <Flex gap="small"  vertical>
            <h1 className={styles.title}>Modal 对话框</h1>      
            <h2>简述</h2>  
            <p>模态对话框是重要交互元素,可以确保用户了解操作的影响,只因用户完成任务,提前确认,避免意外关闭</p>           

    
            <h2>样式展示</h2>  
            <h3>标题级别</h3> 
            
            <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" >               
            <Button type="primary" onClick={showModal}>基础弹窗</Button>  
            <>
              <Modal title="基础弹窗" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>这是一行内容文字...</p>
                <p>这是二行内容文字...</p>
                <p>这是三行内容文字...</p>
              </Modal>
            </>
          </Flex >  
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
            </Flex>

            <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" >                 
              <Button type="primary" onClick={showModal_A}>
              异步关闭对话框(提交表单)
              </Button>
              <Modal
                title="Title"
                open={open_A}
                onOk={handleOk_A}
                confirmLoading={confirmLoading_A}
                onCancel={handleCancel_A}
              >
                <p>{modalText}</p>
              </Modal>
            </Flex >  
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
            </Flex>
            <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" >                 
              <Button type="primary" onClick={showModal_B}>
              打开带有自定义的模态框
              </Button>
              <Modal
                open={open_B}
                title="标题"
                onOk={handleOk_B}
                onCancel={handleCancel_B}
                footer={[
                  <Button key="back" onClick={handleCancel_B}>
                    返回
                  </Button>,
                  <Button key="submit" type="primary" loading={loading} onClick={handleOk_B}>
                    提交
                  </Button>,
                  <Button
                    key="link"
                    href="https://google.com"
                    type="primary"
                    loading={loading}
                    onClick={handleOk_B}
                  >
                    跳转到其他
                  </Button>,
                ]}
              >
                <p>这是一些内容文字...</p>
                <p>这是一些内容文字...</p>
                <p>这是一些内容文字...</p>
                <p>这是一些内容文字...</p>
                <p>这是一些内容文字...</p>
              </Modal>
            </Flex >  
            <Flex gap="small" wrap="wrap" >
            <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>
            <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
              copyText(codeString_B);
              success();
            }}>复制代码</Button>
            {isVisible_B && (
                   <pre  style={{ width: '100%', overflow: 'auto' }} > 
                  <code  className="language-javascript" > 
                    {codeString_B}
                  </code>  
                </pre>
              )}                                    
          </Flex>  
            </Flex>
            <Flex  gap="small" vertical className={styles.flexborder}>
              <Flex gap="small" wrap="wrap" >  
                <Button
                  onClick={async () => {
                    const confirmed = await modal.confirm(config);
                    console.log('Confirmed: ', confirmed);
                  }}
                >
                  确认弹窗
                </Button>
                <Button
                  onClick={() => {
                    modal.warning(config);
                  }}
                >
                  警告弹窗
                </Button>
                <Button
                  onClick={async () => {
                    modal.info(config);
                  }}
                >
                  信息弹窗
                </Button>
                <Button
                  onClick={async () => {
                    modal.error(config);
                  }}
                >
                  错误弹窗
                </Button>
              </Flex>
              <Divider />
              <Flex gap="small" wrap="wrap" >
              <Button onClick={() => toggleDiv('isVisible_C')}>显示代码</Button>
              <Button icon={<CopyOutlined />}  onClick={(e) => {
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
            </Flex>
            <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" > 
              <Button onClick={showModal_D}>Open Draggable Modal</Button>
              <Modal
                title={
                  <div
                    style={{
                      width: '100%',
                      cursor: 'move',
                    }}
                    onMouseOver={() => {
                      if (disabled_D) {
                        setDisabled_D(false);
                      }
                    }}
                    onMouseOut={() => {
                      setDisabled_D(true);
                    }}

                    onFocus={() => {}}
                    onBlur={() => {}}

                  >
                    Draggable Modal
                  </div>
                }
                open={open_D}
                onOk={handleOk_D}
                onCancel={handleCancel_D}
                modalRender={(modal) => (
                  <Draggable
                    disabled={disabled_D}
                    bounds={bounds_D}
                    nodeRef={draggleRef}
                    onStart={(event, uiData) => onStart_D(event, uiData)}
                  >
                    <div ref={draggleRef}>{modal}</div>
                  </Draggable>
                )}
              >
                <p>
                提供必要信息：模态对话框可以用于向用户显示重要的信息或警告，以确保他们了解某些操作的影响或提供关于即将发生事件的详细信息。
                </p>
                <br />
                <p>获取用户输入：模态对话框可以包含文本框、下拉列表、复选框等UI控件，以便用户输入或选择所需的信息。这有助于确保用户提供必要的数据，以便应用程序能够继续执行或进行必要的操作。</p>
              </Modal>
            </Flex>
            <Divider />
            <Flex gap="small" wrap="wrap" >
              <Button onClick={() => toggleDiv('isVisible_D')}>显示代码</Button>
              <Button icon={<CopyOutlined />}  onClick={(e) => {
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

            </Flex>
            <Flex  gap="small" vertical className={styles.flexborder}>
            <Flex gap="small" wrap="wrap" >
                <Button type="primary" onClick={showModal_E}>
                  带表单的弹窗
                </Button>
                <Modal
                  open={open_E}
                  title="标题"
                  onOk={handleOk_E}
                  onCancel={handleCancel_E}
                  footer={null}
                >        
                      <Form
                        name="basic"
                        labelCol={{ span: 6}}
                        wrapperCol={{ span: 18 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish_E}
                        onFinishFailed={onFinishFailed_E}
                        autoComplete="off"
                      >
                        <Form.Item<FieldType>
                          label="用户名"
                          name="username"
                          rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                          label="密码"
                          name="password"
                          rules={[{ required: true, message: '请输入密码!' }]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                          label="描述"
                          name="description"
                          rules={[{ message: '请输入用户名!' }]}
                        >
                          <Input />
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
                            <Button style={{ boxShadow: 'none'}} type="primary" htmlType="submit" onClick={handleOk_E}>
                              Submit
                            </Button>
                            </Flex>

                          </Flex>

                        </Form.Item>
                      </Form>     
                </Modal>
              </Flex>
              <Flex gap="small" wrap="wrap" >
                <Button style={{margin:'24px 0 0  0'}} onClick={() => toggleDiv('isVisible_E')}>显示代码</Button>
                <Button icon={<CopyOutlined />} style={{margin:'24px 0 0  0'}} onClick={(e) => {
                  copyText(codeString_E);
                  success();
                }}>复制代码</Button>
                {isVisible_E && (
                      <pre  style={{ width: '100%', overflow: 'auto' }} > 
                      <code  className="language-javascript" > 
                        {codeString_E}
                      </code>  
                    </pre>
                  )}                                    
              </Flex> 
            </Flex>
        </Flex>                                                                                                  

      {contextHolder_C} 
    </ConfigProvider>  
  );  
};  
  
export default App;