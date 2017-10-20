import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirebaseConfig } from "../environments/firebase.config";
 import { AngularFireModule } from 'angularfire2/index';
 import { AngularFirestoreModule } from "angularfire2/firestore";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(FirebaseConfig),
     AngularFirestoreModule,
     ReactiveFormsModule,
     FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
