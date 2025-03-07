import { NavLink, Link } from "react-router-dom";
import useTheme from "../assets/theme";



function Header(){
    const {themeMode, lightTheme, darkTheme}=useTheme();

    const handleChange=(e)=>{
        const darkMode=e.currentTarget.checked;
        if(darkMode){
            darkTheme()
        }else{
            lightTheme()
        }
    }
        return(
            <header>
                <h1>Welcome Home</h1>
                <input type="checkbox" id="themeBtn"  value="" onChange={(e)=>handleChange(e)} checked={themeMode==='dark'}/>
                <nav>
                    <ul>
                        <NavLink to="/" ><li>Home</li></NavLink>
                        <NavLink to="/services" ><li>Services</li></NavLink>
                        <NavLink to="/contact" ><li>Contact</li></NavLink> 
                        <NavLink to="/about" ><li>About</li></NavLink>
                        <NavLink to="/github" ><li>Github</li></NavLink>
                        <NavLink to="/blogs" ><li>Blogs</li></NavLink>
                        <NavLink to="/create-blog" ><li>Create Blog</li></NavLink>



                    </ul>
                   
                </nav>
                <hr />
            </header>
        );
}
export default Header