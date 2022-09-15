import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon,Marker } from 'leaflet';
import { Component, OnInit,Inject,Input } from '@angular/core';

export const DEFAULT_LAT = -9.189967;
export const DEFAULT_LON =  -75.015152;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-ejemplo-leaflet',
  templateUrl: './ejemplo-leaflet.component.html',
  styleUrls: ['./ejemplo-leaflet.component.css']
})
export class EjemploLeafletComponent implements OnInit {
  //private map:any;
  private map: any;
  private y:any=[];
  private centroid: L.LatLngExpression = [-13.52264,-71.96734]; //

  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;

  listaVisitas:any[]=[{ "latitud": -13.52507,"longitud": -71.930890},
               { "latitud": -13.5307703,"longitud": -71.9408312},
               { "latitud": -13.530774,"longitud": -71.9408339},
               { "latitud": -13.58441,"longitud": -71.91867},
               { "latitud": -13.5307587,"longitud": -71.9408254},
               {"latitud": -13.53182,"longitud": -71.93626},
              {  "latitud": -13.5307528,"longitud": -71.940821},
               {"latitud":-13.52591,"longitud":-71.93600}]
  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    //configuración del mapa
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 6
    });

    //iconos personalizados
    var iconDefault = L.icon({
      iconUrl:'../../assets/icon.png',
      iconSize: [20, 20],
    });

    L.Marker.prototype.options.icon = iconDefault;
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
  this.listaVisitas.map((aux)=>{
  L.marker([aux.latitud,aux.longitud]).bindPopup(aux.latitud).addTo(this.map);
  })


  tiles.addTo(this.map);

  L.Routing.control({
    router: L.Routing.osrmv1({
      serviceUrl: `https://router.project-osrm.org/route/v1/`
    }),
    showAlternatives: true,
    fitSelectedRoutes: false,
    show: false,
    routeWhileDragging: true,
    waypoints: [

    ]
  }).addTo(this.map);
    tiles.addTo(this.map);
  }
}


