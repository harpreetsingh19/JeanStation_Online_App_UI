"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminDashboardComponent = void 0;
var core_1 = require("@angular/core");
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetCart().subscribe(function (data) {
            _this.carts = data;
        });
    };
    //passing id of product to delete it from databse
    AdminDashboardComponent.prototype.Delete = function (id) {
        this.service.AdminRemoveProduct(id).subscribe();
    };
    //function for inserting product id in local storage "edit" variable
    AdminDashboardComponent.prototype.Edit = function (c) {
        localStorage.setItem('edit', c.productid);
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-dashboard',
            templateUrl: './admin-dashboard.component.html',
            styleUrls: ['./admin-dashboard.component.css']
        })
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
