function getBus(){

  console.log(localStorage.getItem("go-to-bus"));


  $('.go-to-bus').click(function(){
    var route = $('#bus-saved-list').val();

    localStorage.setItem("go-to-bus", route);

    console.log(localStorage.getItem("go-to-bus"));
  });

  if(localStorage.getItem("go-to-bus")){
    $('.bus-number').html(localStorage.getItem("go-to-bus"));

    console.log(localStorage.getItem('savedBuses'));
  }

}
