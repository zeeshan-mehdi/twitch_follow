console.log('follow_text loaded');
var msg = 'Hey [] Come check out me stream';
var i =1;
var total = 30;
var currentUser = '';
try {
    chrome.extension.onMessage.addListener(handleMessage);
    function handleMessage(request) {
        console.log('message recieved inside content.js ');
        console.log(request.data);
        msg = request.data;
        i = request.i;

        total = request.total;
        letsFollow();
        attachProgress();

    }
} catch (e) {
    console.log(e);
}


$( document ).ready(function() {
    
});




function letsFollow() {
    try {
        var button = document.getElementsByClassName('tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--primary tw-full-width tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative');
           for (let i = 0; i < button.length; i++) {
            if (button[i].children[0].innerText == 'Follow') {
                console.log('in');
                button[i].click();
                setTimeout(() => {
                    sendMessage();
                }, 3000);

            } else {
                sendMessage();
                return;
            }
        }

    } catch (e) {
        sendMessage();
        console.log(e);
    }
}

function sendMessage() {
    try {

        // if(msg ==='hello guyz'){
        //     setTimeout(() => {
        //         sendMessage();
        //     }, 1000);
        //     return ;
        // }
        currentUser = document.getElementsByClassName('tw-c-text-inherit tw-font-size-5 tw-white-space-nowrap')[0];
     
        currentUser = currentUser.textContent;
        var textArea = document.getElementsByClassName('tw-block tw-border-radius-medium tw-font-size-6 tw-full-width tw-textarea tw-textarea--no-resize')[0];
        textArea.autofocus = true;
        textArea.parentElement.autofocus = true;

        try {
            console.log(textArea);

            var floatingButton = document.querySelectorAll('[data-test-selector="chat-rules-ok-button"]');
            if (floatingButton != null) {
                for (let i = 0; i < floatingButton.length; i++) {
                    floatingButton[i].click();
                }
            }
        } catch (e) {

        }



        

        msg = msg.replace('[]',currentUser);
        textArea.value = msg;

        dispatchEvents(textArea);



        console.log(textArea.autofocus);

        var elem = document.querySelectorAll('[data-a-target="chat-send-button"]');

        for (let i = 0; i < elem.length; i++) {
            console.log(elem[i].innerText);

            console.log(elem[i].click());

            for (let j = 0; j < elem[i].children.length; j++) {
                elem[i].children[j].click();
            }
        }


        setTimeout(() => {
            window.close();
        }, 3000);
    } catch (e) {
        console.log(e);
    }

}


function dispatchEvents(textArea) {
    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    textArea.dispatchEvent(event);
}


function readLocal() {
    try {
        chrome.extension.onMessage.addListener(handleMessage);
        function handleMessage(request) {
            console.log('message recieved inside content.js ');
            console.log(request.data);
            msg = request.data;


        }
    } catch (e) {
        console.log(e);
    }
}



function attachProgress(){
    var adDiv = document.createElement('div'); 
    adDiv.id = "idadv"; 

    var val = "Following "+i.toString()+'/'+total.toString();
    var text = document.createTextNode(val);
    var h = document.createElement("P");
    h.appendChild(text);
    h.id ="progressB";

    
    $(h).css('color', '#FFFFFF');
    //$(h).css('margin', '50%');
    adDiv.style.backgroundColor = "#F1B70F";
    //adDiv.style.float = "left";
    adDiv.style.zIndex = "9999";
    adDiv.style.position= "absolute";
    adDiv.style.bottom = "10px";
    adDiv.style.right = "50%";
    adDiv.style.textAlign =  "center";
    adDiv.style.padding ="10px";

    adDiv.appendChild(h);

    

    //adDiv.style = "top:100;right:100;position:absolute;z-index: 9999;color:blue;width:100px;height:100px";


    document.body.appendChild(adDiv);
}