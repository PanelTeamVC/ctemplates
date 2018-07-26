import { Injectable } from '@angular/core';
import { Http} from '@angular/http';



@Injectable()
export class DatawebService {

 dataw:any = {};
 cargada:boolean  = false;
 cargada_menu:boolean  = false;
 menutop:any[] = [];

  constructor( public http:Http) { 
   this.carga_data();
   //this.carga_menu_top();
  }

  public carga_data(){
    this.http.get("assets/data/data.web.json")
    .subscribe( data => {
      //console.log(data.json());
      this.cargada = true;
      this.dataw = data.json();
    })
  }

  // public carga_menu_top(){
  //   this.http.get("https://dataweb-vc.firebaseio.com/marcas")
  //   .subscribe( data => {
  //     console.log(data.json());
  //     this.cargada_menu = true;
  //     this.menutop = data.json();
  //   })
  // }

}
