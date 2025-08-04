//all functions that we want to use in other files

function add(a, b) {
  return a + b;
}

// CommonJS-Module-Export
// module.exports = { add : add };
module.exports = add;
