import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css']
})
export class DonorsListComponent implements OnInit {

  
  donors: Donor []; 
  constructor() { 
    this.donors=[];
    let donor1=new Donor({
      id:1,
      name:'mariusz',
      surname:'wasilewski',
      email:'test1@test.pl',
      donationSum: 2000,
      profileUrl: 'www.wp.pl'
    });
    let donor2= new Donor({
      id:2,
      name:'mariusz',
      surname:'kawa',
      email:'test1@test.pl',
      donationSum: 3000,
      profileUrl: 'www.wp.pl'
    })
    this.donors.push(donor1);
    this.donors.push(donor2);
  }

  ngOnInit() {
  }

}
