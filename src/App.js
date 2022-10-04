import React, { useEffect, useCallback}from 'react';
import styless from './styles/App.module.css';
import ChatList from './components/ChatList';
import ChatBoard from './components/ChatBoard';
import Input from './components/Input';
import User from './components/User';
import { useSelector, useDispatch } from 'react-redux';
import {getAnswer} from './reducers/chatThunk';
import {changeInput, submitMessage}from './reducers/chat';
import * as R from 'ramda';
import cahukLogo from './icons/Screenshot_2.png';
import ListOfMessages from './components/MessagesList';

function App() {
  const dispatch = useDispatch();
  const {data, input, chatData} = useSelector(state => state.Chat);
 
  useEffect(() => {
    if (!R.isEmpty(data)){
      dispatch(submitMessage({
        value: data.value,
        icon: data.icon,
      }))
    }
  }, [data]);

  useEffect(() => {
       fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
          return response;
      }) 
  }, [input]);

  const onChangeInput = useCallback((e) =>{
    dispatch(changeInput(e.target.value))
  },[]);

  const onKeyDownMsg = (e)=>{ 
    if(e.key === 'Enter' && !!input){
      dispatch(submitMessage({
        value: input,
        icon: '',
        type: 'messageFromSender'
      }))
      setTimeout(()=>dispatch(getAnswer()), 1500);
      e.target.value = '';
    }
  };

  return (
    <div className={styless.App}>
      <div className={styless.leftSidebar}>
        <div className={styless.leftSidebarHeader}>
          <User/>
          <Input
            placeholder={'Search input'}
          />
        </div>
        <ChatList/>
      </div>
      <div className={styless.rightSidebar}>
        <div className={styless.rightSidebarHeader}>
          <User
            src={cahukLogo}
            userFirstname={'Chak'}
          />
        </div>
        <ChatBoard>
          <ListOfMessages
            data={chatData}
          />
        </ChatBoard>
        <div className={styless.rightSidebarFooter}>
          <Input
            value={input || ""}
            onKeyDown={onKeyDownMsg}
            placeholder={'Type your message'}
            onChange={onChangeInput}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
