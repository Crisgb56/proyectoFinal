import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { CapitulosServices } from '../servicio/capitulos.service';

@Component({
  selector: 'app-c-seccion1',
  templateUrl: './c-seccion1.component.html',
  styleUrls: ['./c-seccion1.component.css']
})
export class CSeccion1Component implements OnInit {
  capitulos:any[]=[];
  pageSize = 5;
   desde:number=0;
   hasta:number=5;
  constructor(private route:ActivatedRoute, private router: Router, private cpService: CapitulosServices) {
    this.listarCapitulos();

   }
   listarCapitulos (){
    this.cpService.listarCapitulos().subscribe({
                                              next:(r) => this.capitulos = r.results,
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
