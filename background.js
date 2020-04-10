
var urls;
var i = 0;
var comm = false;
var stop = false;
var custom = false;
var customUser = null;

var msg1 = 'Hello';
readLocal();



chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type == "getText") {
    sendResponse({ result: (i + 1).toString() });
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  try {
    if (changeInfo.status == 'complete') {
      console.log(tabId);
      if (tab.url.includes('twitch.tv')) {

        setTimeout(launchContentScript, 3000);
      }
    }
  } catch (e) { }
});


chrome.tabs.onRemoved.addListener(function removed(tabId, removeInfo) {
  try {
    //console.log(tabId);
    i++;
    if (!stop && !custom)
      startFollowing();

  } catch (e) { }
});




chrome.extension.onConnect.addListener(function (port) {
  console.log("Connected .....");
  port.onMessage.addListener(function (message) {

    var msg = message.msg;

    custom = message.custom;
    customUser = message.user;

    if (msg == 'reload') {
      console.log('reloading............');
      i = 0;
      readLocal();
    }
    else if (msg === 'stop') {
      comm = true;
      stop = true;
    }
    else {
      msg1 = msg;
      i = 0;
      comm = false;
      stop = false;
      startFollowing();
    }
  });
});

function startFollowing() {
  try {


    if (stop == true) {
      alert('Execution stopped');
      return;
    }
    else if (urls != null && urls.length != 0 && i < urls.length) {
      setTimeout(launchUrl, 1000);

    }

    else if (custom == true) {
      launchUrl();
    }
    else if (i >= urls.length) {
      alert('All Urls are followed Successfully');
    } else {
      console.log('Nothing found');
      console.log(urls);
      return;
    }
  } catch (e) { }
}

function launchContentScript(tab) {

  chrome.tabs.executeScript(null, {
    file: "follow_text.js"
  }, result => {
    console.log('sending message');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var t;
      if (!custom)
        t = urls.length;
      else
        t = 1;
  
  
      chrome.tabs.sendMessage(tabs[0].id, {
        data: msg1,
        i: i + 1,
        custom:custom,
        total: t
      });
    });
    const lastErr = chrome.runtime.lastError;
    if (lastErr) {
      refreshPage();
      console.log('tab: ' + ' lastError: ' + JSON.stringify(lastErr));
    }
  });

 

}

function startCommunication() {
  chrome.tabs.executeScript(null, {
    file: "communication.js"
  });
}

function launchUrl() {

  if (custom == true) {
    window.open('https://www.twitch.tv/' + customUser);
  } else {
    window.open(urls[i]);
  }
}

function readLocal() {
  try {
    chrome.storage.local.get(['key'], function (result) {

      urls1 = result.key;
      console.log(urls1);

      if (urls1 != null && urls1.length != 0) {
        urls = JSON.parse(urls1);
      } else {
        return;
      }

    });
  } catch (e) { }
}


function refreshPage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
  });
}
