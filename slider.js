var slider = document.getElementById("slider_Speed");
var button = document.getElementsByName("button_Reset")[0];

slider.oninput = function() {
  changeSpeed(this.value);
}

button.onclick = function() {
  changeSpeed(1);
  slider.value = 1;
}

function changeSpeed(desiredSpeed) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(tabs[0].id,
    {code: 'document.getElementsByTagName("video")[0].playbackRate = "' + desiredSpeed + '";'});
  });
}
