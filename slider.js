var slider = document.getElementById("theSlider");
var currentLocation = window.location.href.toString();

  slider.oninput = function() {
    changeSpeed(this.value);
  }

  function changeSpeed(desiredSpeed) {
    document.getElementsByTagName("video")[0].playbackRate = desiredSpeed;
  }
