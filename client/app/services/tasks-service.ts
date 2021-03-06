
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
    baseurl: any;
    data: any;
    constructor(public http: Http) {
        console.log('Task service initiated');
       this.baseurl = 'http://localhost:5000/api/';
       this.data = null;
  }

 getAll() {
   var url = this.baseurl + 'tasks';
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.get(url, {
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


 create_a_task(task) {
   var url = this.baseurl + 'tasks';
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.post(url, task, {
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

 update_a_task(task_id, task) {
   var url = this.baseurl + 'tasks/' + task_id;
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.put(url, task, {
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
 delete_a_task(task_id) {
   var url = this.baseurl + 'tasks/' + task_id;
      return new Promise(resolve => {
              var headers: Headers = new Headers();
              headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
              headers.append("Accept", "text/html; charset=UTF-8");

              this.http.delete(url, {
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