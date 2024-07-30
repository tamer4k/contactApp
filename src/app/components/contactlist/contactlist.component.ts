import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';
import { ContactService } from 'src/app/services/contact.service';
import { faTrashAlt, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {




  faUser = faUser;
  faTrashAlt = faTrashAlt;
  faInfoCircle = faInfoCircle;

  person : Person[] = [];

  constructor(private contactService: ContactService){
    
    this.contactService.addedNewContact.subscribe((newContact: Person) => {
      this.person.push(newContact);
      this.contactService.setItemInlocalStorage('contact', this.person);
    });

  }

  ngOnInit(): void {
    this.contactService.getContact().subscribe((person) => {
      this.person = person;
      this.contactService.setItemInlocalStorage('contact', this.person);});
  }


  onDelete(person: Person) {
    if (person.id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.contactService.deletePerson(person).subscribe(() => (this.person = this.person.filter((t) => t.id !== person.id)));
  }

}
