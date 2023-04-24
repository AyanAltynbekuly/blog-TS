import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from '../app/store';
import { Comment } from '../app/types';

interface CommentState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCommentsSuccess(state, action: PayloadAction<Comment[]>) {
      state.loading = false;
      state.error = null;
      state.comments = action.payload;
    },
    getCommentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCommentStart(state) {
      state.loading = true;
      state.error = null;
    },
    addCommentSuccess(state, action: PayloadAction<Comment>) {
      state.loading = false;
      state.error = null;
      state.comments.push(action.payload);
    },
    addCommentFailure(state, action: PayloadAction<string> ) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCommentsStart,
  getCommentsSuccess,
  getCommentsFailure,
  addCommentStart,
  addCommentSuccess,
  addCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;

export const fetchComments = (postId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getCommentsStart());
    const { data } = await axios.get(`/posts/${postId}/comments`);
    dispatch(getCommentsSuccess(data));
  } catch (error: Error | any) {
    dispatch(getCommentsFailure(error.message));
  }
};

export const addComment = (
  postId: string,
  name: string,
  email: string,
  body: string,
): AppThunk => async (dispatch) => {
  try {
    dispatch(addCommentStart());
    const { data } = await axios.post(`/comment/${postId}`, { name, email, body });
    dispatch(addCommentSuccess(data));
  } catch (error: Error | any) {
    dispatch(addCommentFailure(error.message));
  }
};
