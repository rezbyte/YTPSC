var slider = document.getElementById("theSlider");

  slider.oninput = function() {
    changeSpeed(this.value);
  }

  function changeSpeed(desiredSpeed) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = "' + desiredSpeed + '";'});
    });
  }
