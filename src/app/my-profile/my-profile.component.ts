import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        // console.log(params);
        const id = +params.get('id');
        console.log(id);
      });
  }

  submit() {
    this.router.navigate(['/followers', 2312], {
      queryParams: {page: 12, order: 'oldest'}
    });
  }
}
