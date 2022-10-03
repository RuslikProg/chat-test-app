import {createAsyncThunk} from '@reduxjs/toolkit';

 export const getList = createAsyncThunk(
  'chat/getListOfUsers',
  async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => data.json())
  return res;
});