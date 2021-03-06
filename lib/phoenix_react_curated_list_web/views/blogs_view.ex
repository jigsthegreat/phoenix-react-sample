defmodule PhoenixReactCuratedListWeb.BlogsView do
  use PhoenixReactCuratedListWeb, :view

  def render("index.json", %{blogs: blogs}) do
    %{
        blogs: Enum.map(blogs, &blogs_json/1)
     }
  end
  def blogs_json(blog) do
    %{
       id: blog.id,
       title: blog.title,
       subtitle: blog.subtitle,
       image: blog.image,
       link: blog.link,
       author: blog.author
    }
  end
  # show single blog
  def render("show.json", %{blog: blog}) do
    %{
      blog: blogs_json(blog)
    }
  end
end
