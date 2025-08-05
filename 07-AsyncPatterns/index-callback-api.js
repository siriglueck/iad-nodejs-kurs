import { createServer } from "node:http";
import fs from 'node:fs';

const server = createServer((req,res) => {

    if(req.url === '/') {
    // 1. Falls Datei counter.txt existiert: count lesen, sonst count = 0
   fs.readFile('counter.txt', (err, data) => {
      let count = 0;
      if(data) {
        count = Number(data);
      }
      
      // 2. Count erhöhen
      ++count;

      fs.writeFile('counter.txt', count + "", (err) => {

        if(err) {
            res.statusCode = 500;
            res.write('Probleme beim speichern')
        } else {
            res.write(count + "");
        }

        fs.appendFile('log.txt', 'Counter Inc\n', () => {
            
            res.end();
        });

      })
   })
    } else {
        res.statusCode = 404;
        res.write("<h2>Gibt es nicht</h2>");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
