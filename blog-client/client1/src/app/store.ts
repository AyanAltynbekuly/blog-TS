import { configureStore, ThunkAction, Action, ThunkDispatch } from '@reduxjs/toolkit';
import postReducer from '../features/postsSlice';
import commentReducer from '../features/commentsSlice';
import { fetchPosts } from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

// Dispatch fetchPosts action on store initialization
store.dispatch(fetchPosts());

