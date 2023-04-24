import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { getPostById } from "../app/api";
import { Post } from "../app/types";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();
  const post = useSelector((state: RootState) =>
    state.post.posts.find((p: Post) => p.id === postId)
  );

  useEffect(() => {
    if (postId) {
      const fetchPostById = async () => {
        const post = await getPostById(postId);
        dispatch({ type: "post/getPostsSuccess", payload: [post] });
      };
      fetchPostById();
    }
  }, [dispatch, postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/comments/new`}>Leave a comment</Link>
    </div>
  );
};

export default PostDetail;
