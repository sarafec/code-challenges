/*
Problems Statement:
Multiply without the multiplication operator

Solution:
Call the function recursively x times. Then add up all the xs.
2 + 2 + 2 is equivalent to 2 * 3

*/

function multiply(x, y) {
    // zero multiplied by anything is zero
    if (y == 0)
        return 0;
 
    // add x one by one 
    if(y > 0)
        return (x + multiply(x, y-1));
  
    // if y is negative
    if(y < 0)
        return -multiply(x, -y);
}