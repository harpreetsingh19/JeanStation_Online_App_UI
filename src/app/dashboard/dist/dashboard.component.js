"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, service) {
        this.route = route;
        this.service = service;
        this.products = [];
        this.cart = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetCart().subscribe(function (data) {
            _this.carts = data;
        });
    };
    DashboardComponent.prototype.AddToCart = function (c) {
        var _this = this;
        this.service.getActiveUser().subscribe(function (data) {
            _this.cart = Object.assign({}, c, data);
            _this.service.UserCart(_this.cart).subscribe();
        });
        alert(c.productname + " added to the cart");
    };
    DashboardComponent.prototype.BuyNow = function (c) {
        localStorage.setItem('currentproduct', c.productid);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
