$(document).on( 'pagecontainerbeforehide', 'body', function( event, ui)
    {
    //do something
    if ( ui.nextPage.attr('id')== "favourite") {
        $("#favourite-content").html ("");

    if ($( "#favourite1" ).is( ":checked" )) {
        $("#favourite-content").append("<p>The National Gallery</p>");
      }

    if ($( "#favourite2" ).is( ":checked" )) {
        $("#favourite-content").append("<p>Primrose hill</p>");
      }
    }
    });