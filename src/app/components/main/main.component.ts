import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  person : Person[] = [];

  constructor(private contactService: ContactService){

  }

  ngOnInit(): void {
   this.contactService.getContact().subscribe((person)=> (this.person = person));
  }

}
