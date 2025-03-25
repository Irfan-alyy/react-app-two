import {useNavigate} from "react-router-dom";
import Layout from "./Layout";
import UserContext from "../../context/Context";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const Navigate=useNavigate()
  const {user} = useContext(UserContext);
  console.log(user)    
  return user && user.token!=null  ? <Layout /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
