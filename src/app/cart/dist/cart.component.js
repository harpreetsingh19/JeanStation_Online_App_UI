"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(route, service) {
        this.route = route;
        this.service = service;
        this.activeuser = {};
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getActiveUser().subscribe(function (data) {
            _this.service.getCarts(data).subscribe(function (data) {
                _this.carts = data;
                _this.totalproduct = data.length;
            });
        });
    };
    //logout function
    CartComponent.prototype.LogOut = function () {
        var _this = this;
        this.service.getActiveUser().subscribe(function (data) {
            _this.activationid = data.activationid;
            _this.activeuser = data;
        });
        this.service.deleteActiveUser(this.activationid).subscribe();
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    CartComponent.prototype.PlaceOrder = function (c) {
        console.log(c);
        console.log(c.productid);
        localStorage.setItem('cartp', c.productid); //storing product id to locastorage to use it in payment component
    };
    ///deleting the product
    CartComponent.prototype.Delete = function (id) {
        var _this = this;
        this.service.deleteIssue(id).subscribe(function () { return _this.message = "Removed Successfully"; });
        this.show = 'show';
    };
    //For reloading page
    CartComponent.prototype.cross = function () {
        location.reload();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
