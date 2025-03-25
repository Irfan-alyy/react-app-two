//import Header from './components/Header.js'
import './App.css/'
//import Footer from './components/Footer.js'
//import Fruit from './components/Fruit.js';
import React, { useEffect ,useState} from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx'
import Layout from './components/layout/Layout.jsx';
import Contact from './components/about/Contact';
import About from './components//about/About';
import Services from './components/services/Services';
import PageNotFound from './components/error/PageNotFound';
import Github ,{ githubLoader }from './components/extra/GitHub';
import User from './components/extra/User.jsx';
import Blogs from './components/blog/Blogs'
import CreateBlog from './components/blog/Create';
import BlogDetail from './components/blog/BlogDetail';
import { ThemeProvider } from './assets/theme';
import ProtectedRoutes from './components/layout/ProtectedRoutes.jsx';
import Login from './components/login/Login.jsx';
import UserState from './context/UserState.jsx';

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
//heloo
  const router=createBrowserRouter([
    {
      path: "/login",
      
      element: <Login/>
    },
    {
      path: "/",
      element: <Layout/>,
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
      <UserState>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        
        <RouterProvider router={router}/>
      </ThemeProvider>
      </UserState>
        </>
      );
}
export default App 