/*
5.2 Binary to String
Given a real number between 0 and 1 that is passed in as a double, 
print the binary representation. If the number cannot be represented accurately in binary with at most 32 characters, print "error."

If our number is >= 1, then we know that n had a 1 right after the decimal pointer.
By doing this continuously we can check every digit.

*/

// solution 1
function printBinary(num) {
    if (num >= 1 || num <= 0) {
        return 'invalid';
    }

    let binary = [];
    binary.push('.');
    while (num > 0) {
        if(binary.length >= 32) {
            return 'invalid';
        }

        let r = num * 2;
        if (r >= 1) {
            binary.push(1);
        } else {
            binary.push(0);
            num = r;
        }
    }

    return binary.join('');
}

// to aviod multiplying by two and comparing to 1
// we can compare th enumber to .5 and then .25, etc.
function printBinary2(num) {
    if (num >= 1 || num <= 0) {
        return 'invalid';
    }

    let binary = [];
    let frac = 0.5;
    binary.push('.');
    while (num > 0) {
        if(binary.length >= 32) {
            return 'invalid';
        }

        if (num >= frac) {
            binary.push(1);
            num -= frac;
        } else {
            binary.push(0);
            num = r;
        }
        frac /= 2;
    }

    return binary.join('');
}
