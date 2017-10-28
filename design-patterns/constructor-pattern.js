// The Constructor Pattern

// a constructor is a special method used to initialize
// a newly created object once memory has been allocated for it
// in js, everything is an object, so we use object constructors

// object constructors are used to create specific types of objects
// both preparing the object for use and accepting arguments a 
// constructor can use to set the values of member properties
// and methods when the object is first created

// js doesn't support the concept of classes
// however it does support special constructor functions that 
// work with objects
// by prefixing a call to the constructor function with the keyword
// new, we can tell js we would like the function to behave like a 
// constructor and instantiate a new object with the members defined
// by that function

// inside a constructor, the keyword this references the new object
// that is being created

/* EXAMPLE - basic constructor */

//definition
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.miles + 'miles'; 
    };
}

// usage
let civic = new Car('Honda Civic', 2009, 20000);
let mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(civic.toString());

/* EXAMPLE - constructor with prototypes */
// functions in js have a property called a prototype
// we call a js contructor to create an object, all the properties
// of the consturctor's prototype are then made avialable to the new object

// define
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + 'miles';
};

// usage
let civic = new Car('Honda Civic', 2009, 20000);
let mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());