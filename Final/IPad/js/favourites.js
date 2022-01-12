$(document).on('pagecontainerbeforehide', 'body', function (event, ui) {
  //do something
  if (ui.nextPage.attr('id') == 'favourite') {
    $('#favourite-content').html('');

    if ($('#favourite1').is(':checked')) {
      $('#favourite-content').append('<p>The National Gallery</p>');
      $("#favourite-content").append("<img class='favimg' src='img/poi1.png'>");
    }

    if ($('#favourite2').is(':checked')) {
      $('#favourite-content').append('<p>The London Dungeon</p>');
      $("#favourite-content").append("<img class='favimg' src='img/london-dungeon.jpg'>");
    }

    if ($('#favourite3').is(':checked')) {
      $('#favourite-content').append('<p>The British Library</p>');
      $("#favourite-content").append("<img class='favimg' src='img/british-library.jpg'>");
    }
    
    if ($('#favourite4').is(':checked')) {
      $('#favourite-content').append('<p>Madame Tussaud</p>');
      $("#favourite-content").append("<img class='favimg' src='img/madame-tussauds.jpg'>");
    }

    if ($('#favourite5').is(':checked')) {
      $('#favourite-content').append('<p>London Eye</p>');
      $("#favourite-content").append("<img class='favimg' src='img/londoneye.jfif'>");
    }

    if ($('#favourite6').is(':checked')) {
      $('#favourite-content').append('<p>London Aquarium</p>');
      $("#favourite-content").append("<img class='favimg' src='img/london-aquarium.jpg'>");
    }

    if ($('#favourite7').is(':checked')) {
      $('#favourite-content').append('<p>Primrose Hill</p>');
      $("#favourite-content").append("<img class='favimg' src='img/Primrose-Hill.png'>");
    }

    if ($('#favourite8').is(':checked')) {
      $('#favourite-content').append('<p>The Regents Garden</p>');
      $("#favourite-content").append("<img class='favimg' src='img/regents-garden.jpg'>");
    }

    if ($('#favourite9').is(':checked')) {
      $('#favourite-content').append('<p>Hyde Park</p>');
      $("#favourite-content").append("<img class='favimg' src='img/hyde-park.jpg'>");
    }

    if ($('#favourite10').is(':checked')) {
      $('#favourite-content').append('<p>Bushy Park</p>');
      $("#favourite-content").append("<img class='favimg' src='img/bushy-park.jpg'>");
    }

    if ($('#favourite11').is(':checked')) {
      $('#favourite-content').append('<p>Grreenwich Park</p>');
      $("#favourite-content").append("<img class='favimg' src='img/greenwich-park.jpg'>");
    }

    if ($('#favourite12').is(':checked')) {
      $('#favourite-content').append('<p>St James Park</p>');
      $("#favourite-content").append("<img class='favimg' src='img/st-james-park.jpg'>");
    }
  }
});

function removeComment() {
  $('#favourite-content').remove();
}
