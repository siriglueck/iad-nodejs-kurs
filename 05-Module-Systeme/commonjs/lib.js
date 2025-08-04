const log = require("./log");

function add (a,b) {
    log(`Add ${a}, ${b}`)
    return a+b;
}

function sub (a,b) {
    log(`Sub ${a}, ${b}`)
    return a - b;
}

// CommonJS-Modul
module.exports = { add, sub }
