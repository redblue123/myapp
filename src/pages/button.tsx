
import styles from './button.less';  
import { Button, Flex, ConfigProvider, Space } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const App: React.FC = () => {  
  const theme = {  
    token: {  
      colorPrimary: '#6C1E1E',  
      borderRadius: 2,  
      colorLink: '#6C1E1E',              
    },  
  };

  /* 
  useState 钩子来管理代码块的显示状态
  类型-> 显示代码
  toggleDiv函数来切换对应代码块的状态
  onClick调用toggleDiv这个函数分别传值作为参数,每个按钮就分别控制了对应的代码块的显示和隐藏
  */
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B ] = useState(false);
  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {
      // console.log("111");             
      setIsVisible_A(!isVisible_A);  
    } else{
      setIsVisible_B(!isVisible_B);
    }      
  };
  
  return (  
    <ConfigProvider theme={theme}>  
      <Space>                                   
          <div >  
            <h1 className={styles.title}>Button 按钮</h1>      
            <h2>简述</h2>  
            <p>为了提高用户体验和点击率，需要考虑主次关系和疏密关系。根据不同的需求和情况，选择合适的尺寸、颜色和位置来呈现按钮。</p>  
            <p>在 Potal Design 中我们提供了五种按钮。</p>  
            <ul>  
              <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>  
              <li>默认按钮：用于没有主次之分的一组行动点。</li>  
              <li>虚线按钮：常用于添加操作。</li>  
              <li>文本按钮：用于最次级的行动点。</li>  
              <li>链接按钮：一般用于链接，即导航至某位置。</li>  
            </ul>  
    
            <h2>样式展示</h2>  
            <h3>类型</h3> 
            <Flex gap="small" vertical >
            <div style={{border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px'}}>
              <Flex gap="small" wrap="wrap" >               
                <Button type="primary">主要按钮</Button>  
                <Button>默认按钮</Button>  
                <Button type="dashed">虚线按钮</Button>  
                <Button type="text">文字按钮</Button>  
                <Button type="link">链接按钮</Button>              
              </Flex>
              <div style={{margin:'24px 0 0  0'}}>
                <Button onClick={() => toggleDiv('isVisible')}>显示代码</Button> 
                <Flex gap="small" wrap="wrap" >            
                  {isVisible && (                     
                      // <textarea style={{border: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(100, 30, 30, 0.04)', padding: '16px', width: '100%'}} >
                        <pre style={{border: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(100, 30, 30, 0.04)', padding: '16px', width: '100%' }}>
                          <span>&lt;Button type="primary"&gt;主要按钮 &lt;/Button&gt;</span><br></br>                         
                          <span>&lt;Button type=""dashed""&gt;虚线按钮 &lt;/Button&gt;</span><br></br>
                          <span>&lt;Button type=""text""&gt;文字按钮 &lt;/Button&gt;</span><br></br>
                          <span>&lt;Button type=""link""&gt;链接按钮 &lt;/Button&gt;</span><br></br>
                        </pre>                      
                      // </textarea> 
                  )}           
                </Flex>               
              </div>                         
            </div>
          </Flex>  

            <h3>尺寸</h3>
            <Flex gap="small" vertical >
            <div style={{border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px'}}>
              <Flex gap="small" wrap="wrap" >               
                <Button type="primary" size="large">大尺寸</Button> 
                <Button type="primary" size="middle">中尺寸</Button> 
                <Button type="primary" size="small">小尺寸</Button>              
              </Flex>
              <div style={{margin:'24px 0 0  0'}}>
                <Button onClick={() => toggleDiv('isVisible_A')}>显示代码</Button>
                <Flex gap="small" wrap="wrap" >            
                  {isVisible_A && (                                           
                        <pre style={{border: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(100, 30, 30, 0.04)', padding: '16px', width: '100%', margin: '24px 0 0  0'}}>                          
                          <span>&lt;Button type="primary" size="large"&gt;大尺寸 &lt;/Button&gt;</span><br></br>                         
                          <span>&lt;Button type="primary" size="middle"&gt;中尺寸 &lt;/Button&gt;</span><br></br>
                          <span>&lt;Button type="primary" size="small"&gt;小尺寸 &lt;/Button&gt;</span><br></br>                          
                        </pre>                      
                  )}           
                </Flex>               
              </div>                         
            </div>
          </Flex>            

            <h3>状态</h3>
            <Flex gap="small" vertical >
            <div style={{border: '1px solid rgba(0, 0, 0, 0.08)', padding: '32px'}}>
              <Flex gap="small" wrap="wrap" >               
                <Button type="primary" icon={<PoweroffOutlined />}>图标按钮</Button>
                <Button type="primary" icon={<PoweroffOutlined />}></Button>  
                <Button type="primary" loading>Loading</Button>              
              </Flex>
              <div style={{margin:'24px 0 0  0'}}>
                <Button onClick={() => toggleDiv('isVisible_B')}>显示代码</Button>
                <Flex gap="small" wrap="wrap" >            
                  {isVisible_B && (                                           
                        <pre style={{border: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(100, 30, 30, 0.04)', padding: '16px', width: '100%', margin: '24px 0 0  0'}}>                        
                          <span>&lt;Button type="primary" icon={'{<PoweroffOutlined />}'}&gt;图标按钮 &lt;/Button&gt;</span><br></br>
                          <span>&lt;Button type="primary" icon={'{<PoweroffOutlined />}'}&gt; &lt;/Button&gt;</span><br></br>  
                          <span>&lt;Button type="primary" &gt;loading &lt;/Button&gt;</span><br></br>                                                   
                        </pre>                      
                  )}           
                </Flex>               
              </div>                         
            </div>
          </Flex>                           
          </div>                             
      </Space>  
    </ConfigProvider>  
  );  
};  
  
export default App;