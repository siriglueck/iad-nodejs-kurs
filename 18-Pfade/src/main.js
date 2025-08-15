// CommonJS
// const path = require('node:path');
import path from 'node:path';

// CommonJS
// __dirname enthält den Verzeichnamen der aktuellen Datei!

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '..', 'data'));


// ES Module vor 20.11
console.log(import.meta.url); // Pfad zur aktuellen Datei in URL-Format

// ES Module ab 20.11.0 zusätzlich
console.log(import.meta.dirname);
console.log(import.meta.filename);


import { URL, fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const __filename = fileURLToPath(import.meta.url);

console.log(__dirname);
console.log(path.join(__dirname, '..', 'data'));