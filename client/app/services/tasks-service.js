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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task service initiated');
        this.baseurl = 'http://localhost:5000/api/';
        this.data = null;
    }
    TaskService.prototype.getAll = function () {
        var _this = this;
        var url = this.baseurl + 'tasks';
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.get(url, {
                headers: headers
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    TaskService.prototype.create_a_task = function (task) {
        var _this = this;
        var url = this.baseurl + 'tasks';
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.post(url, task, {
                headers: headers
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    TaskService.prototype.update_a_task = function (task_id, task) {
        var _this = this;
        var url = this.baseurl + 'tasks/' + task_id;
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.put(url, task, {
                headers: headers
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    TaskService.prototype.delete_a_task = function (task_id) {
        var _this = this;
        var url = this.baseurl + 'tasks/' + task_id;
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.delete(url, {
                headers: headers
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error.json());
            });
        });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=tasks-service.js.map