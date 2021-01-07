import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface GreeterProps {

}

interface Blog {
  author: string;
  image: string;
  link: string;
  subtitle: string;
  title: string;
  id: string;
}

const Blogs: React.FC<GreeterProps> = (props: GreeterProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/blogs')
      .then(response => response.json())
      .then(response => {
        console.log(response.blogs)
        setBlogs(response.blogs)
        // console.log(blogs)
      })
      .catch(error => console.error(error));
  }, []);

  const newTo = {
    pathname: "/update/2",
    param1: "Par1"
  };

  return (
    <div>
      <h1>List!</h1>
      <Link
        to="/create"
        style={{ color: "black" }}
      >
        Create Blog Post
      </Link>
      <Link
        to={"/update/1"}
        style={{ color: "red" }}
      >
        Edit Blog Post
      </Link>

      {blogs.map(blog =>
        <div key={blog.id}>
          <h5>{blog.title}</h5>
          <p>{blog.author}</p>
          <button>
            <Link
              to={
                {
                  pathname: "/update/2"
                }
              }
            >
              Update
            </Link>
          </button>
        </div>)}
    </div>
  );
};

export default Blogs;
