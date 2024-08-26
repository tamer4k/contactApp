import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})



export class AddItemComponent {

  contact: Person = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };
showForm: any;

  constructor(private contactService: ContactService) { }
  ngOnInit(): void {

  }


  onSubmit(): void {

    if(!this.contact.firstName || !this.contact.lastName){
       alert("velden zijn verplicht");
    }else{

      this.contactService.addContact(this.contact).subscribe((newContact)=>{
        this.contactService.addedNewContact.emit(newContact);

        this.contact = {
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        }
      });
    }

  }

  toggleForm() {
    this.showForm = !this.showForm;
  }



}


