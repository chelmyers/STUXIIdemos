//https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent

$(document).ready(function(){

  if (window.DeviceOrientationEvent) {
    window.addEventListener('devicemotion', function(event) {
      var acX = event.acceleration.x;
      var acY = event.acceleration.y;
      var acZ = event.acceleration.z;

      var direction = event.rotationRate.alpha;
      var rotFB = event.rotationRate.beta;
      var rotLR = event.rotationRate.gamma;


    });
  }

});
