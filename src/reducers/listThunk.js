import {createAsyncThunk} from '@reduxjs/toolkit';

 export const getList = createAsyncThunk(
  'chat/getListOfUsers',
  async () => {
    const res = await fetch(`https://api.github.com/users`)
    .then((data) => data.json())
  return res;
});