"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(route) {
        this.route = route;
        this.u = {};
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    //function for verifing admin username and password and logging in
    AdminComponent.prototype.Val = function () {
        var _this = this;
        if (this.u.userid == "admin" && this.u.password == "admin") {
            this.route.navigateByUrl('/admindashboard');
            (function () { return _this.msg = "Valid"; });
            localStorage.setItem("admin", "logedin");
        }
        else {
            (function (err) { return _this.msg = "Not Valid !!!"; });
        }
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
