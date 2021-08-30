"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlacedordersComponent = void 0;
var core_1 = require("@angular/core");
var PlacedordersComponent = /** @class */ (function () {
    function PlacedordersComponent(route, service) {
        this.route = route;
        this.service = service;
        this.u = {};
    }
    PlacedordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.AdminPlacedOrders().subscribe(function (data) {
            _this.orders = data;
        });
    };
    PlacedordersComponent.prototype.ProductId = function (order) {
        localStorage.setItem('changestatus', order.orderid);
    };
    PlacedordersComponent.prototype.onClick = function (order) {
        this.service.AdminUpdateStatus(order.orderid, order).subscribe();
    };
    PlacedordersComponent.prototype.ChangeStatus = function (o) {
        console.log(o.orderid);
        this.service.AdminUpdateStatus(o.orderid, o).subscribe();
    };
    PlacedordersComponent = __decorate([
        core_1.Component({
            selector: 'app-placedorders',
            templateUrl: './placedorders.component.html',
            styleUrls: ['./placedorders.component.css']
        })
    ], PlacedordersComponent);
    return PlacedordersComponent;
}());
exports.PlacedordersComponent = PlacedordersComponent;
