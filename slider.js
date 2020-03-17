var slider = document.getElementById("slider_Speed");
var button = document.getElementById("button_Reset");

slider.oninput = function() {
  changeSpeed(this.value);
}

button.click = function() {
  changeSpeed(0.1);
  slider.value = 0.1;
}

function changeSpeed(desiredSpeed) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(tabs[0].id,
    {code: 'document.getElementsByTagName("video")[0].playbackRate = "' + desiredSpeed + '";'});
  });
}
