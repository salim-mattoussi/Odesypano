import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreationComponent } from './creation/creation.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DomaineComponent } from './domaine/domaine.component';
import {MatDialogModule} from  '@angular/material/dialog';
import { Domain1Component } from './domain1/domain1.component';
import { Domain2Component } from './domain2/domain2.component';
import { Domain3Component } from './domain3/domain3.component';
import { Domain4Component } from './domain4/domain4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AprocheComponent } from './aproche/aproche.component';
import { OutilGesComponent } from './outil-ges/outil-ges.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    CreationComponent,
    HistoriqueComponent,
    DomaineComponent,
    Domain1Component,
    Domain2Component,
    Domain3Component,
    Domain4Component,
    AprocheComponent,
    OutilGesComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'FR',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
 }
