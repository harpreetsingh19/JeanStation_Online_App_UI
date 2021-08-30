"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminEditDetailsComponent = void 0;
var core_1 = require("@angular/core");
var AdminEditDetailsComponent = /** @class */ (function () {
    function AdminEditDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
        this.u = {};
        this.carts = {};
        this.order = {};
        this.customer = {};
    }
    AdminEditDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetCart().subscribe(function (data) {
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (data[index].productid == localStorage.getItem("edit")) //geting stored data from localstorage 
                 {
                    _this.carts = element;
                }
            }
        });
    };
    //funcction for updating the product details
    AdminEditDetailsComponent.prototype.Val = function () {
        this.u.productid = this.carts.productid;
        this.u.image = (this.u.image).replace('C:\\fakepath', "..\\..\\assets"); //replacing the "fakepath" to a real path
        this.service.AdminUpdateDetails(this.carts.productid, this.u).subscribe();
        this.route.navigate(['/admindashboard']); //redirection to admindashboard
    };
    AdminEditDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-edit-details',
            templateUrl: './admin-edit-details.component.html',
            styleUrls: ['./admin-edit-details.component.css']
        })
    ], AdminEditDetailsComponent);
    return AdminEditDetailsComponent;
}());
exports.AdminEditDetailsComponent = AdminEditDetailsComponent;
