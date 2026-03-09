const randomDelay = ()=>{
    return new Promise((resolve, reject) => {
        timeout = 1 +  Math.random()*6
        console.log(timeout)
        setTimeout(() => {
            resolve("resolving")
        }, timeout*1000);
    })
}

const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item ;
    document.body.append(div)
}

let array = [
    "Initializing Hacking",
     "Reading your files", 
     "Pasword files detected",
     "Sending all pasword files and information to server",
     "cleaning up",
     "Succesfully  hacked"
    ]

const processArray = async (array) => {
    let t = setInterval(() => {
        let last = document.body.lastElementChild
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        } else {
            last.innerHTML = last.innerHTML + '.';
        }
    }, 500);



        for (const item of array) {
            await addItem(item);
        }

        await randomDelay()
        clearInterval(t);
    };
    
 processArray(array);
