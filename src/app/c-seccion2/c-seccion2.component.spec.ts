import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { CSeccion2Component } from './c-seccion2.component';
import {of} from 'rxjs';
import { filter } from 'rxjs';
import { PersonajesService } from '../servicio/personajes.service';
describe('CSeccion2Component', () => {
  let component: CSeccion2Component;
  let fixture: ComponentFixture<CSeccion2Component>;

  beforeEach( () => {
      TestBed.configureTestingModule({
        imports:[
        RouterTestingModule,
        HttpClientTestingModule
        ],
      declarations: [ CSeccion2Component ],
      providers: [
        PersonajesService,
        FormBuilder,
        filter
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSeccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('listarPersonajes', ()=>{
    const service = fixture.debugElement.injector.get(PersonajesService);
    const listarCap:any={"results":[]};
    const spy1 = spyOn(service, 'listarPersonajes').and.returnValue(of(listarCap));
    component.listarPersonajes();
    expect(spy1).toHaveBeenCalled();
    expect(component.personajes.length).toBe(0);
  })
});
