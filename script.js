const buttons = document.getElementsByTagName("button");
let submits = [];
for(let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText == "Accept") {
        submits.push(buttons[i]);
    }
}

const acceptAll = async () => {
    for(let i = 0; i < submits.length; i++){
        console.log(`button ${i} : ${submits[i]}`);
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}
console.log("SUBMITS : ", submits);
acceptAll();