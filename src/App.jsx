//import Header from './components/Header.js'
import './App.css/'
//import Footer from './components/Footer.js'
//import Fruit from './components/Fruit.js';
import React, { useEffect ,useState} from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx'
import Layout from './assets/Layout.jsx';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import PageNotFound from './components/PageNotFound';
import Github ,{ githubLoader }from './components/GitHub';
import User from './components/User.jsx';
import Blogs from './components/Blogs'
import CreateBlog from './components/Create';
import BlogDetail from './components/BlogDetail';
import { ThemeProvider } from './assets/theme';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import Login from './components/Login.jsx';

function App(){

  const [themeMode, setThemeMode]=useState();

  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }
  useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark','undefined');
  document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  // const router =createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout/>}>
  //       <Route path='' element={<Home/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/services' element={<Services/>}/>
  //     </Route>
    //)
  //)

  const router=createBrowserRouter([
    {
      path: "/login",
      
      element: <Login/>
    },
    {
      path: "/",
      element: <ProtectedRoutes> <Layout/></ProtectedRoutes>,
      children:[
        {
          path: "",
          element: <Home/>
        },
        {
          path: "services",
          element: <Services/>
        } ,
        {
          path: "about",
          element: <About/>
        },
         {
          path: "contact",
          element: <Contact/>
        },
         {
          loader:githubLoader,
          path: "github",
          element: <Github/>
        },
        {
          path: "user/:userid",
          element: <User/>
        },{
          path: "blogs",
          element: <Blogs/>

        },
        {
          path: "create-blog",
          element: <CreateBlog/>
        },
        {
          path: "blogs/:blog-id",
          element: <BlogDetail/>
        },
        {
          path: "*",
          element:<PageNotFound/>
        }
      ]
    }
  ])
    return( 
      <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <RouterProvider router={router}/>
      </ThemeProvider>
        </>
      );
}
export default App 