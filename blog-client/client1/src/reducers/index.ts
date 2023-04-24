import { combineReducers } from '@reduxjs/toolkit';
import postReducer from '../features/postsSlice';
import commentReducer from '../features/commentsSlice';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
