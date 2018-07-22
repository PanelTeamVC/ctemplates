import { Injectable } from '@angular/core';
import { Http} from '@angular/http';



@Injectable()
export class DatawebService {

 dataw:any = {};
 cargada:boolean  = false;

  constructor( public http:Http) { 
    this.http.get("assets/data/data.web.json")
              .subscribe( data => {
                console.log(data.json());
                this.cargada = true;
                this.dataw = data.json();
              })
  }

}
