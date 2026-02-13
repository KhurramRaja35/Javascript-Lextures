class complex {
    constructor(real , imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num){
        this.real = this.real+num.real;
        this.imaginary =  this.imaginary + num.imaginary;
    }
}

let c1 = new complex(2 , 4)
let c2 = new complex(2 , 4)
c1.add(c2)
console.log(` ${c1.real} + ${c1.imaginary}i`)

class Human {
    constructor(specie) {
        this.specie = specie
    }
    breaths(){
        console.log("A human breaths fresh air");
    }
    eats(){
        console.log("A human eats veges and flesh");
    }
    sleeps(){
        console.log("A human sleeps");
    }
}

class Student extends Human {
    constructor(specie) {
        super()
        this.specie = specie
    }
    breaths(){
        console.log("A STUDENTS BREATHE FASTER :)");
    }
    eats(){
        super.eats()
        console.log(" A STUDENT EATS LESSER");
    }
    study(){
        console.log(" A STUDENT STUDIES ALL THE TIME");
        
    }
}

let h = new Human("Homo-Sapian")
console.log(h)

let s = new Student("Chutia")
console.log(s)

console.log(s instanceof Human)