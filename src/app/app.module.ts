import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { DonorsHeaderComponent } from './donors-header/donors-header.component';
import { DonorsComponent } from './donors/donors.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { DonorsListItemComponent } from './donors-list-item/donors-list-item.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Must export the config
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
