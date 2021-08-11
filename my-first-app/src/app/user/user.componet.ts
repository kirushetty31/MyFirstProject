import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styles: ['.offline{color:white;}',],

})
export class UserComponent {
    userId: number = 10;
    userStatus: string;

    constructor() {
        this.userStatus = Math.random() > 0.25 ? 'online' : 'offline';
    }

    getUserStatus() {
        return this.userStatus;
    }

    getColor() {
      // alert(this.userStatus);
         if (this.userStatus === 'online') {
              return 'green';
        } else
             return 'red';

     }

}