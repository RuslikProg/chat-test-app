import { createSlice } from '@reduxjs/toolkit';
import { getList } from './listThunk';

const initialState = {
  loading: false,
  data:[],
};

export const listSlice = createSlice({
  name: 'List',
  initialState: initialState,
  reducers:{},
  extraReducers:{ 
    [getList.pending]: (state) => {
      state.loading = true     
  },
    [getList.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
  },
    [getList.rejected]: (state) => {
      state.loading = false
  },},
});


export default listSlice.reducer;