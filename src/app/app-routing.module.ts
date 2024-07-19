import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { ContactlistComponent } from "./components/contactlist/contactlist.component";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'List', component: ContactlistComponent},
  {path: '**',component: MainComponent}

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

