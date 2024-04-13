import styles from '../layouts/index.less'; 
import React from 'react';
import { Divider, Typography,Flex,ConfigProvider,Card } from 'antd';
import {theme} from '../layouts' //公共样式引入
import HomeCard from '@/components/Card/HomeCard';
// import { useHistory } from 'react-router-dom'; 

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;
//---
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const App: React.FC = () => {


return (
  <ConfigProvider theme={theme}>
  <Typography>
    <Title level={2}>简介</Title>

    {/* <h1 className={styles.title}>简介 按钮</h1>  */}

    <Paragraph>
    应用开发过程中，会涉及到很多不同的设计规范和实现方式，可能会给设计人员和开发人员带来困难和重复，降低开发效率。
    中金企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。
    同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </Paragraph>

    <Paragraph>
    为应用提供设计语言的目标是{' '}
      <Text strong>
      统一项目的用户界面规范，降低不必要的设计差异和实施的成本，释放设计和实施资源前端开发
      </Text>
    </Paragraph>

    <Paragraph>
      基于<Text mark>『确定』和『自然』</Text>
      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
      <Text strong>更好的用户体验</Text>。
    </Paragraph>

    <Title level={2}>设计资源</Title>

    <Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
      <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
    </Paragraph>

    <Paragraph>
      <blockquote>{blockContent}</blockquote>
      <pre>{blockContent}</pre>
    </Paragraph>

    <Paragraph>
      按<Text keyboard>Esc</Text>键退出阅读……
    </Paragraph>
  </Typography>

  <Title level={2}>组件</Title>
  <Flex gap="small" vertical >
    <Flex  gap="small" vertical className={styles.flexborder}>
      <Flex gap="small" wrap="wrap"  > 
        <Card title="通用" extra={<Link href='/'>更多</Link>} >
          <Card.Grid style={gridStyle} ><Link href="/font">Font 文字</Link></Card.Grid>
          <Card.Grid style={gridStyle}>
          <Link href="/color">Color 颜色</Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/button">Button 按钮</Link></Card.Grid>

          <Card.Grid style={gridStyle} ><Link href="/flex">Flex 布局</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/pagination">Pagination 分页</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/form">Form 表单</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/tabs">Tabs 切换</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/modal">Modal 对话框</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/input">Input 输入框</Link></Card.Grid>
          <Card.Grid style={gridStyle}><Link href="/table">Table 表格</Link></Card.Grid>

        </Card>


      </Flex>
    </Flex>
  </Flex>

  </ConfigProvider> 
);
};

export default App;




  




