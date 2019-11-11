import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=1');
  }
}
