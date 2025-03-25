import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIspending] = useState(false);
  const navigate = useNavigate();

  async function addBlog(e) {
    e.preventDefault();
    const blog = { title, author, body };

    setIspending(true);
    try {
      await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });

      setIspending(false);
      alert("Blog Added");
      setAuthor("");
      setBody("");
      setTitle("");
      navigate("/blogs");
    } catch (error) {
        console.log("Erorr occured while publishing blog", error)
    }
  }

  return (
    <div className="create-blog">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          required
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Author Name:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="body">Write Blog:</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {!isPending && (
          <button type="button" onClick={(e) => addBlog(e)}>
            Add Blog
          </button>
        )}
        {isPending && (
          <button type="button" disabled>
            Adding...
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
