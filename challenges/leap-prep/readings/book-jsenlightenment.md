### Notes from JavaScript Enlightenment
* In JavaScript, an object is just a collection of named values (properties). 
* In JavaScript, methods are properties that contain a Function() object.
* Think of constructor functions as a template or cookie cutter for producing pre-defined objects.
* The role of a constructor function is to create multiple objects that share certain qualities and beahaviors. 
* When a consturctor is incoked usign the new keyword, a function takes on a special role. JavaScript then treats the function as special by setting the values of this for the functio to the new object that is being constructor. Additionally, the function will return the newly created object (i.e. this) by default instead of a falsy value. The new object that is returned from the function is considered to be an instance of the constructor function that constructs it.
* In JavaScript, most values (excluding primitive values) involve objects being created or instantiated from a constructor function.
* An object returned from a constructor function is called an instance.
* A consturctor function is just a cookie cutter. When used with the new keyword, it will create an object with properties and values defined inside the constructor function. when new is used, the value this literally means the new object/instance that will be created based on the statements inside the constructor funcitons.
* If you create a constructor function and call it wihtout the use of the new Keyword, the this value will refer to the parent object that contains the function.
* By using the new operator, we are telling the JavaScript interpreter that we would like an object that is an instance of the corresponding constructor function.
* Be aware that Math is a static object (a container for other methods) and is not a constructor that uses the new operator.
* JavaScript object litearls can be used for manufacturing most of the native object values without having to use the new keyword.
* Using object litearls conceals the underlying process that uses the new operator.
* Primitive values (numbers, strings, booleans, null, and undefined) are irreducable. They do not represent values that can be made up of other values.
* Primitive values are stored and manipulated at face value. That is, they are literally stored in memory as themselves. They are also copied at face value. And referrign to them transfers their value.
* Primitive values are equal by value.
* When a primitive value is used as if it were an object created by a constructor, JavaScript converts it to an obejct in order to respond to the expression at hand, then discards the object qualities and changes it back to a primitive value.
* Complex values can be made up of many different types of JavaScript objects or primitives.
* Complex objects are referenced by value and can contain or encapsulate other values.
* When creating a variable containing a complex object, the value is stored in memory at an address. When you reference a complex object, you're using its name to retrieve the value at that address in memory. 
*  When you change a complex value - because it is stored by reference - you change the value stored in all variables that reference that complex value.
* To truly make a copy of an object, you have to extract the value from the old object, and inject them into a new object.
* Complex objects are equal by reference - Variables that point to a complex obejct in memory are equal only becasue they are using the same address. Two independently created objects are not equal even if they are of the same type and possess the exact same properties.
* A complex object can have as many references as you want, and they will always refer to the same object, even as that object changes.
* When any object is instantiated, the constructor property is created behind the scenes as a property of that object/instance. This points to the constructor function that created the object.
* An instance created from a constructor can have its own independent properties. 
* If you attempt to access a property of an object, it will check that obejct instance for the property. If it has the property, it will return the value of the property. If the instance does not have the property, JavaScript will then look for it on the object's constructor function prototype object.
* All object instances have a secret link (`__proto__`) to the constructor function that created the instance. This secret link can be leveraged to grab the constructor function, specifically the prototype property of the instance's constructor function.
* In JavaScript, functions are objects. This means that a function can be stored in a variable, array, or object. Also, a function can be passed to, and returned from, a function. A function has properties because it is an object. All of these factors make functions first-class citizens in JavaScript.
* It is perfectly legal in JS to omit parameters even if the fucntions has been dfeined to accept these arguments. These missing parameters are simply given the value of undefined.
* If you pass unexpected parameters to a fucntion, no error will occur. It will be possible to access these parameters from the arguments object, which is available to all functions.
* The this keyword, pasesd to all functions, is a reference to the object that contains the fucntion. As you might expect, functions contained wihtin objects as properties (i.e. methods) can use this to gain a reference to the parent object. When a function is defiend in the global scope, the value of this is the global object.
* Functions that take and/or return other functiosn are sometimes called higher-order functions.
* The prototype property is an obejct created by JavaScript for every Function() instance. 
* The prototype property links object isntances created with the new keyword back tot eh constructor function that created them. This is done so that instances can share, or inherit, common methods and properties. This sharing occurs during property look up.
* A prototype object is created for every function, regardless of whether you intend to use that function as a constructor.
* prototype is special because the prototyep chain links every instance to its constructor function's prototype property. This means that any tiem an object is created from a constructor function usign the new keyword (or when an object wrapper is created for a primitive value), it adds a hidden link between the obejct instance created and the prototype proeprty of the constructor funciton used to create it. This link is known inside the instance as `__proto__`. JavaScript wires this together in teh backgroudn when a constructor function is invoked and it's this link that allows the prototype chain to be a chain.
* Accessing the `__proto__`is not part of the official ECMA standard, there is a more universal way to trace the link from an object to the prototype object inherits and that is by using the constructor property.
* The prototyep chain will use the first value it finds durign the chain lookup.
* The prototype property is dynamic in the sense that instances will always get the latest value from the prototype, regardless of when it was instantiated, changed, or appended.
* Prototype inheritance was conceived to allow inheritance chains that mimic the inheritance patterns found in traditional object-oriented programming languages. Inheritance is simply one obejct being given access to another object's properties. This is done by instantiating an instance of the object that you want to inherit from as the value for the prototype property of the function that creates the object that is doing the inheriting. When this is done, there is a link (`__proto__`) between the objects that extends teh avialable properties to an object upon property lookup.