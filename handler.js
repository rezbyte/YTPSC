var slider = document.getElementById("theSlider");
var currentLocation = window.location.href

if (currentLocation.contains("youtube.com")) {
  slider.disabled = false;
  slider.oninput = function() {
    changeSpeed(this.value);
  }
} else {
  slider.disabled = true;
}


function changeSpeed(desiredSpeed) {
  document.getElementsByTagName("video")[0].playbackRate = desiredSpeed;
}
