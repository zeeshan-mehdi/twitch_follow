
var links = document.getElementsByClassName('links')[0];

var msg = document.getElementsByClassName('input')[0];

var customMsg = document.getElementsByClassName('customMsg')[0];
var customSend = document.getElementById('sendCustom');
var customUser = document.getElementsByClassName('customUser')[0];

var user;

window.onload = function(){


  customSend.addEventListener('click',function(){
    var cMsg = customMsg.value;
    user = customUser.value;

    if(cMsg!=null && cMsg.length>0&&user!=null && user.length>0){
      status.innerText = 'status : sending custom message ';
      writeMessage(cMsg);
      sendMessage(cMsg,true);
    }else{
      status.innerText = 'status : Custom Message & User Fields are Required ';
    }
  });

  var status = document.getElementById('status');
  document.getElementById('getLinks').addEventListener('click',function () {

    var query = { active: true, currentWindow: true };

    chrome.tabs.query(query, function(tabs){
        //if(tabs[0].url!=='https://www.twitch.tv/directory/all'){
            // chrome.tabs.update( {url:'https://www.twitch.tv/directory/all'});
            // setInterval(() => {
            //   chrome.tabs.executeScript(null, {
            //     file: "links.js"
            //   },result=>{
            //     loadLocal();
            //     sendMessage('reload',false);
            //   });
            // }, 3000);

            //status.innerText = 'status : Make Sure that you are on browse Live Page Before Pressing this button ';

        //}else{
          chrome.tabs.executeScript(null, {
            file: "links.js"
          },result=>{
            loadLocal();
            sendMessage('reload',false);
          });
        //}

    });

  
  });
  
  document.getElementById('follow').addEventListener('click',function(){
      msg = msg.value;
      if(msg!=null &&msg.length>0){
        status.innerText = 'status : initiating the follow process ';
        writeMessage(msg);
        sendMessage(msg,false);
      }else{
        status.innerText = 'status : Custom Message & User Fields are Required ';
      }
  });
  
  document.getElementById('stop').addEventListener('click',function(){
    sendMessage('stop',false);
    status.innerText = 'status : stopped';
  });
  

  
  function sendMessage(msg,custom){
      var port = chrome.extension.connect({
        name: msg
    });
    port.postMessage({msg:msg,custom:custom,user:user});
  }
  
}


function writeMessage(msg){
  chrome.storage.local.set({'msg':msg},function(){
    console.log('message written');
});
}

function loadLocal(){
  try{
    chrome.storage.local.get(['key'], function (result) {

      urls1 = result.key;
      console.log(urls1);

      urls1 = JSON.parse(urls1);

      if(urls1!=null && urls1.length>0)
        links.innerText = 'Links Collected '+ urls1.length.toString();
    }
  );
}catch(e){}
}

