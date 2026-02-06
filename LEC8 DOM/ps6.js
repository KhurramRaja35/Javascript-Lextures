// Q1 , 2  & 3:-

let age = Number.parseInt(prompt("ENTER YOUR AGE."))
let runagain;
let canDrive = (e)=>{
    return age>=18?true:false
}

while(runagain=true){
    if(age<=0){
        console.error("PLEASE ENTER THE VALID AGE..")
    }
if(canDrive(age)){
    alert("YOU CAN DRIVE.")
}
else{
    alert("YOU CANNOT DRIVE.")
}
confirm("DO YOU WANT TO ENTER TOUR AGE AGAIN?")
}

//Q4:-
let number=Number.parseInt(prompt("ENTER A NUMBER")) ;
if(number>4){
    location.href="https://google.com"
}

//Q5:-
let color=prompt("ENTER ANY COLOR...");
document.body.style.backgroundColor = 'color';

