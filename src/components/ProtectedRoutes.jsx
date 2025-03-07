import { Outlet, Navigate } from "react-router-dom";
import Layout from "../assets/Layout";
import { createContext, useContext } from "react";

export const userContext = createContext({user:true});
const ProtectedRoutes = () => {
    const {user,setUser}=useContext(userContext)
  return user ? <Layout /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
