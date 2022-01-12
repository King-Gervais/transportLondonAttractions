$(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
  //do something
  if (ui.nextPage.attr('id') == 'favourite') {
    $('#favourite-content').html('');

    if ($('#favourite1').is(':checked')) {
      $('#favourite-content').append('<p>The National Gallery</p>');
    }

    if ($('#favourite2').is(':checked')) {
      $('#favourite-content').append('<p>The London Dungeon</p>');
    }

    if ($('#favourite3').is(':checked')) {
      $('#favourite-content').append('<p>The British Library</p>');
    }
    
    if ($('#favourite4').is(':checked')) {
      $('#favourite-content').append('<p>Madame Tussaud</p>');
    }

    if ($('#favourite5').is(':checked')) {
      $('#favourite-content').append('<p>London Eye</p>');
    }

    if ($('#favourite6').is(':checked')) {
      $('#favourite-content').append('<p>London Aquarium</p>');
    }

    if ($('#favourite7').is(':checked')) {
      $('#favourite-content').append('<p>Primrose Hill</p>');
    }

    if ($('#favourite8').is(':checked')) {
      $('#favourite-content').append('<p>The Regents Garden</p>');
    }

    if ($('#favourite9').is(':checked')) {
      $('#favourite-content').append('<p>Hyde Park</p>');
    }

    if ($('#favourite10').is(':checked')) {
      $('#favourite-content').append('<p>Bushy Park</p>');
    }

    if ($('#favourite11').is(':checked')) {
      $('#favourite-content').append('<p>Grreenwich Park</p>');
    }

    if ($('#favourite12').is(':checked')) {
      $('#favourite-content').append('<p>St James Park</p>');
    }
  }
});

function removeComment() {
  $('#favourite-content').remove();
}
