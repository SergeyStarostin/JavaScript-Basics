const randomPassGen = require('./random_pass_gen_test.js');

const password_1 = randomPassGen.generatePassword();
const password_2 = randomPassGen.generatePassword(10, false, true, true);
console.log(password_1);
console.log(password_2);
