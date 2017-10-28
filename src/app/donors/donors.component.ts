import { Component, OnInit } from '@angular/core';
import {Donor} from '../donor'
import { AngularFireModule} from 'angularfire2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {


  ngOnInit() {
    this.login();
  }
  email: string;
  password: string;

  constructor(public authService: AuthService) {
    this.email="test1@test.pl";
    this.password="test1234"
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
