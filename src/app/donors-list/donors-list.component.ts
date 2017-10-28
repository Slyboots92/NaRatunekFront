import { Component, OnInit } from '@angular/core';
import {Donor} from '../donor'
import { AngularFireModule} from 'angularfire2';
import { AuthService } from '../auth.service';
import { DonorsServiceService } from '../donors-service.service';
import { RootObject } from '../donors';
@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent implements OnInit {

  email:string;
  password:string;
  donors: RootObject []; 
  constructor(public authService: AuthService,public donorService: DonorsServiceService) {
    this.email="admin@gmail.com";
    this.password="admin1"
     
  }

  ngOnInit() {
    this.donorService.getDonors().subscribe(
      (donors) => {
        this.donors = donors;
      }
    )
  }
  test(){
    this.donorService.getDonors().subscribe(
      (donors) => {
        this.donors = donors;
      }
    )
  }
  login(){
    this.authService.login("admin@gmail.com","admin1")
  }

}
