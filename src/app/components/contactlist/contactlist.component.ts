import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';
import { ContactService } from 'src/app/services/contact.service';
import { faTrashAlt, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit, OnDestroy {


  #unsubscribe$ = new Subject<void>();

  faUser = faUser;
  faTrashAlt = faTrashAlt;
  faInfoCircle = faInfoCircle;

 protected persons : Person[] = [];

  constructor(private contactService: ContactService) {
    this.contactService.addContact$
        .pipe(takeUntil(this.#unsubscribe$))
        .subscribe((contact: Person) => {
            this.persons.push(contact);
            this.contactService.setItemInlocalStorage('contact', this.persons);
        });
  }

  ngOnInit(): void {
    this.#getContacts();
  }

  #getContacts() {
    this.contactService.getContact()
    .pipe(takeUntil(this.#unsubscribe$))
    .subscribe((persons: any[]) => {
      this.persons = persons;
      console.log(persons)
      this.contactService.setItemInlocalStorage('contact', this.persons);});
  }


  onDelete(person: Person) {
    if (person.id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.contactService.deletePerson(person)
    .pipe(takeUntil(this.#unsubscribe$))
    .subscribe(() => (this.persons = this.persons.filter((t) => t.id !== person.id)));
  }

    ngOnDestroy(): void {
      this.#unsubscribe$.next();
      this.#unsubscribe$.complete();
  }
}
