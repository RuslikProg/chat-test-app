import React from 'react';
import Input from './Input';
//not used yet
const Registration = () => {
  return (
    <>
      <form action="Submit">
        <Input
          title='Email'
        />
        <span></span>
        <Input
          title='Password'
        />
        <span></span>
      </form>
    </>
  );
}

export default Registration;