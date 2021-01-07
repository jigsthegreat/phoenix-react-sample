import React, { useState } from "react";

interface UpdateProps {
  param1: any;
}

interface Blog {
  author: string;
  image: string;
  link: string;
  subtitle: string;
  title: string;
}

const UpdateForm: React.FC<UpdateProps> = (prop: UpdateProps) => {
  const initialBlogState: Blog = {
    author: '',
    image: '',
    link: '',
    subtitle: '',
    title: '',
  }
  const [blog, setBlog] = useState<Blog>(initialBlogState);

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBlog(prevBlog => ({
      ...prevBlog,
      title: event.target.value,
    }))
  }

  const handleSubtitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBlog(prevBlog => ({
      ...prevBlog,
      subtitle: event.target.value,
    }))
  }

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBlog(prevBlog => ({
      ...prevBlog,
      image: event.target.value,
    }))
  }

  const handleLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBlog(prevBlog => ({
      ...prevBlog,
      link: event.target.value,
    }))
  }

  const handleAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setBlog(prevBlog => ({
      ...prevBlog,
      author: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return new Promise((resolve, reject) => {
      fetch('http://localhost:4000/api/blogs/5', {
        method: 'PUT',
        body: JSON.stringify({blog}),
        headers
      })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          console.log("update success")
          resolve(response);
        })
        .catch(error => {
          console.error(error)
          reject(error);
        });
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={blog.title}
            onChange={handleTitle}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Subtitle</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={blog.subtitle}
            onChange={handleSubtitle}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter Image URL"
            onChange={handleImage}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Link</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={blog.link}
            onChange={handleLink}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Author</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={blog.author}
            onChange={handleAuthor}
          />
        </div>
      </div>

      <button
        type="submit"
        value="Submit"
        className="button is-primary"
      >
        Submit
        </button>

    </form>
  )
}

export default UpdateForm
