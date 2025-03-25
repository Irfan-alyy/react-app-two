import { useContext, useState } from "react";
import UserContext from "../../context/Context";
import {useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate=useNavigate()
    const [name,setName]=useState("")
    const {user,update}= useContext(UserContext);
    const handleClick=()=>{
        update("321");
        Navigate("/")
       

    }
 
    console.log("context token",user)
    return (<div className="flex flex-col gap-5">
    <p>Login Form</p>
    <input type="text"value={name} onChange={(e)=>setName(e.target.value)}  className="border border-black rounded-l text-black" placeholder="Enter Your Email"/>
    <input type="password"  className="border border-black rounded-l text-black" placeholder="Enter Your Password"/>

    <button onClick={()=>handleClick()}>Submit</button>
    </div>  );
}
 
export default Login;