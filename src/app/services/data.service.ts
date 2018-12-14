import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      map(
        data => data
      ),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(
        data => {
          return data;
        }
      ),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource)).pipe(
      map(
        data => {
          return data;
        }
      ),
      catchError(this.handleError)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/12' + id).pipe(
      map(
        data => {
          return data;
        }),
      catchError(
        // (error: Response) => this.onError(error)));
        (error: Response) => {
          if (error.status === 404) {
            return throwError(new NotFoundError());
          }
          return throwError(new AppError);
        }
        ));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }

}
