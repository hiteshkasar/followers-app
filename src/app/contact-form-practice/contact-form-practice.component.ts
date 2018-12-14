import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-practice',
  templateUrl: './contact-form-practice.component.html',
  styleUrls: ['./contact-form-practice.component.css']
})
export class ContactFormPracticeComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];
  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
}
