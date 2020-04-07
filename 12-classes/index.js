// BASIC CLASS

function OldCounter (startingValue = 0) {
    this.count = startingValue
}

OldCounter.prototype.incrament = function (x = 1) {
    this.count += x
}

class Counter {

    constructor (startingValue = 0) {
        this.count = startingValue
    }

    incrament (x = 1) {
        this.count += 1
    }
}

// STATIC

const FortuneTeller = class {

    constructor (number) {
        this.number = number || 3
    }

    // used after instantiation
    sayFortune () {
        console.log(`You will subscribe to this channel in ${this.number} seconds`)
    }

    // can't be used by an instantiated FortuneTeller
    static info () {
        console.log("Click the bell for notifications of new videos :D")
    }
}

// Getters and Setters

class Square {
    
    constructor (width) {
        this.width = width || 0
    }

    // notice:  this is a function but will
    //          be treated like an attribute
    get area () { 
        return this.width * this.width 
    }

    // also treated like attribute when set
    set area (x) {
        this.width = Math.sqrt(x)
    }
}

// Extentions

class Animal {
    
    constructor (name) { this.name = name || "animal"}
    
    eat (x) {
        setTimeout (() => {
            console.log(`${this.name} pooped out some ${x}`)
        }, 2000)
    }

    play () {
        console.log(`${this.name} is playing`)
    }
}

class Dog extends Animal {

    constructor (name, breed) {
        super(name)
        this.breed = breed
    }

    play () {
        console.log(`${this.name} is licking its butthole`)
    }

    animalPlay() { super.play() }
}

// Experimental

class MCHammer {

    //field declarations
    #this = "Can't touch this"
    notThis = "You can touch.. notThis"

    #privates = undefined 

    constructor (whatever) {
        this.#privates = whatever
    }

    get privates () { return this.#privates + "!" }
    set privates (value) { this.#privates = value }
}