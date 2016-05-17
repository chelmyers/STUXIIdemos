function saveBus(){

  var savedBuses = [];
  updateBusList();

  //Click on saved buses in modal
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
  //Adds "Select a bus to drop down"
  $('#bus-saved-list').html('<option value="" selected disabled>Select a bus</option>');

  //Checks it localStorage has savedBuses
  if(localStorage.getItem("savedBuses")){
    //Grab value form localStorage
    var LSSaveBuses = JSON.parse(localStorage.getItem("savedBuses"));

    //Loop through array
    // for (value of array)
    for(bus of LSSaveBuses){
      var option = '<option value="' + bus + '">'+ bus +'</option>';
      //console.log(option);

      $('#bus-saved-list').append(option);

      var checkboxSelector = 'input[value="'+bus+'"]';
      $(checkboxSelector).attr("checked", "checked");
    }
  }


}
