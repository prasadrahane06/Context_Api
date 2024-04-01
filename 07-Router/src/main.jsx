import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";

// const router = createBrowserRouter([{ path: "/", element: <App /> },
// { path: "/create-post", element: <CreatePost />}]);//these renderes only the page the header and footer are not rendered 
//Layout routes

// "/ " represents the common path for every one  and which means teh App com should be rendered for all pages and and also if someone is in "/" show postlist 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]); //these renderes only the page the header and footer are not rendered

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
