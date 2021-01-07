defmodule PhoenixReactCuratedList.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_react_curated_list,
    adapter: Ecto.Adapters.Postgres
end
