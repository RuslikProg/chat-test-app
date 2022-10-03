import React from 'react';
import styless from '../styles/User.module.css';
import defaultLogo from '../icons/usericon.png';

const User = (props) => {
  const {
    alt,
    src,
    userFirstname,
    userFullname,
    lastMessage,
    imgSize
    } = props;

  return (
    <div className={styless.userBlock}>
      <div className={styless.userBlock__photo}>
        <img style={{width: imgSize}} src={src} alt={alt} />
        <span className={styless.onlineLogo}></span>
      </div>
      <div className={styless.userBlock__info}>
        {userFirstname && <h2>{userFirstname}</h2> }
        {userFullname && <h3>{userFullname}</h3>}
        {lastMessage && <p>{lastMessage}</p>}
      </div>
    </div>
  );
};

User.defaultProps = {
  src : defaultLogo,
  alt : 'user icon'
};

export default User;