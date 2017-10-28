import { Component, OnInit } from '@angular/core';
import {Donor} from '../donor'
import { AngularFireModule} from 'angularfire2';
import { AuthService } from '../auth.service';
import { DonorsServiceService } from '../donors-service.service';
@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {


  ngOnInit() {
    
  }
  email: string;
  password: string;

  constructor(public authService: AuthService,public donorService: DonorsServiceService) {
    this.email="admin@gmail.com";
    this.password="admin1"

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
