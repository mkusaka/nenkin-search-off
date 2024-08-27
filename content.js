// Function to inject an external script file into the page
function injectExternalScript(file) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(file);
  script.onload = function () {
    this.remove(); // Remove the script element after it has been executed
  };
  (document.head || document.documentElement).appendChild(script);
}

// Inject inject.js into the page after it is fully loaded
window.addEventListener('load', function () {
  injectExternalScript('inject.js'); // Inject inject.js into the page
});
