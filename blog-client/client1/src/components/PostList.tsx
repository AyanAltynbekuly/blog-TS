import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../app/store";
import { Post } from "../app/types";
import { fetchPosts } from "../features/postsSlice";

function PostList() {
  const dispatch: AppDispatch = useDispatch();
  const posts: Post[] = useSelector((state: RootState) => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            {" "}
            <Link to={`/posts/${post.id}`}> {post.title}</Link>{" "}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;
