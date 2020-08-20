//this injection is required for the extension to be able to
//share globals vars with lichess
function injectScript(file, node) {
    var element = document.getElementsByTagName(node)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file);
    element.appendChild(script);
}
injectScript( chrome.extension.getURL('/main.js'), 'body');