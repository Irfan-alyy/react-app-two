import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("http://localhost:3000/blogs");
        const data = await response.json();
        setIsData(true);
        setData(data);
      } catch (error) {
        console.log("Error occured while fetching blogs", error);
      }
    };
    fetchBlog()
  }, []);

  return (
    <>
      <h1>Blogs Page</h1>

      <div>
        {isData ? (
          data.map((blog) => {
            return (
              <div key={blog.id} id="blog">
                <NavLink to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <h4>Author: {blog.author}</h4>
                  <p>{blog.body}</p>
                </NavLink>
              </div>
            );
          })
        ) : (
          <h2>No Blogs found</h2>
        )}
      </div>
    </>
  );
};

export default Blogs;
