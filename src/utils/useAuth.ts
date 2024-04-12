// src/utils/useauth.js  
import {getToken} from '@/utils/token'
export function useAuth() {  
    // 示例：假设用户的token存储在localStorage中  
    const token = getToken();  
    return !!token; // 如果token存在，则返回true  
  }