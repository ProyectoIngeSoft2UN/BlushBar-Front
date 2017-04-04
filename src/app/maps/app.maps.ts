import { Component } from '@angular/core';

@Component({
selector: 'map',
templateUrl: './app.maps.html',
})
export class mapsComponent  {
    var map;
    //init the google map in the webpage
    function initMap() {
        //create the google map
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.85081542, lng: -87.69123528 },
            zoom: 12
        });
        var infowindow = new google.maps.InfoWindow({
            content: ""
        });
    }

}
