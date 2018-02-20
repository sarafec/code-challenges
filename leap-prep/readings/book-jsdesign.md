### Notes from Learning JavaScript Design Patterns
* In classic OOP languages, a constructor is a special method used to initializea  newly created object once memory has been allocated for it.
* In JavaScript, nearly everything is an object. We'll use object constructors.
* Object constructors are used to create specific types of object - both preparing the objects for use and accepting arguments a constructor can use to set the values of member properties and methods when the obejct is first created.
* Two common ways to create new objects  
`var newObject = {};`
`var newObject = new Object();`
* Although JavaScript doesn't support the concept of classes, it does support special constructor functions that work with obejcts. By prefixing a call to a constructor function with the keyword new, we can tell JavaScript we would like the function to behave like a constructor and instantiate a new object with the members defined by that function. See example below.
```
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = fucntion () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}
var civic = new Car('Honda Civic', 2009, 2000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
```
  
* The above version has a few problems - it makes inheritance difficult. The functions are redefined for each of new object created using the Car constructor.
  
* Using Constructors with prototypes - Functions in javaScript have a property called a prototype. When we call a JS constructor to create an object, all the properties of the constructor's prototype are then made available to the new object.
* In this way, multiple Car obejcts can be created that access the same prototype. See example below.  
```
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
Car.prototype.toString = function() {
    return this.model = ' has done ' + this.miles + ' miles';
};
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
```
