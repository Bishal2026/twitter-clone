import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Profile from "./components/Profile.jsx";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Feed />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
