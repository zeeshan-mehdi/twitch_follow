// //     var elem = document.querySelectorAll('[data-a-target="follow-button"]');

// //     console.log(elem);
// //     if(elem.length!=0){
// //     for(let i =0;i<elem.length;i++){
// //         console.log(elem[i].innerText);

// //         if(elem[i].innerText=='Follow'){
// //             elem[i].click();
// //             window.close();
// //             return;
// //         }
           
// //         // for(let j=0;j<elem[i].children.length;j++){
// //         //     elem[i].children[j].click();
// //         // }
// //     }
// // }else{


//    //letsFollow();
// //}

//     // try{
//     // //window.open(url);
//     // var button = document.getElementsByClassName('tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--primary tw-full-width tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative');
//     // for(let i=0;i<button.length;i++){
//     //     if(button[i].children[0].innerText=='Follow'){
//     //             button[i].click();
//     //             window.close();
//     //     }else{
//     //         window.close();
//     //         return;
//     //     }

//     //     // if(button[i].value=='Follow'){
//     //     //     button[i].click();
//     //     // }
//     // }
//     // letsFollow();



//     //  chrome.tabs.executeScript(null,
// //   {file:  igactionfile + '.js'});




// var baseUrl = "https://www.instagram.com/explore/tags/";
// var home = "https://www.instagram.com/";

// var urls = [];

// var i = 0;
// var interval=60000;

// var complete;

// var isFollow;

// var noOfFollows=Number.MAX_SAFE_INTEGER;

// var followDelay,unfollowDelay;

// var stop = false;

// function followByTag(flag) {
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, function (tabs) {
//     // query the active tab, which will be only one tab
//     //and inject the script in it

//     // var tags = document.getElementById("tags").value;

//     // var tagsArr = tags.split(',');

//     // urls = [];
    

//     // for (let i = 0; i < tagsArr.length; i++) {

//     //   if (tagsArr[i] === '') {
//     //     urls.push(home);
//     //   } else {
//     //     urls.push(baseUrl + tagsArr[i] + '/');
//     //   }


//     // }

//     // complete = document.getElementById('complete');

//     // if(isFollow)
//     //   complete.innerHTML = 'Follow In Progress ...';
//     // else
//     //   complete.innerHTML = 'Unfollow In Progress ...';
//     // //alert('got tags');


//     // localStorage.setItem('key',JSON.stringify(urls));

//     // chrome.tabs.getSelected({}, function(tab) {
//     //   chrome.tabs.update(tab.id, {url: 'http://www.instagram.com/explore/tags'});
//     // });

//     // window.open('www.instagram.com/explore/tags','_self');

//     //  chrome.storage.sync.set({'key':urls},function(){
//     //   var activeTab = tabs[0];
//     //   chrome.tabs.sendMessage(activeTab.id, {"message": urls});
//     // });


//     // interval = setInterval(function(){sendData();},600000);

//     sendData(flag);

//     //addcountwidget();





//     // for(let i =0;i<urls.length;i++){
//     //     chrome.storage.sync.set({'key':urls[i]}, function () {

//     //     });
//     // }





//     // chrome.storage.sync.set({'key':urls}, function () {
//     //    //alert("Stored");
//     // });
//     //alert(urls);

//     //localStorage.setItem("names", JSON.stringify(urls));


//     //  chrome.tabs.executeScript(tabs[0].id, {
//     //     "file": "content_script.js"
//     // },() => chrome.runtime.lastError);

//     // chrome.tabs.onUpdated.addListener(function (id, info, tab) {
//     //     if (tab.status !== "complete") {
//     //         return;
//     //     }
//     //     chrome.tabs.executeScript(tabs[0].id, {
//     //         "file": "content_script.js"
//     //     },() => chrome.runtime.lastError);
//     // });

//   });





// }

// // chrome.alarms.onAlarm.addListener(function( alarm ) {
// //     console.log("Got an alarm!", alarm);



// //     if(i<urls.length){
// //         chrome.storage.sync.set({'key':urls[i]}, function () {
// //             i++;     
// //             alert('written '+i);
// //         });
// //     }


// //   });


// function sendData(flag) {

//   // if (i === urls.length) {
//   //   i--;
//   // chrome.tabs.executeScript(null, {file: "unfollow.js"});

//   //   if(isFollow){
//   //     complete.innerHTML = 'Follow Completed';
//   //     document.getElementById('unfollowId').click();

//   //   }else{
//   //     complete.innerHTML = 'Unfollow Completed';
//   //     document.getElementById('followId').click();
//   //   }
    
//   //   return;
//   // }
//   execute(flag);


// }

// function execute(flag) {
//   if(stop){
//     complete.innerHTML = 'stopped';
//     return;
//   }

//   var temp = new Array(2);

//   temp[0]=urls[i];

//   temp[1]=noOfFollows;

//   chrome.storage.sync.set({
//     'key': temp
//   }, function () {

//          //data written
          
//           chrome.tabs.executeScript(null, {
//             file: "follow.js"
//           });
       
//           // chrome.tabs.executeScript(null, {
//           //   file: "unfollow.js"
//           // });
          
//         setTimeout(function(){
//           sendData(flag);
//         }, interval);
    
//   });

  
  
// }


// "content_scripts":[

	// 	{
	// 		"matches":[
	// 			"https://www.twitch.tv/*"
	// 		],
	// 		"js":["testing.js"]
	// 	}
	// ],