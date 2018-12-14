import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(
      response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(JSON.stringify(post))
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
          // this.posts.splice(0, 0, post);      commented for optimistic update
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            alert(error.originalError);
          } else { throw error; }
      });
  }

  updatePost(input) {
    const post = {id: input.id, title: 'hitesh'};
    this.service.update(post)
      .subscribe(
        () => {
          const index = this.posts.indexOf(input);
          post['id'] = input.id;
          this.posts.splice(index, 0, post);
        });
  }

  deletePost(input) {
    const index = this.posts.indexOf(input);
    this.posts.splice(index, 1);

    this.service.delete(input.id)
      .subscribe(
        () => {
          // let index = this.posts.indexOf(input);
          // this.posts.splice(index, 1);      commented for optimistic update
        },
        (error: AppError) => {
          this.posts.splice(index, 0, input);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else { throw error; }
      });
  }

}
