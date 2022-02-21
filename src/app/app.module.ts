import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CSeccion1Component } from './c-seccion1/c-seccion1.component';
import { Routes, RouterModule, provideRoutes} from '@angular/router';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { PersonajesService } from './servicio/personajes.service';
import { CapitulosServices } from './servicio/capitulos.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FiltroPipe } from './filtro.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'', component: CSeccion1Component},
  {path:'seccion1', component: CSeccion1Component},
  {path:'seccion2', component: CSeccion2Component},
  {path:'**', component:CSeccion1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FooterComponent,
    HeaderComponent,
    CSeccion1Component,
    CSeccion2Component,
    FiltroPipe
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatPaginatorModule,
    TranslateModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [PersonajesService,
  CapitulosServices],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
