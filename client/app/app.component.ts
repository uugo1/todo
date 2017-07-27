import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
  // templateUrl: './components/tasks/tasks.component.html'
})

export class AppComponent {
   title: string;
  constructor() {
    console.log('Hello tasks Component');
     this.title = "Task App";
  }
}
