const contextMenuItem = { id: "preview", title: "Knowledge Classic", contexts: ["link"], documentUrlPatterns: ["https://supportforce.lightning.force.com/*"] };

//click handler
function onClickHandler(e) {
    let n = replaceUrl(getKnowledgeId(e));
    chrome.windows.create({ url: n });
}

//return a knowledge/route id from a given Salesforce Lightning URL 
function getKnowledgeId(string) {
    let firstSlash = string.lastIndexOf("/", string.lastIndexOf("/") - 1)
    let lastSlash =  string.lastIndexOf("/") - 1);
    return string.slice(firstSlash, lastSlash);
}

//replace the lightning URL to classic  
function replaceUrl(e) {
    return `https://supportforce.my.salesforce.com/${e}?srPos=0&srKp=kaB&lang=en_US`;
}

chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create(contextMenuItem);
}),
    
//event listener for Chrome, if a link specific to Salesforce is right-clicked then run the click handler
chrome.contextMenus.onClicked.addListener(function (e) {
    e.linkUrl.includes("https://supportforce.lightning.force.com/lightning/r/") && onClickHandler(e.linkUrl);
});
