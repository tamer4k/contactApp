import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Person } from '../Person';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:5000/contacts';
  addedNewContact = new EventEmitter<Person>();

  constructor(private http: HttpClient) { }

  getContact(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl);
  }
  getDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addContact(contact: Person): Observable<Person> {
    return this.getContact().pipe(
      map((contacts: Person[]) => {
        // Generate a unique string ID
        const maxId = contacts.length > 0 ? Math.max(...contacts.map(c => parseInt(c.id, 10))) : 0;
        contact.id = (maxId + 1).toString();
        return contact;
      }),
      switchMap((newContact: Person) => this.http.post<Person>(this.apiUrl, newContact))
    );
  }

    deletePerson(person: Person): Observable<Person> {
      const url = `${this.apiUrl}/${person.id}`;
      return this.http.delete<Person>(url);
    }


  setItemInlocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItemInlocalStorage(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }



}
