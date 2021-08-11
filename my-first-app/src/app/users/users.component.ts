import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowNewUser=false;
  userCreatedStatus='No User Created';
  userName='';
  isUserCreated=false;

  constructor() {setTimeout(()=>{this.allowNewUser=true;},3000); }

  changeUserCreatedStatus(){this.isUserCreated=true;
    this.userCreatedStatus='User Created';
  }
  onUpdateUser(event:Event){
    console.log('event',event);
    this.userName=(event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
