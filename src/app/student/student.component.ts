import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'exp-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //Input(): Habilitando as propriedades para receberen valores do component parent
  //Tiramos os valores padrões e passamos no template
  @Input() student: Student

  constructor() {}

  ngOnInit() {}

  clicked(){
    console.log(`Student: ${this.student.name}`);
  }

}
