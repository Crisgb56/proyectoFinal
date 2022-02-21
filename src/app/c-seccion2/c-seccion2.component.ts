import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { PersonajesService } from '../servicio/personajes.service';



@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {
   filterPost = '';
   pageSize = 5;
   desde:number=0;
   hasta:number=5;
   personajes: any[]=[];
 

  constructor(private pjService: PersonajesService) {
    this.listarPersonajes();
  
   }
 
  listarPersonajes (){
 
    this.pjService.listarPersonajes().subscribe({
                                              next:(r) => this.personajes = r.results,   
                                              error:(e) => console.log(JSON.stringify(e))
                                              });
                                             
  }
  cambiarPagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  ngOnInit(): void {
  }

}
