import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "./CommentActions";
import { Comment } from "../app/types";
import { Post } from "../app/types";

interface Props {
  post: Post;
}

const CommentForm: React.FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment: Comment = {
      postId: post.id,
      id: Math.floor(Math.random() * 1000000) + 1,
      name,
      email,
      body,
    };
    dispatch(addComment(newComment));
    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
