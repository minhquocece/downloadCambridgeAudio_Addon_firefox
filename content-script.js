/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
  var target = e.target;
  const desiredLink = target.parentElement.dataset.srcMp3;
  const desiredName = target.parentElement.attributes.title.value.split(':')[0]+".mp3";
  console.log(desiredName);
	var a = document.createElement('a');
	a.setAttribute('href',desiredLink);
	a.setAttribute('download', desiredName);
	a.setAttribute('id',desiredLink);
	a.setAttribute('style',"display:none");
	a.innerHTML = "downloadAudio";
	// apend the anchor to the body
	// of course you can append it almost to any other dom element
	document.getElementsByTagName('body')[0].appendChild(a);  
	a.click();
  console.log("content script sending message");
  browser.runtime.sendMessage({"url": desiredName});
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);
