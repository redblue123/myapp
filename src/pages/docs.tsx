
import styles from '../layouts/index.less'; 
import { Button, Flex, ConfigProvider, Space, Typography } from 'antd';  
import { PoweroffOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {theme} from '../layouts/index' //公共样式引入
 

const splitlist = theme.token.colorPrimary.split(",");
splitlist.pop();
const colorResult = splitlist.join(",");
console.log(colorResult)




