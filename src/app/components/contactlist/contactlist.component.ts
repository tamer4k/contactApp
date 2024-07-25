import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {


  person : Person[] = [];

  constructor(private contactService: ContactService){

  }
  ngOnInit(): void {
    this.contactService.getContact().subscribe((person)=> (this.person = person));
  }

}
