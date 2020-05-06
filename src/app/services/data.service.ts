import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {    
  }
  getPost(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .pipe(map(data => data))
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .toPromise()
    // .then(response => response.json())
    // .catch(err => console.error());
  }
  
}

