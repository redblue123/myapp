import React, { useState,  useEffect } from 'react';
import {ConfigProvider, Button, Drawer, Radio, Space , Flex, Tree} from 'antd';
import type { DrawerProps, RadioChangeEvent,TreeDataNode } from 'antd';
import {theme} from '../layouts' //公共样式引入
import styles from '../layouts/index.less'; 
import {fetchChannelList} from '@/store/channleStore'
import { useSelector,useDispatch} from "react-redux";
import { TreeNode } from '@/types';


const DataURL = 'http://localhost:3006/treeData'
const path = ['data']

const Analysis: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [rowColumn,setRowColumn] = useState('row');
  const [displayMode, setDisplayMode] = useState('include');
  const [dataSelect, setDataSelect] = useState(null);
  const [maxLevel, setMaxLevel] = useState(1); //存层级状态 假设至少有一层

  // 递归函数，用于找出树的最大层级  
  const getMaxLevel = (data:TreeNode[], currentLevel = 1) => {  
    let max = currentLevel;  
    data.forEach(item => {  
      if (item.children) {  
        const childMaxLevel = getMaxLevel(item.children, currentLevel + 1);  
        max = Math.max(max, childMaxLevel);  
      }  
    });  
    return max;  
  }; 


  // 下面是树筛选的状态存储
  const {channelList} = useSelector((state: any)  => state.channelList);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChannelList(DataURL,path))
    
  },[dispatch])

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);


  const showDrawer = () => {
    setOpen(true);
  };

  const onChangeRowColumn = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setRowColumn(e.target.value);
  };

  const onChangeDisplayMode = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setDisplayMode(e.target.value);
  };

    // 递归函数，用于获取指定层级的所有 key  
    const getKeysAtLevel = (data:TreeNode[], level:number) => {  
      const keys:string[] = [];  
      const traverse = (items:TreeNode[], currentLevel = 1) => {  
        items.forEach(item => {  
          if (currentLevel === level) {  
            keys.push(item.key);  
          } else if (item.children) {  
            traverse(item.children, currentLevel + 1);  
          }  
        });  
      };  
      traverse(data);  
      return keys;  
    };

    const onChangeDataSelect = (e: RadioChangeEvent) => {  
      const selectedLevel = parseInt(e.target.value.slice(5), 10); // 获取选中的层级数字  
      let newCheckedKeys: string[] = []; // 显式地给 newCheckedKeys 变量指定 string[] 类型    
    
      if (!isNaN(selectedLevel) && selectedLevel <= maxLevel) {  
        // 根据选中的层级获取对应的 keys  
        newCheckedKeys = getKeysAtLevel(channelList, selectedLevel);  
      } else {  
        newCheckedKeys = []; // 如果不是有效的层级，清空选中的 keys  
      }  
    
      // 设置选中的 keys 到状态中  
      setCheckedKeys(newCheckedKeys);  
      // 同时更新 dataSelect 状态以记录当前选中的层级  
      setDataSelect(e.target.value);  
    }; 

    // 在组件加载时计算最大层级  
    useEffect(() => {  
      const level = getMaxLevel(channelList);  
      
      setMaxLevel(level);   
    }, [channelList]); // 如果 treeData 会变化，那么应当作为依赖项  
    
    // 根据最大层级动态渲染 Radio 按钮  
    const renderRadioButtons = () => {  
      const radios = [];  
      for (let i = 1; i <= maxLevel; i++) {  
        radios.push(  
          <Radio key={`level${i}`} value={`level${i}`}>  
            全选{i}级  
          </Radio>  
        );  
      }  
      return radios;  
    }; 

  const onClose = () => {
    setOpen(false);
  };

  //树筛选的方法
  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheckTree = (
    checked: React.Key[] | { checked: React.Key[]; halfChecked: React.Key[]; },  
    info:  any // 使用 any 绕过类型检查，或者明确断言为 CheckInfo<DataNode>

  ) => {  
    console.log('onCheckTree', checked, info);  
    
    // 根据 checked 的类型来更新状态  
    if (Array.isArray(checked)) {  
      // 如果 checked 是数组，表示完全选中的节点  
      setCheckedKeys(checked);  
    } else {  
      // 如果 checked 是一个对象，表示有节点被半选中  
      // 通常需要合并 checked.checked 和 checked.halfChecked  
      // 但在这个例子中，我们只关心完全选中的节点  
      setCheckedKeys(checked.checked);  
    }  
    
    // 你可能还需要根据 info 参数来处理其他逻辑  
    // ...  
  };


  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <ConfigProvider theme={theme}>  
      <Space>
        <Button type="primary" onClick={showDrawer}>
          测试抽屉
        </Button>
      </Space>
      <Drawer
        title="维度信息设置:所属区域"

        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Flex gap="small" wrap="wrap" align='center' >  
        <p>维度拓展:</p>
        <Radio.Group value={rowColumn} onChange={onChangeRowColumn} >
          <Radio value="row">行</Radio>
          <Radio value="column">列</Radio>
        </Radio.Group>
        </Flex >  
        <Flex gap="small" wrap="wrap" align='center' >  
        <p>展示模式:</p>
        <Radio.Group value={displayMode} onChange={onChangeDisplayMode} >
          <Radio value="include">包含下钻类别</Radio>
          <Radio value="exclude">不包含下钻类别</Radio>
        </Radio.Group>
        </Flex > 
        <Flex gap="small" wrap="wrap" align='center' > 
        <p>数据选择:</p>
        <Radio.Group value={dataSelect} onChange={onChangeDataSelect} >
        {renderRadioButtons()}
        </Radio.Group>
        </Flex >

            <Tree className={styles.flexborder}
          checkable
          checkStrictly
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheckTree}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={channelList}
          height={400}

        />


      </Drawer>
    </ConfigProvider>
  );
};

export default Analysis;