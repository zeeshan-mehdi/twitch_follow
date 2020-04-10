
console.log('communication loaded');

sendMessage();
function sendMessage() {
    var textArea = document.getElementsByClassName('tw-block tw-border-radius-medium tw-font-size-6 tw-full-width tw-textarea tw-textarea--no-resize')[0];
     textArea.autofocus = true;
     textArea.parentElement.autofocus = true;

     textArea.value = 'Hello';

     var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    textArea.dispatchEvent(event);
    
    console.log(textArea.autofocus);

    var elem = document.querySelectorAll('[data-a-target="chat-send-button"]');

    for(let i =0;i<elem.length;i++){
        console.log(elem[i].innerText);

        console.log(elem[i].click());

        for(let j=0;j<elem[i].children.length;j++){
            elem[i].children[j].click();
        }
    }
    

    setInterval(() => {
        window.close();
    }, 3000);

}
