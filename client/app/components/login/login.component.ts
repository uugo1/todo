import { Component } from '@angular/core';
import { AccountService } from '../../services/account-service';
 import { Router } from '@angular/router';

/*
  Generated class for the LoginPage page.
*/
@Component({
     moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
      error: string;
      showMessage: boolean;
      //public router: Router,
    constructor(private router: Router, private accountService: AccountService) {
       this.showMessage = false;
       this.error = "";
    }
  
    login(email, password) {
        var body = 'email=' + email + '&password=' + password;
            this.accountService.authenticate_a_user(body).then(data => {
                var body = JSON.stringify(data);
                var user = JSON.parse(body);
                localStorage.setItem('userEmail', user.email);
                 this.router.navigate(['/tasks']);
               }, error => {
                  this.error = error.json();
                  this.showMessage = true;
                 console.log(error.json());
            });
    }

}
