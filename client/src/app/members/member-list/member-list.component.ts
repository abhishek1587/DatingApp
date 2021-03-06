import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  //members: Member[];
  members$!: Observable<Member[]>;

  constructor(private memberService:MembersService) {
   // this.members =Observable<[]>;
  }

  ngOnInit(): void {
    //this.loadMembers();
    this.members$=this.memberService.getMembers();
  }

  // loadMembers(){
  // return  this.memberService.getMembers().subscribe( member =>{
  //   this.members=member;
  // });
  // }
}
