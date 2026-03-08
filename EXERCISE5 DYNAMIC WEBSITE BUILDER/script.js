console.log("EXERCISE NO 5")



function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewStr;

    if(views<1000000){
         viewStr = (views/1000) + "K";

    }else if(views>1000000){
        viewStr = (views/1000000).toFixed(1) + "M"
    }else{
        viewStr = views;
    }

    let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}"
                    alt="image">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    return html
}

document.getElementsByClassName('container')[0].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #1", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

//AGAIN CALLING THE FUNCTION WE HAVE USED [1] SO IT WILL BE IN OTHER C0NTAINER REMEMBER WHWN WE USE GET ELEMENTS BY CLASS NAME IT RETURN A HTML COLLECTION SO WE HAVE TO TELL K WHICH ELEMENT WE ARE TALKING ABOUT WITH ITS INDEX NO....
document.getElementsByClassName('container')[1].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

//AGAIN:-
document.getElementsByClassName('container')[2].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
//AGAIN
document.getElementsByClassName('container')[3].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
//AGAIN
document.getElementsByClassName('container')[4].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
//AGAIN
document.getElementsByClassName('container')[5].innerHTML+=createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")




// EXPLANATION OF THE WHOLE CODE:-
/*Certainly! Let's break down how the createCard function works and why it returns HTML as a string.

1. Function Breakdown:
The createCard function is designed to generate a block of HTML that represents a "card" with specific content. Here’s a step-by-step explanation:

javascript

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    
    YOUR CODE....
    .
    .
    .

    return html;  // Return the generated HTML
}

2. How the Function Returns HTML as a String:

Template Literals:
The function uses a feature of JavaScript called template literals (enclosed in backticks `). Template literals allow you to include variables directly within a string using ${variable}.
This makes it easy to construct a block of HTML with dynamic content (like title, cName, etc.) embedded in it.
Returning the HTML:

The html variable holds the entire HTML structure for a card as a string.
When the function createCard is called, it returns this string. The returned string represents the HTML structure of the card but does not immediately add it to the webpage—it’s just a string at this point.

3. Connecting the HTML to the DOM:
Inserting the HTML:
The document.getElementsByClassName('card-container')[0].innerHTML += createCard(...) line is where the connection happens.

Here’s what happens:
The createCard function is called, and it returns an HTML string.
This string is then added (+=) to the innerHTML of the card-container element in the DOM.
The browser interprets this string as HTML and renders it, turning the string into visual elements (like images, text, etc.) on the page.

4. Why Not Include the Container in the Function?

Separation of Concerns:
The createCard function is focused only on generating the HTML for a single card. This separation makes the function reusable—you can use it to create many cards and insert them into any container you like.

If you included the container logic within the createCard function, it would become less flexible, as it would be tied to a specific container and could not be reused in different contexts.

Reusability and Flexibility:
By keeping the createCard function independent of the container, you can call this function multiple times and append the results to different parts of the page as needed.

5. What Happens When It Works:

> Execution Flow:

Function Call: You call the function with specific arguments (like title, channel name, etc.).
HTML Generation: The function returns a string of HTML with the provided data inserted into it.
DOM Insertion: The string is inserted into the innerHTML of the container, and the browser renders it as visual content on the page.
This approach allows you to dynamically generate and insert content into your webpage with minimal hard-coding, making your code more maintainable and flexible.*/ 
