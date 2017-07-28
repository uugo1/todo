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
var account_service_1 = require("../../services/account-service");
var router_1 = require("@angular/router");
/*
  Generated class for the LoginPage page.
*/
var LoginComponent = (function () {
    //public router: Router,
    function LoginComponent(router, accountService) {
        this.router = router;
        this.accountService = accountService;
        this.showMessage = false;
        this.error = "";
    }
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        var body = 'email=' + email + '&password=' + password;
        this.accountService.authenticate_a_user(body).then(function (data) {
            var body = JSON.stringify(data);
            var user = JSON.parse(body);
            localStorage.setItem('userEmail', user.email);
            _this.router.navigate(['/tasks']);
        }, function (error) {
            _this.error = error.json();
            _this.showMessage = true;
            console.log(error.json());
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, account_service_1.AccountService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map