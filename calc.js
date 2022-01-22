function calc(operator,a,b) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        switch(operator) {
            case 'sum': return (a + b);
            case 'multi': return (a * b);
            case 'sub': return (a - b);
            case 'div': return (a / b);
            case 'pov': return (a % b);
            case 'exp': return (a ** b);
            default: return('Unknown operator');
        }
    } else {
        return ('Error');
        }
}


console.log(calc('sum',3,4));
console.log(('multi',1,3));
console.log(calc('no',9,12));
console.log(calc(9,12));
console.log(calc('sum',3,));