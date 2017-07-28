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
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.baseurl = 'http://localhost:5000/api/';
        this.data = null;
    }
    AccountService.prototype.create_a_user = function (user) {
        var _this = this;
        var url = this.baseurl + 'user';
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.post(url, user, {
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
    AccountService.prototype.authenticate_a_user = function (user) {
        var _this = this;
        var url = this.baseurl + 'user/auth';
        return new Promise(function (resolve) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            headers.append("Accept", "text/html; charset=UTF-8");
            _this.http.post(url, user, {
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
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account-service.js.map