import { useContext, useState } from "react";
import { userContext } from "./ProtectedRoutes";

const Login = () => {
    const [name,setName]=useState("")

    const {user,setUser}=useContext(userContext);
    
    return (<div className="flex flex-col gap-5">
    <p>Login Form</p>
    <input type="text"value={name} onChange={(e)=>setName(e.target.value)}  className="border border-black rounded-l text-black" placeholder="Enter Your Email"/>
    <input type="password"  className="border border-black rounded-l text-black" placeholder="Enter Your Password"/>

    <button onClick={()=>setUser({user:name})}>Submit</button>
    </div>  );
}
 
export default Login;