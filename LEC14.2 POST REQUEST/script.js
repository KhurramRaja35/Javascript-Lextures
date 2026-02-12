
const createTodo = async () => {
    
let options = {
    method : "POST",
    headers : {
        'Content-type': 'application/json'
    },
    body : JSON.stringify({ // json.stringify  ak js object ko string me convert kr deta hai aur json.parse ak valid js string ko js object me convert kr deta hai...
        title: 'kbr',
        body: 'bhai',
        userId: 103,
      })
}

let p = fetch('https://jsonplaceholder.typicode.com/posts', options)
 let response = (await p).json()
 return response

}

const mainFunc = async ()=>{
    let todo = await createTodo()
    console.log(todo)
}

mainFunc()


// let options = {
//     method : "POST",
//     headers : {
//         'Content-type': 'application/json'
//     },
//     body : JSON.stringify({ // json.stringify  ak js object ko string me convert kr deta hai aur json.parse ak valid js string ko js object me convert kr deta hai...
//         title: 'kbr',
//         body: 'bhai',
//         userId: 103,
//       })
// }
//fetch('https://jsonplaceholder.typicode.com/posts', options)
    // .then((response) => response.json())
    // .then((json) => console.log(json));