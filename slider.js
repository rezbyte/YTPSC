/************************
 Name: slider.js
 Project: Youtube Playback Speed Controller
 Purpose: Handle slider movement, and reset button
 Author: rezbyte
 Written: 18/03/2020
 Last Changed: 18/03/2020
 ************************/

var slider = document.getElementById("slider_Speed");
var button = document.getElementsByName("button_Reset")[0];

slider.oninput = function() {
  changeSpeed(this.value);
}

button.onclick = function() {
  reset();
}

function changeSpeed(desiredSpeed) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(tabs[0].id,
    {code: 'document.getElementsByTagName("video")[0].playbackRate = "' + desiredSpeed + '";'});
  });
}

function reset() {
  changeSpeed(1);
  slider.value = 1;
}
