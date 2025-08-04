import log from "./log.js";

export function add (a,b) {
    log(`Add ${a}, ${b}`)
    return a+b;
}

export function sub (a,b) {
    log(`Sub ${a}, ${b}`)
    return a - b;
}


