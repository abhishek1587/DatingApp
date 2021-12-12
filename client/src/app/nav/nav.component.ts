import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router : Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(
      (response) => {
        //console.log(response);
        this.router.navigateByUrl('/members');
        //this.loggedin = true;
      }
      /*,
      (error) => {
        console.log(error);
        //this.toastr.error(error.error)
      }*/
    );
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
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
