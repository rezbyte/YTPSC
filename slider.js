var slider = document.getElementById("theSlider");

  slider.oninput = function() {
    changeSpeed(this.value);
  }

  function changeSpeed(desiredSpeed) {
    document.getElementsByTagName("video")[0].playbackRate = desiredSpeed;
  }
