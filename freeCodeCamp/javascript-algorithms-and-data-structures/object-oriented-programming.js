// create-a-basic-javascript-object
let dog = {
  name: "Bob",
  numLegs: 4
};

// use-dot-notation-to-access-the-properties-of-an-object
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name, dog.numLegs);

// create-a-method-on-an-object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs();

// make-code-more-reusable-with-the-this-keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

// define-a-constructor-function
function Dog() {
  this.name = "Bob",
  this.color = "Brown",
  this.numLegs = 4
}

// use-a-constructor-to-create-objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// extend-constructors-to-receive-arguments
function Dog(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

let terrier = new Dog("Bob", "Brown");

// verify-an-objects-constructor-with-instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(5);
myHouse instanceof House;

// understand-own-properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for(let property in canary) {
  ownProps.push(property);
}

// use-prototype-properties-to-reduce-duplicate-code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// iterate-over-all-properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for(const property in beagle) {
  if(beagle.hasOwnProperty(property))
    ownProps.push(property);
  else
    prototypeProps.push(property);
}

// understand-the-constructor-property
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else 
    return false;
}

// change-the-prototype-to-a-new-object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  eat: function() {
    console.log("Eating...");
  },
  describe: function() {
    console.log("It's me bro...");
  },
  numLegs: 4
};

// remember-to-set-the-constructor-property-when-changing-the-prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// understand-where-an-objects-prototype-comes-from
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

// understand-the-prototype-chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

Object.prototype.isPrototypeOf(Dog.prototype);

// use-inheritance-so-you-dont-repeat-yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// inherit-behaviors-from-a-supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// set-the-childs-prototype-to-an-instance-of-the-parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

// reset-an-inherited-constructor-property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

// add-methods-after-inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
}

let beagle = new Dog();

// override-inherited-methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly());

// use-a-mixin-to-add-common-behavior-between-unrelated-objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Glide function...");
  }
}

glideMixin(bird);
glideMixin(boat);

// use-closure-to-protect-properties-within-an-object-from-being-modified-externally
function Bird() {
  let weight = 15;

  this.getWeight = () => { return weight };

}

// understand-the-immediately-invoked-function-expression-iife
(function () {
  console.log("A cozy nest is ready");
})();

// use-an-iife-to-create-a-module
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },

    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }})();
