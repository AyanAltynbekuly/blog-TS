import { Post } from "../app/types";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

interface DeletePostAction {
  type: typeof DELETE_POST;
  payload: number; // ID of the post to delete
}

export type PostActionTypes = AddPostAction | DeletePostAction;

export const addPost = (post: Post): PostActionTypes => ({
  type: ADD_POST,
  payload: post,
});

export const deletePost = (id: number): PostActionTypes => ({
  type: DELETE_POST,
  payload: id,
});
