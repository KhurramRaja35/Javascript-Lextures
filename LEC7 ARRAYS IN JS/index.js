//-----------------------------------------array's basic concepts
let arr = [3,0,3,7]

arr[0] = 2
console.log(arr)
console.log(typeof arr)
console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

//PTP:-
//IN JAVA U CAN STORE DIFF TYPES OF ELEMENT IN AN ARRAY NOT LIKE C++ WHERE U WERE BOUND TO ADD THE ELEMENT OF SAME DATA TYPES....

//------------------------------------------SOME IMP ARRAYS METHODS:-

//----------TOSTRING()

console.log(arr.toString()) //converts array to string...

//--------------JOIN()

console.log(arr.join(" and ")) //joins all the array element using a seperator in this case and we used and...

//---------------PUSH() & POP() 

console.log(arr.pop()) // pop--> last element ko display kry ga r phr nikal de ga array se just like we have studied in DSA (STACK)..jb srf ye statement execute kryn gy to wo array ka deleted element return kry ga jis se hmy pta chaly ga k array se 7 delete ho geya  hai
console.log(arr)

console.log(arr.push(9 , "KBR"))// push--> array k last me ak neya element add krta hai .. jb srf ye statement execute kryn gy to wo array ka size return kry ga jis se hmy pta chaly ga k array update ho gai hai .... push studied in DSA (STACK) 
console.log(arr) // TO CHECK THE ARRAY

//---------------------SHIFT() & UNSHIFT() 

console.log(arr.shift()) // removes the first element and returns it
console.log(arr)

console.log(arr.unshift("HARD WORK")) // add the element at the start of array and if only this statement is executed it will returns the new size of array
console.log(arr) 

//PTP:- push and pop adds and remove a elemnt from the end of array while shift and unshift adds and removes from the begining of the array...

//------------DELETE

delete arr[3]; // this is how we delete an element from an array using the index number
console.log(arr) // we can see the empty space of the deleted element
console.log(arr.length) // but despite deleting the length of array is same  as before which means array hold the position of that element which is deleted
console.log(arr[3]) //  it will give undefined cz that element is deleted...

//-----------CONCAT()

 let arr1 = [ "x" , "y"]
 let arr2 = ["z"]
 console.log(arr.concat(arr1 , arr2)) // it joins diffferent arrays... but this function unlike previous functions returns a new array.. it doesnt change the existing array..
 console.log(arr)// look now we got our old one...

 console.log(arr.sort()) // it sorts the array...(do visit notes for sort there is another use of sort written there )
 console.log(arr)

//------------------SPLICE()

let arr3 = [1,2,3,4,5,6]

console.log(arr3.splice(1 , 3))
 // it will delete the numbers from the array ... this statement is saying k start from 1 (1 is not included) and delete the next three elements... it will return us the deleted elements
console.log(arr3)// remaing array is 1 , 5 , 6
// now look the main feature of splice .. u can add more numbers in place of the deleted ones as.. i,m commenting out the previous splice statement...

console.log(arr3.splice(1 , 3 , 111 , 222 , 333)) //now this statement says 1 (position from which the removal will start ) then 3 (no of elements to be removed) then 111,222,333 (numbers to be added in place of those...)...as u execute this statement ull se the removed numbers
console.log(arr3)// but when this is executed you see the changed array with 111,222,333 in place of 2,3,4..


//----------------SLICE()

console.log(arr3.slice(2)) // slices out a piece of array.. slice before index 2(2 is not included) and it will give the result of the remaining item...creates a new array like concat() ....
console.log(arr3)
console.log(arr3.slice(2, 4))//slice execpt the element b/w indec 2(2 is not included) and 4(4 is included)


//---------REVERSE()
console.log(arr3.reverse())


//-----------------------------------------------------LOOPING THROUGH ARRAYS:-

//I THINK WE SHOULD MAKE OTHER FILE FOR THAT OK LETS MOVE TO LOOPS.JS ;)