import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor() { }

  ngOnInit() {
  }
  styles: any[] = [ {elementType: 'geometry', stylers: [{color: '#242f3e'}]}, {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]}, {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]}, ]

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
}



interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
