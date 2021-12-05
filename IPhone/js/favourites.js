$(document).on( 'pagecontainerbeforehide', 'body', function( event, ui){
    //do something
    if ( ui.nextPage.attr('id')== "favourites") {
        $("#favourite-content").html ("");
         if ($( "#favourite1" ).is( ":checked" )) {
             $("#favourite-content").append("<p>item1 details</p>");
         }
          if ($( "#favourite2" ).is( ":checked" )) {
             $("#favourite-content").append("<p>item2 details</p>");
         }
        
       }
    
    });