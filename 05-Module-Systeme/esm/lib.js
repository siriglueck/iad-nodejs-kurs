import log from "./log.js";

// Benannte Exports: das Exportieren einer Deklaration

export function add (a,b) {
    log(`Add ${a}, ${b}`)
    return a+b;
}

export function sub (a,b) {
    log(`Sub ${a}, ${b}`)
    return a - b;
}

// Manche Bibliotheken exportieren alle benannten Exports nochmal als Default-Export Objekt
export default { add, sub };
