import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ContactlistComponent } from "./components/contactlist/contactlist.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component";
import { AddItemComponent } from "./components/add-item/add-item.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ContactlistComponent},
  { path: 'details/:id', component: ContactDetailsComponent },
  { path: 'new', component: AddItemComponent },
  {path: '**',component: NotFoundComponent}

]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule{

}

