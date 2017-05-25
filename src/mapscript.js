var marker;
var map;
function initMap(){
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: {lat: 41.8708, lng: -87.6505},
    zoom: 16});
  marker = new google.maps.Marker({ //Line 1
    position: {lat: 41.8708, lng: -87.6505}, //Line2: Location to be highlighted
    map: map,//Line 3: Reference to map object
    title: 'Purdue University' //Line 4: Title to be given
  })
}
