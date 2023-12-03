var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if(digits[i]!=0)
            return digits;
    }
    digits = [...Array(len + 1)].map(_=>0);;
    digits[0] = 1;
    return digits;
};

// var plusOne = function(digits) {
//     let num = BigInt(digits.join(''));
//     let string = String(num + 1n);
//     let ary = string.split('');

//     return ary.map(str => Number(str));
// };