import {useAuth} from '@/utils/useAuth'
import { Outlet, Navigate } from 'umi';
  
export default (props:any) => {
  if (useAuth()) {

    return (           
      <Outlet />
    )
  } else{
    return <Navigate to="/login" replace />;
  }
}


  