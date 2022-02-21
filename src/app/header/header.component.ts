import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Rick & Morty"
  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }
  ngOnInit(): void {
  }
  changeLanguageToSpanish():void{
    this.translate.use('es');
    console.log('Idioma español '+ this.translate.instant('header.home'));
  }
  changeLanguageToEnglish():void{
    this.translate.use('en');
    console.log('Idioma ingles '+ this.translate.instant('header.home'));
  }

}
