defmodule PhoenixReactCuratedListWeb.PageController do
  use PhoenixReactCuratedListWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
