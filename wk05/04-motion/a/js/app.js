//https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

$(document).ready(function(){

  window.addEventListener('devicemotion', function(event) {
    $('.acX').html(event.acceleration.x);
  });

});
