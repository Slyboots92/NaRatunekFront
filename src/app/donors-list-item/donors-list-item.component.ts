import { Component, OnInit, Input } from '@angular/core';
import {Donor} from '../donor'
@Component({
  selector: 'app-donors-list-item',
  templateUrl: './donors-list-item.component.html',
  styleUrls: ['./donors-list-item.component.css']
})
export class DonorsListItemComponent implements OnInit {

  @Input()
  currentDonor: Donor;
  constructor() { }

  ngOnInit() {
  }

}
