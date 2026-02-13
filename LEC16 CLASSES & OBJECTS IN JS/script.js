// let obj = {
//     a : 1 , 
//     b : "KBR",
// };
// console.log(obj);

// let animal = {
//     eats : true,
// };

// let rabbit = {
//     jumps : true,
// };
// rabbit.__proto__ = animal;


class animal {
    constructor(name) { // contructor tb run ho ga jb hm class ka object bnyn gy ||  ab agr hm is constructor me argument ln to kya hp ga lets say me name set krta hn is animal ka pass kryn gy object se
        this.name = name;
         //Short definition: this is the current execution context object; this.prop reads/writes a property on that object.
        // In your file: this.name = name; inside the constructor of class animal — when you do let a = new animal("bunny"), this is the new instance, so a.name === "bunny".
        console.log("Animal is created");
    }
    eats(){
        console.log("Animal is eating");
    }
    jumps(){
        console.log("Animal is jumping");
    }
    static info(){
        console.log( "static method in animal")
    }
}


//ab me ak r class banao ga lions.. to me chahta hn us me wo sary kam aa jyn jo animal me hyn like eats and jumps to 2 tarreeqy hyn ya to me code copy paste krn ya phr me extends keyword ka use krn us se kya ho ga animal ki sari properties lion me b aa jyn gi ... inheritence kehty isy aur ab lion animal ki sub class ban gai hai
class Lion extends animal {
    constructor(name) {
        super(name);
         //What: super lets a subclass access its parent class — call the parent constructor (super(...)) or invoke parent methods (super.method(...)) or static methods (super.staticMethod()).
    // Why: to reuse and extend behavior from the parent class (initialize parent state, call parent implementations, or share static logic).
    // Key rules:
    // In a subclass constructor, you must call super(...) before using this. Otherwise you'll get a ReferenceError.
    // super(...) (as a function) calls the parent constructor.
    // super.method(...) calls the parent's prototype method (the method on the parent class).
    // In static methods, super refers to the parent class (so super.staticMethod() calls a parent's static).
    // Arrow functions inherit this from the surrounding scope; super resolution follows the method's lexical location on the prototype chain.
    // Mental model: "super" means “go up one level (to the parent class) and do that thing there.”
    // Common mistake: forgetting super() in a subclass constructor — browser/Node throws: "ReferenceError: Must call super constructor in derived class before accessing 'this'".
        console.log("Lion is created");
    }

     // ab ak r chz dekhty method overriding ... method overriding basically man lo me iska eats method change krna chahta hn as below:
    eats(){
        super.eats();// good definition in notes
        console.log("Lion is eating");

    }
    // to ab agr me l.eats krn to ye wala output show ho ga but agr me a.eats() krn to upr wala ye q hua q k mene method override kr dia ... in simple words methods= function
    static info(){
        console.log("static method in lion");
    }
}

let a = new animal("bunny"); // object of class animal is created
console.log(a);

let l = new Lion("Simba");
console.log(l);






// to understand getters and setters
class user {
    constructor(name) {
        this.name = name
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 4) {
            console.log("Name is too short")
            return;
        }
        this._name = value ; 
    }
}

let u = new user("jhon")
console.log(u.name);
