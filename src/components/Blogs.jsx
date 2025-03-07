import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Blogs = () => {
const [data,setData]=useState([]);
const [isData,setIsData]=useState(false);
    useEffect(()=>{
        fetch("http://localhost:3000/blogs")
        .then(response=>response.json())
        .then(data=>{
            setIsData(true)
            setData(data)})
        .catch((error)=>console.log(error));
    },[])
   

    return ( <>
    <h1>Blogs Page</h1>
    
    <div>
        

        {isData? data.map(blog=>{
            return (
                
            <div key={blog.id} id="blog">
                <NavLink to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <h4>Author: {blog.author}</h4>
                <p>{blog.body}</p>
                    
                </NavLink>
            </div>)
        }) :<h2>No Blogs found</h2> }
    </div>
    </> );
}
 
export default Blogs;