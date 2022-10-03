import {createAsyncThunk} from '@reduxjs/toolkit';

 export const getAnswer = createAsyncThunk(
  'chat/getAnswer',
  async () => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random`)
    .then((data) => data.json())
  return res;
});