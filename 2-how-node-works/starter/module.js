// console.log(arguments);
// console.log(require('module').wrapper);

//module.exports
const C =require('./testModule');

const calc1=new C();

console.log(calc1.add(2,5));


//exports

// const calc2=require('./testModule2');
// console.log(calc2.mult(2,5));

const {add,sub,mult}=require("./testModule2");
console.log(mult(2,5));


//caching

require('./testModule3')();
require('./testModule3')();
require('./testModule3')();
