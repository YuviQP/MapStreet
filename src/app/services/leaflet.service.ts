import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon,Marker } from 'leaflet';
import { Injectable,Input,OnInit } from '@angular/core';

export const DEFAULT_LAT = 48.20807;
export const DEFAULT_LON =  16.37320;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  constructor() { }
}
