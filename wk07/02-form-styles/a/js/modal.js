function busSavedModal(){
  var busModal = $('.bus-saved-modal');

  $('.bus-saved-modal-open').click(function(){
    busModal.show();
  });

  $('.bus-saved-modal-close').click(function(){
    busModal.hide();
  });
}
