import { createSlice } from '@reduxjs/toolkit';
import {getAnswer} from './chatThunk';

const initialState = {
  loading: false,
  data:{},
  chatData:[],
  input: '',
};

export const chatSlice = createSlice({
  name: 'Chat',
  initialState: initialState,
  reducers: {
    changeInput:(state, action)=>{
      return {
        ...state,
        input: action.payload,
      }
    },
    submitMessage:(state,action)=>{
      return{
        ...state,
        chatData: state.chatData.concat({
          value: action.payload.value,
          icon: action.payload.icon,
          type: action.payload.type,
        }),
        input: ''
      }
    }
  },
  extraReducers:{ 
    [getAnswer.pending]: (state) => {
      state.loading = true     
  },
    [getAnswer.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
  },
    [getAnswer.rejected]: (state) => {
      state.loading = false
  },},
});

export const { changeInput,submitMessage } = chatSlice.actions;
export default chatSlice.reducer;