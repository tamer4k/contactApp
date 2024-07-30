import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactlistComponent,
    HomeComponent,
    NotFoundComponent,
    ContactDetailsComponent,
    AddItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
