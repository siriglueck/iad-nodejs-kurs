// .js we can ignore
const lib = require("./lib");
console.log(lib);

const a = 17;
const b = 4;

const erg = lib.add(a, b);
console.log(erg);

// now it doesn't work because we have not defined the function 'add' and it is only NodeJS based not JavaScript, so we need to import it from the lib.js file
