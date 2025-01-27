<p align="center">
    <img max-width="256px" width="15rem" src="logo.svg" alt="Student Schedule Logo">
</p>

# Student Schedule
A two-side service for posting schedule for your educational institution.
Share your schedule with students and teachers, and let them see it in a nice and clean way.

# Deployment

Since this project is a combination of a Frontend and a Backend, you'll need to deploy both parts.

## Frontend

Since the Frontend is a SPA (Single Page Application) written in Vue.js, you can deploy it to any static hosting service.
For example - GitHub Pages.
Right now there's a [build workflow](/.github/workflows/frontend.yml) that builds the frontend and pushes it to the `gh-pages` branch.
You can add your own domain to the GitHub Pages settings and you're good to go.

If you will want to use a different service - you can use the same workflow file as a reference.
It has the build steps and the deployment steps.

## Backend

For deploying the backend, you can use the provided Dockerfile and docker-compose.yml files.
You'll need to provide a .env file with the necessary environment variables. (see [this](#environment-variablessettings-setup) section for more info).
Then run the compose and you should be good to go.

You can take a look at the workflow files in the [`.github/workflows`](/.github/workflows/) directory for some inspiration on how to deploy the backend.
If you don't want to use docker-compose - be sure to spin up the PostgreSQL database and run the migrations.

Server requirements are not that high, but you should have at least 1GB of RAM and 1 CPU core for the backend.
Depending on the amount of data you expect to store, you may want to get a larger storage volume.
*P.S. Right now this service works just fine (alongside a few others) on a server with 2GB of ram and 2 CPU cores (cpx11 on Hetzner)*


# Development
Some useful insights on how to develop this system.

Generally speaking it contains two projects in one repository.
1. Frontend application (SPA) written in [Vue.js version 3](https://vuejs.org/) with use of [PrimeVue](https://primevue.org/);
2. Backend application written in Python with use of Django for both - administrative tasks and REST API.

Notes from original development team:
- It's possible to rewrite this whole project as a "simplistic" React application with some Backend;
- It's possible to rewrite just the frontend part with React and utilize SSR (Server Side Rendering), if that's your jazz;
- Django is quite good despite what you may hear about it.

And now some small tips for developers.

## Frontend
### Generating API Client for Frontend
```bash
npx typegen http://backend:8000/api/schema/ > src/api/openapi.d.ts
```
Replace `http://backend:8000/api/schema/` with the URL with which you can obtain the OpenAPI schema from Backend app.
This will refresh the types and provide you with a client for Axios. (You don't need to write API integration from scratch for each request)

### Environment Variables
```bash
VITE_API_URL=https://root.api.url/
VITE_SCHEMA_URL=https://api.url/to/openapi/schema/
```
The separation of `VITE_API_URL` and `VITE_SCHEMA_URL` is to allow for the frontend to be able to use a different URL for the API and the schema.
This may be useful if you are using a CDN for the schema, but the API is hosted on a different server.
Or if your Backend and Frontend are hosted on different domains.

## Backend
Most configuration and tips for backend would be in how you should configure your settings file for Django.
But there's also this:
### Running pylint
```bash
uv run pylint student_schedule/ --source-roots=student_schedule/
```

Don't worry about it too much. Use it (mostly) as a tool to figure out why some things may break.
And use ruff for the linting/formatting.

### Environment Variables/Settings setup
Create a `.env` file (or add one at `/run/secrets/env_file`), and in it you can change:
- debug (boolean) - if you want to enable the debug mode; (Keep in mind that `prod.py` settings file may simply ignore that one)
- timezone (string, one of valid timezones for Django (pytz?));
- default_admin_username (string) - Mainly used in Production env. to create a default admin;
- default_admin_password (string) - Same;
- secret_key (string) - A secret key for Django, in [settings.py](/student_schedule/student_schedule/settings.py) there's a description with a script for generating it;
- allowed_hosts (List of strings) - A list of hosts that are allowed to access Django Admin;
- trusted_origins (List of strings) - A list of hosts for CSRF;
- allowed_cors_origins (List of strings) - A list of hosts to which CORS requests are allowed (Not used);
- database_url (string) - A URL (with credentials) to a PostgreSQL database used for the application;
- settings_module (string) - full setting module name to use;