import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Person';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:5000/contacts';

  constructor(private http: HttpClient) { }

  getContact(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl);
  }
  getDataById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
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
