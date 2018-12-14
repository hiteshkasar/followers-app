import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form-assignment',
  templateUrl: './course-form-assignment.component.html',
  styleUrls: ['./course-form-assignment.component.css']
})
export class CourseFormAssignmentComponent implements OnInit {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];
  constructor() { }

  ngOnInit() {
  }

  submit(course) {
    console.log(course);
  }
}
