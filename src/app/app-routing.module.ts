import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ContactlistComponent } from "./components/contactlist/contactlist.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'List', component: ContactlistComponent},
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

