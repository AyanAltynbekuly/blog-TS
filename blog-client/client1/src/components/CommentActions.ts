import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../app/types';

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
