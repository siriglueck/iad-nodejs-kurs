import { countPrimes } from './primes.js';

// https://www.michael-holzapfel.de/themen/primzahlen/pz-anzahl.htm


setTimeout(() => {
    console.log('timer')
}, 0);

const start = performance.now();

const max = process.argv[2] ?? 1_000_000;
const count = countPrimes(max);

const ende = performance.now();

console.log(`${count} Primzahlen bis ${max} gefunden (in ${ende-start}ms).`);
