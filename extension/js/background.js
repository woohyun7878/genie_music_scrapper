var contextMenus = {};

contextMenus.generatePlaylistLog = 
    chrome.contextMenus.create(
        {"title":"Scrap Playlist",
        "contexts" : ["all"]
        },
        function (){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);


function contextMenuHandler(info, tab){

    if(info.menuItemId===contextMenus.generatePlaylistLog){
        chrome.tabs.executeScript({
            file: 'js/genieScrap.js'
          });
    }
}