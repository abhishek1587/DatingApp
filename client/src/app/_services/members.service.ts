import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  members: Member[] = [];

  constructor(private http: HttpClient) {
    console.log(localStorage.getItem('user'));
  }

  getMembers() {
    // return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map((x) => {
        this.members = x;
        return x;
      })
    );
  }

  getMember(username: string) {
    //Case 1 define the httpOptions in same page and use it over here e.g. Authorizatio header
    //return this.http.get<Member>(this.baseUrl + 'users/' + username,httpOptions );
    //Case 2 Instead of defind httpOptions in servies we define an interceptor in_interceptor folder named "jwt" and set header options over there  and register it in app moduel under provider section and use it for every http request

    const member=this.members.find(x => x.username===username);
    if(member!==undefined)  return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() =>{
        const index=this.members.indexOf(member);
        this.members[index]=member;
      })
    );
  }
}
