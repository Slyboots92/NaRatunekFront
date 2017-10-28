import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import {Headers ,RequestOptions} from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AuthService } from './auth.service';
import { Http, Response } from '@angular/http';
import { Donor } from './donor';
import { Observable } from 'rxjs/Observable';
import { RootObject } from './donors'
const API_URL = "https://guarded-crag-45195.herokuapp.com";
@Injectable()
export class DonorsServiceService {

  constructor( private http: Http,public authService: AuthService) { }



  
  public getDonors():Observable<RootObject[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Authorization-Firebase', this.authService.idTokenKey);
    let options = new RequestOptions({ headers: headers });
    console.log(this.authService.idTokenKey);
    //this.authService.
    return this.http.get(API_URL + '/api/admin/donors', options)
    .map(response => {
      const donors = response.json();
      console.log(donors)
      return donors.map((donor) => new RootObject(donor));
    })
    
  }
}
  

