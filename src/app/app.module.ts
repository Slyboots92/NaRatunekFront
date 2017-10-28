import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { DonorsHeaderComponent } from './donors-header/donors-header.component';
import { DonorsComponent } from './donors/donors.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { DonorsListItemComponent } from './donors-list-item/donors-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthService } from './auth.service'
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {DonorsServiceService} from './donors-service.service'

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAz1XQG-AG4nGBXYOTQn2v5E8rosmihSR4",
  authDomain: "hopeit-backend.firebaseapp.com",
  databaseURL: "https://hopeit-backend.firebaseio.com",
  projectId: "hopeit-backend",
  storageBucket: "hopeit-backend.appspot.com",
  messagingSenderId: "98752340717"
};


@NgModule({
  declarations: [
    AppComponent,
    DonorsHeaderComponent,
    DonorsComponent,
    DonorsListComponent,
    DonorsListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService,DonorsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
