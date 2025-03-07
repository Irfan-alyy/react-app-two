import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

const Layout = () => {
    return ( <>
    <Header/>
    <div className="layout-body">
        <Outlet/>
    </div>
    <Footer/>
    </> );
}
 
export default Layout;<>
<Header/>
</>