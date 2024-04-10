
import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import {decrement, increment, incrementTen,}  from "@/store/counterStore"
import {fetchChannelList} from '@/store/channleStore'



const URL = 'http://geek.itheima.net/v1_0/channels'
const path = ['data', 'data', 'channels']




function App(){
  const {count} = useSelector((state:any) => state.count)
  const {channelList} = useSelector((state:any) => state.channelList)
  // const channels = '.data.data.channels'
  

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchChannelList(URL,path))
      // console.log(channelList)
      
    },[dispatch])

    

  


  return (
    <div>
    <button onClick={() => dispatch(increment())}  style={{width:'24px',height:'24px'} }>-</button>
    {count}
    <button onClick={() => dispatch(decrement())}   style={{width:'24px',height:'24px'}}>+</button>
    <button onClick={()=> dispatch(incrementTen(10))}>add to 10</button>
    <button onClick={()=> dispatch(incrementTen(20))}>add to 20</button>
    <ul>
      {channelList.map((item:any)=><li key={item.id}>{item.name}</li>)}
    </ul>


    
  </div>
  )
}

export default App; 




