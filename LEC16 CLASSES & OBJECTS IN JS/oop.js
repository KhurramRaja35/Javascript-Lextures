//2 examples of inheritence and super keyword...

class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} the ${this.breed} says woof`);
    }
}

const myDog = new Dog("maxy","rotviler");

myDog.bark()


// // 1. THE PARENT CLASS
// class Phone {
//   constructor(brand) {
//     this.brand = brand; // Every phone has a brand
//   }

//   call(number) {
//     console.log(`Calling ${number} from my ${this.brand}...`);
//   }
// }

// // 2. THE CHILD CLASS (Inherits from Phone)
// class SmartPhone extends Phone {
//   constructor(brand, cameraMegapixels) {
//     // Call the parent constructor to set up the brand
//     super(brand); 
    
//     // Set up the unique feature for SmartPhone
//     this.cameraMegapixels = cameraMegapixels; 
//   }

//   takePhoto() {
//     console.log(`Snap! Took a photo with a ${this.cameraMegapixels}MP camera.`);
//   }
// }

// // 3. PUTTING IT TO WORK
// const myNewPhone = new SmartPhone("Apple", 48);

// // The child object can use Parent methods automatically!
// myNewPhone.call("555-0199"); // Output: Calling 555-0199 from my Apple...

// // The child object can use its own unique methods!
// myNewPhone.takePhoto();      // Output: Snap! Took a photo with a 48MP camera.


//Method Overriding Example:-

class Character{
    constructor(name){
        this.name=name;
    }
    attack(){
        console.log(`${this.name} performs a basic physical strike`)
    }
}

class Mage extends Character{
    //we dont need constructor here cz we arent adding any new properties here!!!
    attack(){
        console.log(`${this.name} casts a powerfull fireball spell`)
    }
}

class Paladin extends Character{
    attack(){
        super.attack();
        console.log(`...and heals themselves for 10hp`)
    }
}


const hero1 = new Mage("Gandalf");
const hero2 = new Paladin("Arthur")

hero1.attack();
hero2.attack();



//static method , getters and setters and instance of operator

class Product{
    constructor(name,price){
        this._name=name;
        this._price=price;
    }
    get price(){
        return `$${this._price}`
    }
     get name() {
        return this._name; 
    }
    set price(newPrice){
        if(newPrice<=0){
            console.log("Price can't be zero or in negative value")
        } else{
            this._price=newPrice;
        }
    }
    set name(newName) {
        this._name = newName;
    }
    static comparePrices(product1,product2){
        if(product1._price < product2._price){
            console.log(`${product1._name} is cheaper than ${product2._name}.`)
        } else if(product2._price < product1._price){
            console.log(`${product2._name} is cheaper than ${product1._name}.`)
        } else{
            console.log("Both products are of same price...")
        }
    }
}


const item1 = new Product("book",15)
const item2 = new Product("shirt",25)

console.log(item1.name,item1.price)
console.log(item2.price)


item1.price=-5//error

Product.comparePrices(item1,item2)//static method use to write the class name not the object name

console.log(item1 instanceof Product)//dna test bro



//Class fields and private fields


class Vault{
    isOpen = false; //class field
    #secretCode; //private field
    constructor(OpenSesame){
        this.#secretCode = OpenSesame;
    }
    unlock(enteredCode){
        if(enteredCode === this.#secretCode){
            this.isOpen = true;
            console.log("Vault Unlocked");
        }else{
            console.log("Access Denied")
        }
    }
}

const myVault = new Vault("SuperSecret123");
console.log(myVault.isOpen) // false 
myVault.unlock("WrongCode") // acces denied
myVault.unlock("SuperSecret123") // Vault Unlocked