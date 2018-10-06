import Mapa from '../models/mapaLocal.js'


export default class mapApi {
  constructor( url ) {
    this.url = url
  }
}

// Regular map
/*
regular_map(){
  var var_location = new google.maps.LatLng(40.725118, -73.997699);
  
  var var_mapoptions = {
  center: var_location,
  zoom: 14
  };
  
  var var_map = new google.maps.Map(document.getElementById("map-container-7"),
  var_mapoptions);
  
  var var_marker = new google.maps.Marker({
  position: var_location,
  map: var_map,
  title: "New York"
  });
  }

  
  

 /*async defer initMap(){ //inicializa o mapa
  const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMdoHBXjM3TNh6_WKG8So-VSvv913Q9F4&callback=initMap/`
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -30.0277, lng:  -51.2287}, //onde o mapa é startado
      zoom: 6
    });
    directionsDisplay.setMap(map);
    var marker = new google.maps.Marker({ //adicionar marcador
        position: {lat: -30.0277, lng:  -51.2287}, //posicionar marcador
        map: map
    });
  }

  regular_map() {
    var var_location = new google.maps.LatLng(40.725118, -73.997699);
    
    var var_mapoptions = {
    center: var_location,
    zoom: 14
    };
    
    var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);
    
    var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title: "New York"
    });
    
  
  
    // Initialize maps
    google.maps.event.addDomListener(window, 'load', regular_map);
  }
}
}
*/
