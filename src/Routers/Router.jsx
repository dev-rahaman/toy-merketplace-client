/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Error from "../Pages/Error.jsx/Error";
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../Pages/SignleToy/SingleToy";
import Banner from "../Components/Banner/Banner";
import TextSlider from "../Components/TextSlider/TextSlider";
import ProgrammableToys from "../Pages/ProgrammableToys/ProgrammableToys";
import TransformableToys from "../Pages/TransformableToys/TransformableToys";
import EducationalToys from "../Pages/EducationalToys/EducationalToys";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Projects from "../Pages/Projects/Projects";
import SingleBlogs from "../Pages/Blogs/SingleBlogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://alive-baby-server-rs-rahaman.vercel.app/alltoys/${params.id}`
          ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatetoy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://alive-baby-server-rs-rahaman.vercel.app/alltoys/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <SingleBlogs></SingleBlogs>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8080/blog/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/textslider",
        element: <TextSlider></TextSlider>,
      },
      {
        path: "/programmable",
        element: <ProgrammableToys></ProgrammableToys>,
      },
      {
        path: "/transformable",
        element: <TransformableToys></TransformableToys>,
      },
      {
        path: "/educational",
        element: <EducationalToys></EducationalToys>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default Router;
