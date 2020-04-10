window.onload  = function(){
    console.log('testing loaded');


clickSetting();


setTimeout(() => {
    try{
    var showRulesButton = document.querySelector('[data-a-target="show-chat-rules-button"]');

    if(showRulesButton!=null)
        showRulesButton.click();
    else{
        console.log('null');
        var close = document.querySelector('[data-test-selector="chat-settings-close-button-selector"]');
        if(close!=null){
            close.click();
        }
    }    
    }catch(e){
        console.log(e);
    }
}, 3000);


setTimeout(() => {
    try{
    var floatingButton = document.querySelectorAll('[data-test-selector="chat-rules-ok-button"]');
            if (floatingButton != null) {
                for(let i=0;i<floatingButton.length;i++){
                    floatingButton[i].click();
                }
            }
        }catch(e){
            console.log(e);
        }
}, 3000);

function clickSetting(){
    try{
        var settings = document.querySelector('[data-a-target="chat-settings"]');

        if(settings == null){
            clickSetting();
            console.log('setting null');
        }else
        settings.click();
    }catch(e){
        console.log(e);
    }
}



}