import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    selector: 'map',
    templateUrl: './app.map.html',
    styleUrls: ['./app.map.css']
}) 

export class MapComponent implements OnInit {
	constructor() { }
	ngOnInit() {
    	var map = new google.maps.Map(document.getElementById('map'), {
        	zoom: 7,
        	center: {lat: 4.710988599999999, lng: -74.072092}
    	});
    }
}