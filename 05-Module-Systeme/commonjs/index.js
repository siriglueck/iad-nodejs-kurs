const lib = require('./lib');
const log = require('./log');

const a = 17;
const b = 4;

let erg = lib.sub(a,b);
erg = lib.add(a,b);

log(erg);

