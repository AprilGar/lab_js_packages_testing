const sum = function(a, b){
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = (a,b) => {
    return a*b;
};

const divide = (a,b) => {
   if (b === 0){
    return "Cannot divide by 0";
   } else 
    return a / b;
};

const modulus = (a,b) => {
    return a % b;
};

const even = (number) => {
    if (number%2===0){
        return true;
    } else 
    return false;
};

const odd = (number) =>{
    if (!(number%2===0)){
        return true;
    } else 
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
