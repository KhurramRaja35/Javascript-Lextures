// FIRST SOLUTION:-
//BUISNESS NAME GENERATOR


//Javascript challenge 2
/*Math.random will generate the random no that is equal to 0
or greater than 0 but less than 1 (Inclusive(0) and exclusive(1))
Math.floor()->This function rounds down a number to the nearest integer.
->Math.floor(Math.random() *3) will generate the value that is between
[0,1,2] (inclusive (0) and exclusive(3))
*/

//Function 1:Adjective()
function Adjective()
{
    let a="Crazy";
    let b="Amazing";
    let c="Fire";
    let ran = Math.floor(Math.random()* 3);
    {
    
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
            defualt:
            console.log('Sorry, No more value exists');
        }
    }
}

//function 2->ShopName()
function ShopNames()
{
    let a="Engine";
    let b="Foods";
    let c="Garments";
    let ran =Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
            defualt:
            console.log('Sorry, No more value exists');
        }
    }
}

//function 3->AnotherWords()
function AnotherWord()
{
    let a="Bros";
    let b="Limited";
    let c="hub";
    let ran = Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
            defualt:
            console.log('Sorry, No more value exists');
        }
    }
}

//Combine all the functions togethers
console.log("The new business name is :" + Adjective()+ " "+
ShopNames()+ " " +AnotherWord() );