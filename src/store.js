import { configureStore } from '@reduxjs/toolkit';
import Chat from './reducers/chat';
import List from './reducers/list';

export const store = configureStore({
  reducer: {
      Chat: Chat,
      List: List,
  },
})

export default store;

