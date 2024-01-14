// class Calculator{
//     add(a,b){
//         return a+b;
//     }
//     sub(a,b){
//         return a-b;
//     }
//     mult(a,b){
//         return a*b;
//     }
// }

// module.exports = Calculator;

module.exports = class {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mult(a, b) {
        return a * b;
    }
}