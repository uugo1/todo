import { Component } from '@angular/core';
import { TaskService } from '../../services/tasks-service';

/*
  Generated class for the Tasks component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
  name: string;
  records: any;
  values = [];
  showEdit: boolean = false;
  constructor(public taskService: TaskService) {  
    this.getTaskList();
  }

   getTaskList() {
          this.taskService.getAll().then((data: any) => {
         console.log(data);
         this.records = ""; this.values = [];
          // Restructured response data
            for (var i = 0; i < data.length; i++) {
              let item = {
                      id:  data[i]['_id'],
                      name: data[i]['name'],
                      edit: false
                  }
              this.values.push(item);
           }     
            this.records = this.values;
            console.log("Manipulated data:"+ this.values);
         }, err => {
             console.log(err.json());
          });
  }
     addTask() {
     // todo.edit = true;
         let item = {
                      name: 'Task name',
                      edit: true
                  }
               this.records.push(item);

  }
   beginEdit(todo) {
      todo.edit = true;
  }
    endEdit(todo) {
      todo.edit = false;
      //perform other actions
      if(todo.id != undefined)
      {
         
          //Update todo
         let item = 'name=' + todo.name;
        this.taskService.update_a_task(todo.id, item).then((data: any) => {
           this.getTaskList();
           console.log("Record updated:"+ data);
         }, err => {
             console.log(err.json());
          });
      } else
      {
        if(todo.name != "Task name")
        {
        //Insert new todo
        let item = 'name=' + todo.name;
        this.taskService.create_a_task(item).then((data: any) => {
           this.getTaskList();
           console.log("Record created:"+ data);
         }, err => {
             console.log(err.json());
          });
        }
     }
  }

    deleteTask(todo, item_index) {
      todo.edit = false;
      if(todo.id == undefined)
      { 
        if (item_index !== -1) {
        this.records.splice(item_index, 1);
       } 
      } else{
        //perform main delete action   delete_a_task
            this.taskService.delete_a_task(todo.id).then((data: any) => {
               this.getTaskList();
               console.log("Record deleted:"+ data);
         }, err => {
             console.log(err.json());
          });
      }
      

  }
  
  
}
