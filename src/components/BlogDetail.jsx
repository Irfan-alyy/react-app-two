import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
    const navigate=useNavigate()
    const {"blog-id":id}=useParams();
    const [blog, setBlog]=useState()
    const [isBlog,setIsBlog]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:3000/blogs/${id}`)
        .then(response=>response.json())
        .then(data=>{
            setIsBlog(true);
            setBlog(data)})
        .catch(error=>{ 
                       
            console.log("Error messsage: ", error)
                })
    },[])

    function deleteBlog(){
        fetch(`http://localhost:3000/blogs/${id}`,{method:"DELETE"})
        .then(()=>navigate("/blogs"))
    }
    return ( <>
        {console.log(blog)}
        
        {blog&&<div>
                    <h2>Blog Detail {id}</h2>
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                    <p>{blog.body}</p>
                    <button onClick={deleteBlog}>Delete Blog</button>
                </div>                
        }
        {!isBlog&&(
            <>
             <h2 className="text-red">Blog not found</h2>
             <NavLink to="/blogs">Back Blogs Page</NavLink>
            </>)
           
        
            
    }
    </> );
}
 
export default BlogDetail;