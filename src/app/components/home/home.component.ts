import { Component } from '@angular/core';
import { faUsers, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faUsers = faUsers;
  faPlusCircle = faPlusCircle;

}
