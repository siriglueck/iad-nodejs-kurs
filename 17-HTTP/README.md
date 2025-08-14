# HTTP

## Anatomie eines HTTP-Requests

> Etwas vereinfacht stelle ich einen HTTP/1.1 Request dar

```bash
GET /demo/id/20 HTTP/1.1
Host: localhost:3000
User-Agent: Demo-Client
Accept-Language: de,th,*
    <- Blank line
```

```bash
POST /demo/id/20 HTTP/1.1
Host: localhost:3000
User-Agent: Demo-Client
Accept-Language: de,th,*
    <- Blank line
vorname=siri&nachname=glueck
```

Verwertbare Daten für den Server

- Protokoll (GET, POST, ..)
- Path (und das incl eines eventuellen Query-Strings: /search?q=windows+netcat)
- Body
- Header
