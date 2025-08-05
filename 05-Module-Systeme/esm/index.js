// Import von Default-Exports
// Variante 1: Namen aus dem Default-Export (falls vorhanden, sonst Dateiname) übernehmen
import log from './log.js';
// Variante 2: Eigenes Symbol für den Import festlegen
import schreibe from "./log.js";

// Import von benannten Exports
// Variante 1: Alle importieren unter einem Namen(sraum)
import * as lib from './lib.js';
// Variante 2: Benannte Imports
import { add, sub } from './lib.js';
// Variante 3: Umbenennung benannter Imports
import { add as plus} from './lib.js';


// Import von gemischtem Export
import demo, { printVersion, VERSION } from './demo.js';

// Weird: Default-Export ist ein benannter Export mit dem Namen 'default'
import { default as bsp } from './demo.js';
import * as demoLib from './demo.js';

demoLib.VERSION;
demoLib.printVersion();
demoLib.default();

log("Programmstart");

const a = 17;
const b = 4;

let erg = lib.sub(a,b);
erg = lib.add(a,b);
erg = add(a,b);
erg = sub(a,b);
erg = plus(a,b);

schreibe(erg);


log(VERSION);
printVersion();
demo();
bsp();
