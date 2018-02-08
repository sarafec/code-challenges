/*
Problem Statement:
Given an integer, display its binary representation.

My thoughts:
This was the first coding challenge I've ever done where I immediately
assumed it was beyond my understanding but then remembered I know how
to convert numbers to and from binary. 

Further work:
1) better variable names
2) maybe bonus challenge for converting to 64-bit floating point
See post: https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

*/

let binArr = [];
function revealBinary(num) {
    if(num === 0) {
        return binArr.join('');
    }

    let logNum = Math.log2(num);
    let baseNum = Math.floor(logNum);
    let usedNum = 2**baseNum;

    if (binArr.length === 0) {
        for(let i = 0; i <= baseNum; i++) {
            if (i === 0) {
                binArr.push(1);
            } else {
                binArr.push(0);
            }
        }
    } else {
        // todo: can we clean this up?
        binArr[binArr.length - baseNum - 1] = 1;
    }

    let remainder = (num - usedNum);
    revealBinary(remainder);
};

revealBinary(14);
console.log(binArr.join(''));