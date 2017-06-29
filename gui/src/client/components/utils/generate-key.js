// The global key generating function
// An auto-incrementing index for generating keys.

let n;
let generate;

function generateKey() {
  return generate();
}

function setKeyGenerator(func) {
  generate = func;
}

function resetKeyGenerator() {
  n = 0;
  generate = () => `${n++}`;
}

resetKeyGenerator();

export {
  generateKey as default,
  setKeyGenerator,
  resetKeyGenerator
}
