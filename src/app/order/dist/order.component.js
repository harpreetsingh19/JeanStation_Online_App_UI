"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var core_1 = require("@angular/core");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(route, service) {
        this.route = route;
        this.service = service;
        this.carts = {};
        this.activeuser = {};
        this.toggle = true;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getActiveUser().subscribe(function (data) {
            console.log(data);
            _this.service.ViewOrderById(data).subscribe(function (data) {
                _this.Orders = data;
            });
        });
    };
    OrderComponent.prototype.LogOut = function () {
        localStorage.removeItem('token');
        this.route.navigate(['/login']);
    };
    OrderComponent.prototype.Delete = function (o) {
        console.log(o);
        this.service.RemoveOrder(o).subscribe();
        this.toggle = false;
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
