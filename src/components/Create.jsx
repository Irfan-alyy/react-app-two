import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
const [title,setTitle]=useState("");
const [author,setAuthor]=useState("");
const [body,setBody]=useState("");
const [isPending, setIspending]=useState(false);
const nevigate=useNavigate()

function addBlog(e){
    const blog={title, author, body}

    e.preventDefault();
    setIspending(true)
    fetch("http://localhost:3000/blogs", {method:"POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(blog)})
    .then(()=>{console.log("added");
        setIspending(false);
    })
    alert("Blog Added")
    setAuthor("");
    setBody("")
    setTitle("")
    nevigate(-1)

}

    return ( 
    <div className="create-blog">
        <form onSubmit={(e)=>addBlog(e)}>
            <label htmlFor="title">Enter Title</label>
            <input type="text" required id="title" value={title} onChange={(e=>setTitle(e.target.value))}/>
            <label> Author Name:</label>
            <input type="text" required  value={author} onChange={(e=>setAuthor(e.target.value))}/>
            <label htmlFor="body">Write Blog:</label>
            <textarea name="body" id="body" value={body} onChange={(e=>setBody(e.target.value))}></textarea>
            {!isPending&& <button type="submit">Add Blog</button>}
            {isPending&& <button type="submit" disabled>Adding...</button>}

        </form>
    </div> 
    );
}
 
export default CreateBlog;