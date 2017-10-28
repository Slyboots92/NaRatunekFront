import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { Donor } from './donor'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class ApiService {

  constructor() { }

  public getAllTodos(): Observable<Donor[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }
  

}
