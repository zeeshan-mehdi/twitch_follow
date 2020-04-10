var links = document.getElementsByClassName('tw-interactive tw-link tw-link--button tw-link--hover-underline-none tw-link--inherit');

links = document.querySelectorAll('[data-a-target="preview-card-title-link"]');
console.log(links);

var alreadyFollowedLinks = [];

alreadyFollowed();


var strLinks = [];
for(var i=0;i<links.length;i++){
    var link = links[i];
        if(!link.href.includes('videos')&&!link.href.includes('directory')&&notInAlready(link.href)){
            strLinks.push(link.href);
        }
}

chrome.storage.local.set({'key':JSON.stringify(strLinks)},function(){
    console.log(strLinks.length);
    console.log('values saved');
});



function alreadyFollowed(){
    var followed = document.getElementsByClassName('side-nav-card tw-align-items-center tw-flex tw-flex-nowrap tw-interactive tw-link tw-pd-x-1 tw-pd-y-05');

    for(let i =0;i<followed.length;i++){
        let link = followed[i];

        alreadyFollowedLinks.push(link.href);

        console.log(link.href);
    }
}

function notInAlready(lnk){
    for(let i =0;i<alreadyFollowedLinks.length;i++){
        let link = alreadyFollowedLinks[i];

        if(lnk===link)
            return false;
    }

    return true;
}

// function letsFollow(url){
//     var button = document.getElementsByClassName('tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--primary tw-full-width tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative');
//     for(let i=0;i<button.length;i++){
//         if(button[i].children[0].innerText=='Follow');
//                 button[i].click();
//     }
// }

