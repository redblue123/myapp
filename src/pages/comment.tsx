import{useState,useRef, useEffect} from 'react';
import'./comment.less';
import _ from 'lodash';
import classNames  from 'classnames';
import {v4 as uuidV4} from 'uuid';
import dayjs from 'dayjs';


  // 评论列表假数据
  const list = [
    {
      rpid:'3',
      user:{
        uid:'30009527',
        avatar:'http://toutiao.itheima.net/resources/images/97.jpg',
        uname:'周杰伦'
      },
      content:'哎呦，不错哦',
      ctime:'10-18 08:05',
      like:87,
    },
    {
      rpid:'2',
      user:{
        uid:'92384134',
        avatar:'http://toutiao.itheima.net/resources/images/96.jpg',
        uname:'张三'
      },
      content:'哎呦，不错哦asdfasdfaf',
      ctime:'11-18 08:05',
      like:90,
    },
    {
      rpid:'1',
      user:{
        uid:'92384134',
        avatar:'http://toutiao.itheima.net/resources/images/98.jpg',
        uname:'李五'
      },
      content:'哎呦，不错哦 哎呦，不错哦',
      ctime:'12-18 08:05',
      like:85,
    },
  
  ]

// 当前用户登录信息
const user = {
  //用户id
  uid: '30009527',
  //用户头像
  avatar:'',
  //用户昵称
  uanme:'独孤求败'
  }

  const tabs = [
    {type:'hot', text:'最热'},
    {type:'time', text:'最新'},
  ]

export default function comment() {
  const [replyList, setReplyList] = useState(_.orderBy(list,'like','desc'));
  const handleFilterf = (id:string)=>{
    setReplyList(replyList.filter(item => item.rpid !== id))
  }

  const [type, setType] = useState('hot');

  const handletType = (type:string)=>{
    setType(type)
    if(type === 'hot') {

      setReplyList(_.orderBy(replyList,'like','desc'))

    } else if(type === 'time'){
      setReplyList(_.orderBy(replyList,'ctime','desc'))
    }
  }

  const [value, setValue] = useState('');
  const handleChange = (value:string)=>{
    setValue(value)
  }

  const inputRet = useRef<HTMLInputElement>(null);
  
  const handlePublish = ()=>{
    setReplyList(
      [...replyList,
        {
          rpid:uuidV4(),
          user:{
            uid:'30009527',
            avatar:'http://toutiao.itheima.net/resources/images/97.jpg',
            uname:'周杰伦'
          },
          content:value,
          ctime:dayjs(new Date()).format('MM-DD hh:mm'), // 格式化 月-日 时:分
          like:0,
        },

      ]
    )
    setValue('')
    inputRet.current!.focus(); 
  }
  
  

  return ( 
    <div className='root'>
      <div className="title-group">
        <h1 className="h1">评论</h1>
        <div className='sort'>
          <div>
            {tabs.map((item)=>
            <span 
            key={item.type} 
            onClick={()=>handletType(item.type)} 
            // className={`span ${(type === item.type)&& 'active'}`}
            className={classNames('span',{active:type === item.type})}

            >{item.text}</span>)}
          </div>
        </div>
      </div> 
      <div className='avatar-group'>
        <div className='avatar-image'>
        </div>
        <input 
        ref={inputRet}
        type="text" 
        className='avatar-sort'
        onChange={(e)=> handleChange(e.target.value)} 
        placeholder='发一条友善的信息' 
        value={value}/>

        <button className='button' onClick={handlePublish}>发布</button>
      </div>
      <div className='reply-list-group'>
        {replyList.map((item) =>
        <div key={item.rpid} className='reply-item'>
          <img 
          className='reply-image' 
          alt=""
          src={item.user.avatar}
          />
          <div className='use-name'>
            {item.user.uname}
          </div>
          <div className='reply-content'>
            {item.content}
          </div>
          <div className='reply-info' >
            <span>
              {item.ctime}
            </span>
            <span className='reply-time'>
              点赞数: {item.like}
            </span>
            {item.user.uid === user.uid && 
            <span onClick={()=> handleFilterf(item.rpid)} className='reply-delete'>
              删除
            </span>
            }
          </div>

        </div>
        )
        }
      </div>
    </div>
  );
}