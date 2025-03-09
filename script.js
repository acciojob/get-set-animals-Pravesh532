class Animal {
    constructor(species) {  // Correct constructor name
        this._species = species; // Use a backing property to avoid recursion
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`); // Fix method syntax and string format
    }
}

class Dog extends Animal {
    constructor(species) { 
        super(species); // Call parent constructor correctly
    }

    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    constructor(species) { 
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
