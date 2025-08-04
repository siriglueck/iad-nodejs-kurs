import log from "./log.js";
import * as lib from './lib.js';

const a = 17;
const b = 4;

let erg = lib.sub(a,b);
erg = lib.add(a,b);

log(erg);

