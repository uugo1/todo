import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component'; 
import { LoginComponent } from './components/login/login.component'; 

// My services
import { AccountService } from './services/account-service';
import { TaskService } from './services/tasks-service';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'tasks', component: TasksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true,
      })
  ],
  exports: [
    RouterModule
  ],
  providers: [
     AccountService,
     TaskService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
