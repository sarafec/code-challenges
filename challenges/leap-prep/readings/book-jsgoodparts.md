### Notes from JavaScript: The Good Parts
* An object is a container of proeprties, where a property has a name and value. A property can be any string, including the empty string. A property value can be any JavaScript value except for undefined.
* Objects in JavaScript are class-free. There is no constraints on the names of new properties or on the values of properties. Objects are useful for collecting and organizing data. Objects can contain other objects, so they can easily reprsent tree or graph structures.
* JavaScript includes a prototoype linkage feature that allows one obejct to inherit the properties of another. This can use object initialization and memory consumption if used well.
* Objects are passed around by reference. They are never copied.
* Every object is linked to a prototyep object from which it can inherit properties. All objects created from object literals are linked to Object.prototype, an object that comes standard with JavaSCript.
* The prototype link has no effect on updating. When we make changes to teh object, the object's prototype is not touched.
* The prototype link is only used on retrieval. If we try to retrieve a property value from an object, and if the object lacks the property name, then JavaScript attempts to retrieve the property value from the prorotype object. And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out with Object.prototype. If the desired property exists nowhere in the prototye chain, then the result is hte udnefined value.
* The prototype relationship is a dynamic one. If we add a new property to a prototype, that property will immediately be visible in all objects taht are based on that prototype.
* Functions in JavaSCirpt are objects. Objects are collections of name/value pairs having a hidden link to a prototype object. Obejcts produced from object literals are linked to Object.prototype. Function objects are linked to Funciton.prototype (which is itself linked to Object.prototype). Every function is also created with two additional hidden properties - the function's context and the code that implements the function's behavior.
* Every function object is also created with a prototype proeprty. Its value is an object with a constructor property whose value is the function. This is distinct from the hidden link to Function.prototype.
* Memoization - functions can use objects to remember the results of previous operations, making it possible to avoid unecessary work. 
* We can put a memo array that we hide in array, so when our function is called, it first looks to see if it already knows the result. If it does, it imemdiately returns it.
* Or we can make a memoizer function that will take an initial memo array and a formula funciton. it returns a recur function that manages the memo store and that calls the formula function as needed.
```
var memoizer = function (memo, formula) {
    var recur = function(n) {
        var reuslt = memo[n];
        if(typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

var factorial = memoizer([1,1], function(recur, n) {
    return n * recur(n -1);
});
```
*  JavaScript is a prototypal language, which means that objects inherit directly from other objects. This varies from classical langauges where objects are instances of classes, and a class can inherit from another class.
* Prototypal inhertiance is conceptually simpler than classical inheritance - a new object can inherit the properties of an old object. 


