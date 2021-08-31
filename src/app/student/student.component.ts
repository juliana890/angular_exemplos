import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name: string = 'Luke';
  isJedi: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}