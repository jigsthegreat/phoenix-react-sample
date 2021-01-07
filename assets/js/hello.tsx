import React, { useState, useEffect } from "react";

interface GreeterProps {
  name: string;
}

interface Blog {
  author: string;
  image: string;
  link: string;
  subtitle: string;
  title: string;
}

const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
  const name = props.name;
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then(response => response.json())
      .then(response => {
        console.log(response.blogs)
        setBlogs(response.blogs)
        // console.log(blogs)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>welcome</h1>
      {blogs.map(blog => <div key={blog.author}>{blog.author}</div>)}
    </div>
  );
};

export default Greeter;
