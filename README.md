[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)
# Remix stack for Render.com

This is a very simple remix stack built for [render.com](https://render.com). This includes:

* Postgres Sql for a datastore
* Prism ORM for database queries

## How to use this?

* run `npx create-remix@latest --template terribledev/remix-render`
* Create a new github repo and push the output up
* Use the deploy to render button in your repository to deploy your app


## Developing

You can use `docker-compose up -d` to boot postgres locally, and the connection strings you need are in `.env`.

You should make an `.env.development` file to store all your local environment settings to keep out of git