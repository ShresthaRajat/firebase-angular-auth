import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmK3_ojzsXbmW-165MKBnundmP4S32Pwg",
      authDomain: "new-auth-37004.firebaseapp.com",
      projectId: "new-auth-37004",
      storageBucket: "new-auth-37004.appspot.com",
      messagingSenderId: "864547691482",
      appId: "1:864547691482:web:03621d72a047c2b9f7bee3"
    }

    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
