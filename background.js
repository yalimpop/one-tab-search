
chrome.runtime.onInstalled.addListener(function() {
  chrome.webRequest.onBeforeRequest.addListener(
         function(details) {
           console.log(details.url);

        
         },
         {urls: ["*://www.google.com/*"]},
         ["requestBody"]);
  });
