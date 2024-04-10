import React, { useState,  useEffect } from 'react';
import {ConfigProvider, Button, Drawer, Radio, Space , Flex, Tree} from 'antd';
import type { DrawerProps, RadioChangeEvent,TreeDataNode } from 'antd';
import {theme} from '../layouts/index' //公共样式引入
import styles from '../layouts/index.less'; 
import {fetchChannelList} from '@/store/channleStore'
import { useSelector,useDispatch} from "react-redux";
import { TreeNode } from '@/types';

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [dataSelect, setDataSelect] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    // 数据获取
    const DataURL = 'http://localhost:3006/treeData'
    const path = ['data']
    const {channelList} = useSelector((state: any)  => state.channelList);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchChannelList(DataURL,path))
    },[dispatch])

    //递归获取数据层级 
    const [maxLevel, setMaxLevel] = useState(1); 
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
  
    const onExpand = (expandedKeysValue: React.Key[]) => {
      console.log('onExpand', expandedKeysValue);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      setExpandedKeys(expandedKeysValue);
      setAutoExpandParent(false);
    };
  
    const onCheck = (checkedKeysValue: any) => {
      console.log('onCheck', checkedKeysValue);
      setCheckedKeys(checkedKeysValue);
    };
  
    const onSelect = (selectedKeysValue: React.Key[], info: any) => {
      console.log('onSelect', info);
      setSelectedKeys(selectedKeysValue);
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

    return (
        <ConfigProvider theme={theme}>
        <Flex gap="small" wrap="wrap" align='center' >
            <Radio.Group value={dataSelect} onChange={onChangeDataSelect} >
                {renderRadioButtons()}
            </Radio.Group>
        </Flex>
            
            <Tree
            checkable
            checkStrictly
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={channelList}
            defaultExpandAll={true} 
            defaultExpandParent={true}
            height={300}
            />
        </ConfigProvider> 
    )
}

export default App;