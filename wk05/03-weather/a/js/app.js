//openweathermap
//http://openweathermap.org/current#geo

//pretty Print
//http://jsonprettyprint.com/

$(document).ready(function(){
  var city = "philadelphia";
  var country =  "usa";
  var url = "//api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=dfc12af78c0d3f30f389d0cc934567db"

  $.getJSON(url,function(data){
          console.log(JSON.stringify(data));
  });
});
