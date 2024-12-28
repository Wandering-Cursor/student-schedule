# student-schedule
A repo with a "simple" service for posting and viewing schedule. Customizable.

## Generating Frontend schema
```bash
npx typegen http://backend:8000/api/schema/ > src/api/openapi.d.ts
```

## Running pylint
```bash
uv run pylint student_schedule/ --source-roots=student_schedule/
```