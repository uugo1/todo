"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tasks_service_1 = require("../../services/tasks-service");
/*
  Generated class for the Tasks component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.values = [];
        this.showEdit = false;
        this.getTaskList();
    }
    TasksComponent.prototype.getTaskList = function () {
        var _this = this;
        this.taskService.getAll().then(function (data) {
            console.log(data);
            _this.records = "";
            _this.values = [];
            // Restructured response data
            for (var i = 0; i < data.length; i++) {
                var item = {
                    id: data[i]['_id'],
                    name: data[i]['name'],
                    edit: false
                };
                _this.values.push(item);
            }
            _this.records = _this.values;
            console.log("Manipulated data:" + _this.values);
        }, function (err) {
            console.log(err.json());
        });
    };
    TasksComponent.prototype.addTask = function () {
        // todo.edit = true;
        var item = {
            name: 'Task name',
            edit: true
        };
        this.records.push(item);
    };
    TasksComponent.prototype.beginEdit = function (todo) {
        todo.edit = true;
    };
    TasksComponent.prototype.endEdit = function (todo) {
        var _this = this;
        todo.edit = false;
        //perform other actions
        if (todo.id != undefined) {
            //Update todo
            var item = 'name=' + todo.name;
            this.taskService.update_a_task(todo.id, item).then(function (data) {
                _this.getTaskList();
                console.log("Record updated:" + data);
            }, function (err) {
                console.log(err.json());
            });
        }
        else {
            if (todo.name != "Task name") {
                //Insert new todo
                var item = 'name=' + todo.name;
                this.taskService.create_a_task(item).then(function (data) {
                    _this.getTaskList();
                    console.log("Record created:" + data);
                }, function (err) {
                    console.log(err.json());
                });
            }
        }
    };
    TasksComponent.prototype.deleteTask = function (todo, item_index) {
        var _this = this;
        todo.edit = false;
        if (todo.id == undefined) {
            if (item_index !== -1) {
                this.records.splice(item_index, 1);
            }
        }
        else {
            //perform main delete action   delete_a_task
            this.taskService.delete_a_task(todo.id).then(function (data) {
                _this.getTaskList();
                console.log("Record deleted:" + data);
            }, function (err) {
                console.log(err.json());
            });
        }
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'tasks.component.html'
    }),
    __metadata("design:paramtypes", [tasks_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map