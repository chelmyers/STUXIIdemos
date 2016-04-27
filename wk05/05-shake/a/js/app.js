//https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

$(document).ready(function(){

  var myShakeEvent = new Shake({
      threshold: 10 //strength
      //another option in timeout for frequency of event
  });

  myShakeEvent.start();

  window.addEventListener('shake', shakeOccurred, false);

  function shakeOccurred() {
      alert('You shook your phone!');
  }

});
