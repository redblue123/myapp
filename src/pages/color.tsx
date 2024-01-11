
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Space, Typography, message } from 'antd';  
import { CopyOutlined  } from '@ant-design/icons';
import React, { useState, useEffect} from 'react';
import {theme} from '../layouts/index' 
const { Paragraph, Text, Link } = Typography;
import { ColorPicker } from 'antd';

import hljs from '../../libs/highlight/highlight.js';  
import '../../libs/highlight/styles/panda-syntax-light.css'; 

const codeString = `
import { Flex, ConfigProvider,} from 'antd';  
import {theme} from '../layouts/index' 
import { ColorPicker } from 'antd';

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme} >  
      <Flex gap="small" vertical >

        <Flex gap="middle" wrap="wrap" >
        <Flex gap="small" vertical>
          <ColorPicker size="large" /> 
          <ColorPicker size="large" style={{opacity:0.8}}/>
          <ColorPicker size="large" style={{opacity:0.6}}/>
          <ColorPicker size="large" style={{opacity:0.4}}/>              
          <ColorPicker size="large" style={{opacity:0.2}}/>
        </Flex>
        <Flex gap="small" vertical>
          <ColorPicker size="large" value={theme.token.redSecondary}/>
          <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.8}}/>
          <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.6}}/>
          <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.4}}/>
          <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.2}}/> 
        </Flex>

        <Flex gap="small" vertical>
          <ColorPicker size="large" value={theme.token.ciccPrimary} />
          <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.8}}/>
          <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.6}}/>
          <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.4}}/>
          <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.2}}/> 
        </Flex>
        <Flex gap="small" vertical>
          <ColorPicker size="large" value={theme.token.yellowSecondary} />
          <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.8}}/>
          <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.6}}/>
          <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.4}}/>
          <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.2}}/> 
        </Flex>
        <Flex gap="small" vertical>
          <ColorPicker size="large" value={theme.token.blueSecondary} />
          <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.8}}/>
          <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.6}}/>
          <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.4}}/>
          <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.2}}/> 
        </Flex>
        </Flex > 
   
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; 
`
const codeString_A = `
import styles from '../layouts/index.less'; 
import { Flex, ConfigProvider} from 'antd';  
import {theme} from '../layouts/index' 
import { ColorPicker } from 'antd';

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme} >  
      <Flex gap="small" vertical >
      <Flex  gap="small" vertical className={styles.flexborder}>
        <Flex gap="middle" wrap="wrap">
        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.colorLink}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          中金红-链接
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.colorSuccess}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          绿色-成功
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.colorWarning}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          黄色-警告
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.colorError}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          红色-错误
          </Flex>
        </Flex>
        </Flex>
      </Flex> 
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; 
`
const codeString_B =`
import styles from '../layouts/index.less'; 
import {Flex, ConfigProvider, Typography} from 'antd';  
import {theme} from '../layouts/index' 
import { ColorPicker } from 'antd';

const App: React.FC = () => {  
  return (  
    <ConfigProvider theme={theme} >  
      <Flex gap="small" vertical >
      <Flex  gap="small" vertical className={styles.flexborder}>
      <Flex gap="small" wrap="wrap" > 
        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 100% <br></br>
          #000000
          </Flex>
        </Flex>
        
        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.85}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 85% <br></br>
          标题<br></br>
          #262626

          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.65}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 65% <br></br>
          重要文本<br></br>
          #595959
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.45}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 45% <br></br>
          次要文本<br></br>
          #8C8C8C
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.25}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 25% <br></br>
          无效<br></br>
          #BFBFBF
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.15}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 15% <br></br>
          边框 <br></br>
          #D9D9D9
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.06}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 6% <br></br>
          分割线 <br></br>
          #F0F0F0
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.4}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 4% <br></br>
          背景<br></br>
          #F5F5F5
          </Flex>
        </Flex>

        <Flex gap="small" vertical align="center"> 
          <Flex gap="small" wrap="wrap">
          <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.02}}/>
          </Flex>
          <Flex gap="small" wrap="wrap">
          @Black 2%<br></br>
          表格标题<br></br>
          #FAFAFA
          </Flex>
        </Flex>
            
          </Flex>
        </Flex>     
      </Flex>                                       
    </ConfigProvider>  
  );  
};  
  
export default App; 

`

