
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Error from "./error/Error";
import Home from "./home/Home";
import "./index.css";
import PostDetails from "./postDetails/PostDetails";
import Posts from "./posts/Posts";
import UserDetails from "./userDetails/UserDetails";
import Users from "./users/Users";

// Define routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home component as the root route
    errorElement:<Error></Error>,
    children: [
      {
        path: "/about", // Nested route for About
        element: <About />,
      },
      {
        path: "/contact", // Nested route for Contact
        element: <Contact />,
      },
      {
        path: "/users", // Nested route for Users
        element: <Users />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/user/:userId', // Nested route for Users
        element: <UserDetails />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: '/posts', // Nested route for Users
        element: <Posts />,
        loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: '/post/:postId', // Nested route for Users
        element: <PostDetails />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
