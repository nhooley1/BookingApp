import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] =  [
    
new Place(
  'p1',
  'Manhattan Skyline',
  'NY Landscape', 
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Above_Gotham.jpg',
  149.99
  ),
  new Place(
    'p2',
    'London Bridge',
    'A Pretty Bridge',
    'https://media.gettyimages.com/photos/london-uk-tower-bridge-at-river-thames-sunset-twilight-scene-picture-id155278925?s=612x612',
    199.99
  ),

new Place(
  'p3',
  'Belgrade Fortress',
  'A Cool Fortress',
  'https://st2.depositphotos.com/2810819/10354/i/950/depositphotos_103541386-stock-photo-zindan-gate-inside-belgrade-fortress.jpg',
  179.99
)
];
    
  get places() {

    return [...this._places];

  }

  getPlace(id: string) {

    return {...this._places.find(
      p => p.id === id
    )
    };
  }

  constructor() { }
}
