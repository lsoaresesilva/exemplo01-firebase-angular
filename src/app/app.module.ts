import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirebaseConfig } from "../environments/firebase.config";
 import { AngularFireModule } from 'angularfire2/index';
 import { AngularFireDatabase } from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(FirebaseConfig),
     FormsModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
