import { Component, OnInit } from '@angular/core';
import { MyFollowersService } from '../services/my-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: MyFollowersService) { }

  ngOnInit() {
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    )
    .pipe(switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');
      const order = combined[1].get('order');
      return this.service.getAll();
    }))
    .subscribe(followers => this.followers = followers);

    // this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
  }

}
