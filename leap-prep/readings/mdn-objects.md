### Notes from MDN on Objects

#### Object-oriented JavaScript
* The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality taht would otherwise be hard or impossible to make use of.
* Object data (and often, functions) can be stored neatly inside an object package making it easy to structure and access.
* Objects are commonly used as data stores that can be easily sent across the network.
* JavaScript uses special functions called constructor functions to deifne objects and tehir features. 
* Constructors provide a means to create as many objects as you need in an effective way.
  
  
#### Object Prototypes
* An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as the prototype chain. It helps explain why different objects have properties and methods deifned on other objects available to them.
* In JavaScript, when object instances are created, their properties and methods are not copied over. Instead, a link is made between the object instance and its prototype (__proto__) property and the properties and methods are foudn by walking up the chain of prototypes.
* The prototype property's value is an objet, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down teh prototype chain.
* prototype is a property containing an object on which you deifined members you want to be inherited.
* Every constructor function has a prototype property whose value is an object containing a constructor property. This constructor property points to the original constructor function.  

#### Inheritance in JavaScript
* Properties and methods defined inside a constructor function that are given to object isntances (i.e. this.x = x) are members only avialable to object instances.
* Those defined on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance.
* Those defined on a constructor's prototype, which are inherited by all instances and inherited object classes.
* Objects are another form of code reuse - like functions or loops. If you find yourself creating a bunch of related vairables and functions and what to track them all together, an object is a good idea.
* Objects are also very useful when you want to pass a collection of data from one place to another.  