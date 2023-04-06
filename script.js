const buttons = document.getElementsByTagName("button");
let accepts = [];
for(let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText == "Accept") {
        accepts.push(buttons[i]);
    }
}

const acceptAll = async () => {
    for(let i = 0; i < accepts.length; i++){
        accepts[i].click()
        await new Promise(resolve => setTimeout(resolve, 142))
    }
}
acceptAll();