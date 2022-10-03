import {React}from 'react';
import styless from '../styles/ChatBoard.module.css';

const ChatBoard = (props) => {

  return (
    <div className={styless.chatBoardWraper}>
      {props.children}
    </div>
  );
}

export default ChatBoard;