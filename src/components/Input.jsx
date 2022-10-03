import React from 'react';
import styless from '../styles/Input.module.css';

const Input = (props) => {
  const {
   placeholder, 
   type,
   iconLeft,
   icon,
   iconRight,
   alt,
   onChange,
   onKeyDown,
  } = props;
  
  return (
    <div  style={{position: 'relative'}}>
      {
        icon && iconLeft && 
        <img className={styless.leftIconStyle} 
             alt={alt} 
             src={icon}
        />
      }
      <input 
        placeholder={placeholder}
        type={type}
        onChange={onChange} 
        onKeyDown={onKeyDown}
      />
      {
        icon && iconRight && 
        <img className={styless.rightIconStyle} 
             alt={alt} 
             src={icon}
        />
      }
    </div>
  );
};

export default Input;