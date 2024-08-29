import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { Person } from '../Person';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:5000/contacts';

  public addContactSubject = new Subject<Person>();
  public addContact$ = this.addContactSubject.asObservable();



  constructor(private http: HttpClient) { }

  getContact(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl)
    .pipe(
      map((contacts: any[]) => contacts.map((person: any) => new Person(person)))
    )
  }

  getDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addContact(contact: Person): void {
    // return this.getContact().pipe
    // // .pipe(
    // //   map((obj: any) => {
    // //     const contacts = obj.contacts;
    // //     console.log(contacts)
    // //     contacts.map((person: any) => new Person(person))
    // //     return contacts
    // //     // const maxId = contacts.length > 0 ? Math.max(...contacts.map(c => parseInt(c.id, 10))) : 0;
    // //     // contact.id = (maxId + 1).toString();
    // //     // return contact;
    // //   }
    // // ),
    //   switchMap((newContact: Person) => {
    //    return this.http.post<Person>(this.apiUrl, newContact)
    //   })
    // );

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
