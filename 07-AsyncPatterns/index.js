import { createServer } from "node:http";
import fs from 'node:fs/promises';

const server = createServer(async (req,res) => {

    if(req.url === '/') {
        
        let count;
        try {
            const data = await fs.readFile('counter.txt');
            count = Number(data) + 1;
        } catch (err) {
            count = 1;
        }
        
        try {
            await fs.writeFile('counter.txt', count+"");
            res.write(count + "");
        } catch (error) {
            res.statusCode = 500;
            res.write('Probleme beim speichern');
        } finally {
            res.end();
        }

    } else {
        res.statusCode = 404;
        res.write("<h2>Gibt es nicht</h2>");
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
