

export interface Channel {  
    id: string;  
    name: string;  
    // 其他属性...  
  }  

  export interface TreeNode {  
    key: string;  
    children?: TreeNode[];  
  }   

  export interface DataNode {  
    key: React.Key;  
    title: React.ReactNode;  
    // ... 其他属性  
    children?: DataNode[];  
  }  

