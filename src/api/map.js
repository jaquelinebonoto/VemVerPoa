
export default class PokeApi {
  constructor( url ) {
    this.url = url
  }




async defer  initMap(){ //inicializa o mapa
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
    
