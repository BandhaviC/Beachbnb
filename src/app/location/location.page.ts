import { Component, OnInit } from '@angular/core';
declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }
// Initialize and add the map
initMap(): void {
  // The location of Uluru
  const csulb = { lat: 33.7838279, lng: -118.1162791 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 10,
      center: csulb,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: csulb,
    map: map,
  });
}
}
