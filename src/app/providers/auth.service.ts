import { Injectable } from '@angular/core';

//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Component, OnInit, HostBinding } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import {AngularFireModule , FirebaseAppConfig} from 'angularfire2'
@Injectable()
export class AuthService {

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

}