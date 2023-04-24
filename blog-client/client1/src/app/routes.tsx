import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";
import CommentForm from "../components/CommentForm";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetail />}>
          {/* <Route path="comments/new" element={<CommentForm post={post} />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
