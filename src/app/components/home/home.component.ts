import { Component } from '@angular/core';
import { faUsers, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
handleDeletePerson($event: Person) {
throw new Error('Method not implemented.');
}
  faUsers = faUsers;
  faPlusCircle = faPlusCircle;

}
