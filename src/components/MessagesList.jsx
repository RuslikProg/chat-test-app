import React, { useEffect, memo, useRef}from 'react';
import styless from '../styles/App.module.css';

const ListOfMessages = memo(({data})=>{
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  },
  [data])

  return data.length ? data?.map((e,i)=>{
    return e.type ?
      (<div ref={messageRef} 
            className={styless.rightMessageStyle} 
            key={i}>
      {e.value}
      </div>) 
      : 
      (<div ref={messageRef} 
        className={styless.leftMessageStyle} 
        key={i}>
      {e.value}
      </div>);
  }) 
  : 
  [];
});

export default ListOfMessages;