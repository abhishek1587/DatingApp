import { Component, OnInit } from '@angular/core';
//import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedin: boolean = false;
  //currentUser$: Observable<User> | undefined;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        //this.loggedin = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    this.accountService.logout();
    //this.loggedin = false;
  }
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user =>{
  //     this.loggedin=!!user;
  //   },
  //   error =>{
  //     console.log(error)
  //   });
  // }
}
