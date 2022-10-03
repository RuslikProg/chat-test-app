import {React, useEffect} from 'react';
import styless from '../styles/ChatList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {getList} from '../reducers/listThunk';
import defaultLogo from '../icons/usericon.png';
import User from './User';

const ChatList = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.List);

  useEffect(() => {
    getListUsers();
  }, [data]);

  const getListUsers = () => {
    dispatch(getList());
  };

  return (
    <div className={styless.chatListWraper}>
      <h2>Chats</h2>
      {data?.map((e,i)=>{
        return<User key={i} imgSize={'40px'} src={defaultLogo} userFullname={e.name}/>
      })}
    </div>
  );
}

export default ChatList;