# student-schedule
A repo with a "simple" service for posting and viewing schedule. Customizable.

# Frontend
## Generating API Client for Frontend
```bash
npx typegen http://backend:8000/api/schema/ > src/api/openapi.d.ts
```

## Environment Variables
```bash
VITE_API_URL=https://root.api.url/
VITE_SCHEMA_URL=https://api.url/to/openapi/schema/
```
The separation of `VITE_API_URL` and `VITE_SCHEMA_URL` is to allow for the frontend to be able to use a different URL for the API and the schema.
This may be useful if you are using a CDN for the schema, but the API is hosted on a different server.
Or if your Backend and Frontend are hosted on different domains.

# Backend
## Running pylint
```bash
uv run pylint student_schedule/ --source-roots=student_schedule/
```