import { Component } from '@angular/core';

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
}
