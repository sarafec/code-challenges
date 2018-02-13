// okay fizz buzz
function printFizzBuzz(count) {
    if(!count) 
        return -1;
    
    for (let i = 0; i <= count; i++) {
        if (i % 5 === 0 && i % 3 === 0) { 
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// better fizz buzz
function printFizzBuzz(count) {
    if(!count) 
        return -1;
    
    for (let i = 0; i <= count; i++) {
        let output = '';
        
        if (i % 3 === 0) {
            output += 'fizz';
        } else if (i % 5 === 0) {
            output += 'buzz';
        } else {
            output = i;
        }

        console.log(putput);
    }
}