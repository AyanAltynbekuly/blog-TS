import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../app/store';
import { Post } from '../app/types';
import { getPosts } from '../app/api';

interface PostState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostsStart: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.status = 'idle';
      state.posts = action.payload;
    },
    getPostsFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } =
  postSlice.actions;

export const fetchPosts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPostsStart());
    const posts = await getPosts();
    dispatch(getPostsSuccess(posts));
  } catch (error: string | any) {
    dispatch(getPostsFailure(error.toString()));
  }
};

export default postSlice.reducer;
