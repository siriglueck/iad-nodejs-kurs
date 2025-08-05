import http from 'node:http';
import { countPrimesAsync } from "./primes.js";

const server = http.createServer((req,res) => {
    const url = new URL(req.url, 'http://localhost');
    
    if(url.pathname.startsWith('/count')) {
        res.write("<p>Berechnung gestartet...</p>");
        const start = performance.now();

        // console.log(url.searchParams.get('max'));
        const max = Number(url.pathname.slice(7));
        
        countPrimesAsync(max, (count) => {
            const ende = performance.now();
            res.write(`<p>${count} Primzahlen bis ${max} gefunden (in ${ende-start}ms).</p>`);
              res.end();
        });
        

    } else {
        res.write("<p>Berechne Primzahlen Dienst</p>");
          res.end();
    }
   
  
});

server.listen(4321, () => {
    console.log('Server started at http://localhost:4321');
})
