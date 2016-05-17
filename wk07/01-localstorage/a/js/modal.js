function busSavedModal(){
  var busModal = $('.bus-saved-modal');

  //show modal when .bus-saved-modal-open is clicked
  $('.bus-saved-modal-open').click(function(){
    busModal.show();
  });

  //hide modal when .bus-saved-modal-close
  $('.bus-saved-modal-close').click(function(){
    busModal.hide();
  });
}
