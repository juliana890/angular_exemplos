import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'exp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Criando as propriedades que serão um student
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  leia = {name: 'Leia', isJedi: false}
  han = {name: 'Han Solo', isJedi: false}

  //Criando um array de students
  students: Student[] = [
    {name: 'Estela', isJedi: true, temple: 'Kira'},
    {name: 'Luís', isJedi: false},
    {name: 'Hugo', isJedi: true, temple: 'Bronks'}
  ];
}

