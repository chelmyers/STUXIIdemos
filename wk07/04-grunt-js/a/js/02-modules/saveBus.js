function saveBus(){
  var savedBuses = [];
  updateBusList();

  $('.bus-saved-updated').click(function(){

    //When save is clicked, store all checked checkboxs' values in array
    $('.bus-saved-modal input:checked').each(function() {
        savedBuses.push(this.value);
        console.log(savedBuses);
    });

    localStorage.setItem("savedBuses", JSON.stringify(savedBuses));
    updateBusList();
    savedBuses = [];
  });

}

function updateBusList(){
  $('#bus-saved-list').html('<option value="" selected disabled>Select a bus</option>');
  if(localStorage.getItem("savedBuses")){
    var LSSaveBuses = JSON.parse(localStorage.getItem("savedBuses"));

    for(bus of LSSaveBuses){
      var option = '<option value="' + bus + '">'+ bus +'</option>';
      $('#bus-saved-list').append(option);

      var checkboxSelector = 'input[value="'+bus+'"]';
      $(checkboxSelector).attr("checked", "checked");
    }
  }
}
