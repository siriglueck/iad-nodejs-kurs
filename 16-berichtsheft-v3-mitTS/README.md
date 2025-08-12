# Best Practices for Express - Apps

- Logging! (hier im Projekt mit Morgan)
- Security-Tipps
  - Avoid fingerprinting: `app.disable('x-powered-by')`

## Umbau nach TypeScript

Neue Dev-Dependencies:

- typescript selbst, zum kompilieren (siehe script "build" und tsconfig.json)

Neue Dateien:

- tscofig.json: Erzeugt durch npx tsc --init

Alle .js Dateien umbennenen nach .ts

Neue Dev Dependency:

- tsx um zur Dev-Time den jetzt TypeScript Code auszuführen (ohne Typ-Prüfung)

und das package.json Script dev:code ändern nach "tsx --watch ./src/server.ts"

์Neue Dev Dependency:

- @type/node und die US Config anpassen für node.js Entwicklung

Fehlende Typing

- @types/express
- @types/morgan
- @types/better-sqlite3
