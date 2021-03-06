
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
    private baseurl: any;
    private data: any;
    constructor(public http: Http) {
       this.baseurl = 'http://localhost:5000/api/';
       this.data = null;
  }
 
  create_a_user(user) {
   var url = this.baseurl + 'user';
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.post(url, user, {
                  headers: headers
              }).map(res => res.json()).subscribe(data => {
                  console.log(data);
                  this.data = data;
                  resolve(this.data);
                 
              }, error => {
                  console.log(error.json());
        
                  });
      });
  }

  authenticate_a_user(user) {
   var url = this.baseurl + 'user/auth';
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.post(url, user, {
                  headers: headers
              }).map(res => res.json()).subscribe(data => {
                  console.log(data);
                  this.data = data;
                  resolve(this.data);
                 
              }, error => {
                  console.log(error.json());
        
            });
      });
  }


}