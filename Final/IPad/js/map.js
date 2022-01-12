// Initialize and add the map
function initMap() {
    // The location of Uluru
    //51.50900577138144, -0.1283472815019485
    const uluru = { lat: 51.50900577138144, lng: -0.1283472815019485 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: "University of Westminster"
    });
  }

  function initMap2() {
    // The location of Uluru
    //51.50900577138144, -0.1283472815019485
    const uluru = { lat: 51.50900577138144, lng: -0.1283472815019485 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: "University of Westminster"
    });
  }
  

