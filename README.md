# 🛒 Vicecommerce

A content management system to easily bootstrap all e-shop projects.

### Prerequisites

The things you need before installing the software.

- Either PNPM package manager installed
- Docker (docker-compose, does not come with docker on Linux) installed
- Turborepo and Medusa CMS cli tool, they can be installed using npm like this:

```bash
pnpm install -g @medusajs/medusa-cli turbo
```

### Installation

A step by step guide that will tell you how to get the development set up and running.

1. Installing required packages

Thanks to Turborepo, just run following command and all packages in subdirectories will be
automatically installed

```bash
pnpm install
```

2. Environment variables

First copy the .env.example file to your local .env file, the example file has some variables
already prepared by default (no need to change them), however all variables that have values in
angle brackets need to be filled by you. Ask co-workers and they'll help you with this setup or send
you a filled dotenv file.

2. Migrations

Turn all the docker containers on using `docker-compose up` and the run `medusa migrations run`
to create all tables, indexes and other things in the postgres database.

3. Seeding database

Seeding the database is not as important as migrating but it provides basic dataset for us to work with.
If you want to modify some data before seeding in, cd into store directory in workspaces and modify the
seed.json file located in data folder. Now run following command to sync the database with the seed file.

```bash
medusa seed --seed-file ./data/seed.json
```

4. Adding users manually (optional)

If you're not happy with the users you have in seed.json file and seeded in db, there is always possibility to
add new users like this.

```bash
medusa user --email <email> [--password <password>]
```

...more info in the [docs](https://docs.medusajs.com/).

## Deployment

WIP

### Server

WIP

### Branches

WIP

- Master:
- Feature:
- Bugfix:
- etc...

## Additional Documentation and Acknowledgments

WIP
