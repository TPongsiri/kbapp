import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule,NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarappComponent } from './navbarapp/navbarapp.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarappComponent,
    WelcomeComponent,
    ContentComponent,
    FooterComponent,
    OurteamComponent,
    OurserviceComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,    
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
