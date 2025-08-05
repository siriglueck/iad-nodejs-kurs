import { createServer } from "node:http";
import fs from 'node:fs/promises';

const server = createServer((req,res) => {

    if(req.url === '/') {
        
        // Etwas besser mit Promise Continuation
        fs.readFile('counter.txt')
            .catch(() => 0)
            .then(data => Number(data))
            .then(count => {
                ++count;
                fs.writeFile('counter.txt', count+"")
                    .then(() => {
                        res.write(count + "");
                    })
                    .catch(() => {
                        res.statusCode = 500;
                        res.write('Probleme beim speichern')
                    })
                    .finally(() => {
                        res.end();
                    });
            })

        // Callback Hell with Promises
        /* let count;
        fs.readFile('counter.txt')
            .then(data => {count = Number(data)})
            .catch(err => {count = 0})
            .finally(() => {

                ++count;

                fs.writeFile('counter.txt', count+"")
                    .then(() => {
                        res.write(count + "");
                    })
                    .catch(() => {
                        res.statusCode = 500;
                        res.write('Probleme beim speichern')
                    })
                    .finally(() => {
                        res.end();
                    });
            });

            */


    } else {
        res.statusCode = 404;
        res.write("<h2>Gibt es nicht</h2>");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
