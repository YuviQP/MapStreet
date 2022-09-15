
import { Injectable,Input,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
    /**Nombre de la bd */
    bd_Couch:string= "visitas_medicas";
     /**ACCESO A BASE DE DATOS COUCHDB */
    base_urlCouch:string = "http://192.168.5.3:5984";
    token:string="eyJraWQiOiJmb28iLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MzMxMDIxNX0.FLWMevT9S0QqWcdFds5j4XDmQ3bjHXcYIngSxc4VtPA";
  constructor(private http:HttpClient) { }

  mostrarVisitas():Observable <any>{
    return this.http.post <any []> (`http://192.168.5.3:5984/visitas_medicas/_design/visita_domiciliaria/_view/visita_domiciliaria_por_profesional_v1`, {
        "keys": ["vp72753957"]
      },{headers:{'Authorization':`Bearer ${this.token}`}}
  );
  }

}