const App: React.FC = () => {  

  /* 
  useState 钩子来管理代码块的显示状态
  类型-> 显示代码
  toggleDiv函数来切换对应代码块的状态
  onClick调用toggleDiv这个函数分别传值作为参数,每个按钮就分别控制了对应的代码块的显示和隐藏
  */
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible_A, setIsVisible_A ] = useState(false);
  const [isVisible_B, setIsVisible_B ] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleDiv = (div:string) => {  
    if(div === 'isVisible'){      
      setIsVisible(!isVisible);
    } else if (div === 'isVisible_A') {             
      setIsVisible_A(!isVisible_A); 
    } else{
      setIsVisible_B(!isVisible_B);   
    }    
    setIsHighlighted(false);  // 手动重置高亮状态      
  };

  useEffect(() => {  
    if ((isVisible||isVisible_A||isVisible_B) && !isHighlighted) {  
      // 仅在显示代码且未高亮时执行高亮操作  
      hljs.highlightAll(); 
      setIsHighlighted(true); // 标记已高亮 
    }
  }, [isVisible, isVisible_A, isVisible_B]); // 仅在sVisible, isVisible_A, isVisible_B 变化时触发高亮操作  

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

  return (
      
    <ConfigProvider theme={theme}>  
      <Space>                                   
        <Flex gap="small" vertical >
        {contextHolder}
          <h1 className={styles.title}>Color 颜色</h1>      
          <h2>简述</h2>  
          <p>颜色在塑造企业形象中扮演着举足轻重的角色。它不仅体现了团队的专业度和品质，还能通过统一的配色方案让用户在潜意识中对企业形象产生深刻的印象。这种印象不仅彰显了企业的气质，还进一步强化了企业的品牌形象。颜色的运用不仅能传递出企业的价值观和理念，还能展现出企业的创新精神和专业度。</p>  
          <h2>样式展示</h2>  
          <h3>主色 / 辅助色</h3> 
          <Flex  gap="small" vertical className={styles.flexborder} >           
            <Flex gap="middle" wrap="wrap" >
              <Flex gap="small" vertical>
                <ColorPicker size="large" /> 
                <ColorPicker size="large" style={{opacity:0.8}}/>
                <ColorPicker size="large" style={{opacity:0.6}}/>
                <ColorPicker size="large" style={{opacity:0.4}}/>              
                <ColorPicker size="large" style={{opacity:0.2}}/>
              </Flex>
              <Flex gap="small" vertical>
                <ColorPicker size="large" value={theme.token.redSecondary}/>
                <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.8}}/>
                <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.6}}/>
                <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.4}}/>
                <ColorPicker size="large" value={theme.token.redSecondary} style={{opacity:0.2}}/> 
              </Flex>

              <Flex gap="small" vertical>
                <ColorPicker size="large" value={theme.token.ciccPrimary} />
                <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.8}}/>
                <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.6}}/>
                <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.4}}/>
                <ColorPicker size="large" value={theme.token.ciccPrimary} style={{opacity:0.2}}/> 
              </Flex>
              <Flex gap="small" vertical>
                <ColorPicker size="large" value={theme.token.yellowSecondary} />
                <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.8}}/>
                <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.6}}/>
                <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.4}}/>
                <ColorPicker size="large" value={theme.token.yellowSecondary} style={{opacity:0.2}}/> 
              </Flex>
              <Flex gap="small" vertical>
                <ColorPicker size="large" value={theme.token.blueSecondary} />
                <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.8}}/>
                <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.6}}/>
                <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.4}}/>
                <ColorPicker size="large" value={theme.token.blueSecondary} style={{opacity:0.2}}/> 
              </Flex>
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
          <h3>功能色</h3>
          <Flex gap="small" vertical className={styles.flexborder} >
            <Flex gap="middle" wrap="wrap">
              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.colorLink}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                中金红-链接
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.colorSuccess}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                绿色-成功
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.colorWarning}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                黄色-警告
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.colorError}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                红色-错误
                </Flex>
              </Flex>
            </Flex>
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
          <h3>灰色</h3>
          <Flex gap="small" vertical className={styles.flexborder} >
            <Flex gap="middle" wrap="wrap">
              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 100% <br></br>
                #000000
                </Flex>
              </Flex>
              
              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.85}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 85% <br></br>
                标题<br></br>
                #262626

                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.65}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 65% <br></br>
                重要文本<br></br>
                #595959
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.45}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 45% <br></br>
                次要文本<br></br>
                #8C8C8C
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.25}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 25% <br></br>
                无效<br></br>
                #BFBFBF
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.15}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 15% <br></br>
                边框 <br></br>
                #D9D9D9
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.06}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 6% <br></br>
                分割线 <br></br>
                #F0F0F0
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.4}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 4% <br></br>
                背景<br></br>
                #F5F5F5
                </Flex>
              </Flex>

              <Flex gap="small" vertical align="center"> 
                <Flex gap="small" wrap="wrap">
                <ColorPicker size="large" value={theme.token.greyColor} style={{opacity:0.02}}/>
                </Flex>
                <Flex gap="small" wrap="wrap">
                @Black 2%<br></br>
                表格标题<br></br>
                #FAFAFA
                </Flex>
              </Flex>
              
            </Flex>
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

        </Flex>                                       
      </Space>  
    </ConfigProvider>  
  );  
};  
  
export default App;