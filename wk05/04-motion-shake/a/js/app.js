//https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

$(document).ready(function(){

  if (window.DeviceOrientationEvent) {
    window.addEventListener('devicemotion', function(event) {
      $('.acX').html(event.acceleration.x);
      $('.acY').html(event.acceleration.y);

      $('.alpha').html(event.rotationRate.alpha);
      $('.beta').html(event.rotationRate.beta);


    });
  }

});
