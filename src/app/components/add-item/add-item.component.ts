import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Person } from 'src/app/Person';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})



export class AddItemComponent implements OnDestroy {

    protected contact!: Person;

//   contact: Person = {
//     id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: ''
//   };

    showForm: any;

    #unsubscribe$ = new Subject<void>()

  constructor(private contactService: ContactService) { }

  onSubmit(): void {
    // if (!this.contact.firstName || !this.contact.lastName){
    //    alert("velden zijn verplicht");
    // } else {
    //   this.contactService.addContact(this.contact)
    //   .pipe(takeUntil(this.#unsubscribe$))
    //   .subscribe((newContact)=>{
    //     this.contactService.addContactSubject.next(newContact);
    //     this.#resetForm();
    //   });
    // }
  }

  #resetForm() {
    // this.contact = {
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: ''
    // }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnDestroy(): void {
    this.#unsubscribe$.next();
    this.#unsubscribe$.complete();
}

}


