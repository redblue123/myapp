// src/utils/auth.js  
export function isAuthenticated() {  
    // 示例：假设用户的token存储在localStorage中  
    const token = localStorage.getItem('userToken');  
    return !!token; // 如果token存在，则返回true  
  }

  