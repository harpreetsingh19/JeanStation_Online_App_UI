"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, route) {
        this.service = service;
        this.route = route;
        this.u = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this.route.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.Val = function (activeuser) {
        var _this = this;
        this.service.Validate(this.u).subscribe(function (res) {
            localStorage.setItem('token', res.token);
            console.log(_this.u.userid);
            _this.route.navigateByUrl('/dashboard');
            (function () { return _this.msg = "Valid"; });
        }, function (error) { return _this.msg = "Not Valid!!!"; });
        this.service.addActiveUser(activeuser).subscribe();
    };
    LoginComponent.prototype.register = function () {
        this.route.navigate(['register']);
    };
    LoginComponent.prototype.login = function () {
        this.route.navigate(['login']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
