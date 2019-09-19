import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service'

@Component({
  selector: 'app-crud-get',
  templateUrl: './crud-get.component.html',
  styleUrls: ['./crud-get.component.css']
})
export class CrudGetComponent implements OnInit {

  students = [];
  constructor( private studentService: BusinessService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response => {
      this.students = response
    });
  }


}
