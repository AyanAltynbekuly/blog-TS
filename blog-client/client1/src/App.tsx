import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import CommentForm from "./components/CommentForm";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostDetail />}>
            {/* <Route
              path="posts/:postId/comments/new"
              element={<CommentForm post={post} />}
            /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};
export default App;
