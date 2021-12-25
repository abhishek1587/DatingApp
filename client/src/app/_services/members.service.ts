import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')!)?.token,
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(localStorage.getItem('user'));
  }

  getMembers() {
   // return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
   return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    //Case 1 define the httpOptions in same page and use it over here e.g. Authorizatio header
    //return this.http.get<Member>(this.baseUrl + 'users/' + username,httpOptions );
    //Case 2 Instead of defind httpOptions in servies we define an interceptor in_interceptor folder named "jwt" and set header options over there  and register it in app moduel under provider section and use it for every http request
    return this.http.get<Member>(this.baseUrl + 'users/' + username );
  }
}
