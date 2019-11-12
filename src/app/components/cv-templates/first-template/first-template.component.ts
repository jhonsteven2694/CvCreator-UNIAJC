import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.css']
})
export class FirstTemplateComponent implements OnInit {

  users: User[] = [];

  maritalStatusesId = [
    { id: '1', name: 'Soltero(a)' },
    { id: '2', name: 'Casado(a)' },
    { id: '3', name: 'Separado(a)' }
  ];

  tipoDocumentoId = [
    { id: '1', name: 'Cédula de Ciudadanía' },
    { id: '2', name: 'Cédula de Extranjería' },
    { id: '3', name: 'Pasaporte' }
  ];

  estadosId = [
    { id: '1', name: 'Valle del Cauca' },
    { id: '2', name: 'Antioquia' },
    { id: '3', name: 'Cundinamarca' }
  ];

  ciudadesId = [
    { id: '1', name: 'Cali' },
    { id: '2', name: 'Medellin' },
    { id: '3', name: 'Bogotá' }
  ];

  barriosId = [
    { id: '1', name: 'Ciudad Cordoba' },
    { id: '2', name: 'Valle del Lili' },
    { id: '3', name: 'Chiminangos' }
  ];

  habilidades = [
    'Habilidad 1',
    'Habilidad 2',
    'Habilidad 3',
    'Habilidad 4',
    'Habilidad 5',
    'Habilidad 6'
  ];

  laboralExperiences = [
    {
      id: '1',
      empresa: 'Empresa la vida',
      cargo: 'Analista de Sistemas',
      funciones: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.',
      inicio: 'Abril 2011',
      fin: '--',
      actualmente: true
    },
    {
      id: '2',
      empresa: 'Otra Empresa la vida',
      cargo: 'otro cargo de Sistemas',
      funciones: 'las funciones que me de la gana, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit.',
      inicio: '01/01/01',
      fin: '99/99/99',
      actualmente: true
    }
  ];

  studies = [
    {
      id: '1',
      institucion: 'UNIAJC',
      nivel: 'Ingeniería de Software',
      inicio: 'Abril 2011',
      fin: '--',
      actualmente: true
    },
    {
      id: '2',
      institucion: 'SENA',
      nivel: 'Tecnológo en sistemas',
      inicio: '01/01/01',
      fin: '99/99/99',
      actualmente: true
    }
  ];

  constructor(public pruebaService: PruebaService) { }

  ngOnInit() {
    this.pruebaService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        err => console.log(err)
      )
  }

  /**
   * @param pi Informacion Personal.
   * Metodo el cual almacena la informacion personal.
   */
  savePersonalInformation(pi) {
    console.log('personal information');
  }

  /**
   * @param h Habilidad ingresada.
   * Metodo el cual almacena la habilidad ingresada.
   */
  addHabilidad(h) {
    this.habilidades.push(h);
  }

  /**
   * @param el Experiencia Laboral.
   * Metodo el cual almacena la experiencia laboral ingresada.
   */
  addLaboralExperience(el) {
    // this.laboralExperiences.push(el);
    console.log('experiencia laboral');
  }

  /**
   * @param s Estudios Realizados.
   * Metodo el cual almacena los estudios ingresados.
   */
  addStudies(s) {
    // this.studies.push(s);
    console.log('estudios realizados');
  }

}
