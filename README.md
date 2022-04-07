[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/TerribleDev/remix-heroku)

# Remix stack for heroku

This is a very simple remix stack built for heroku. This includes:

* dotenv to load environment variables
* Postgres Sql for a datastore
* Prism ORM for database queries

## Developing

You can use `docker-compose up -d` to boot postgres locally, and the connection strings you need are in `.env`.

You should make an `.env.development` file to store all your local environment settings to keep out of git