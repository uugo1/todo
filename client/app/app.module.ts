import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component'; 

// My services
import { AccountService } from './services/account-service';
import { TaskService } from './services/tasks-service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
     AccountService,
     TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
