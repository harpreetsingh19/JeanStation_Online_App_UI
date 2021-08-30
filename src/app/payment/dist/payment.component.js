"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var core_1 = require("@angular/core");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(route, service) {
        this.route = route;
        this.service = service;
        this.carts = {};
        this.order = {};
        this.customer = {};
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetCart().subscribe(function (data) {
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (data[index].productid == localStorage.getItem("currentproduct")) {
                    _this.carts = element;
                    if (_this.carts.productid >= 1 || _this.carts.productid <= 3) {
                        _this.carts.price = _this.carts.price * 0.9;
                        _this.msg = "Congrats You Got 10% Discount";
                    }
                    else if (_this.carts.productid >= 4 || _this.carts.productid <= 5) {
                        _this.carts.price = _this.carts.price * 0.95;
                        _this.msg = "Congrats You Got 5% Discount";
                    }
                    else if (_this.carts.productid >= 6 || _this.carts.productid <= 7) {
                        _this.carts.price = _this.carts.price * 0.85;
                        _this.msg = "Congrats You Got 15% Discount";
                    }
                    else if (_this.carts.productid >= 8 || _this.carts.productid <= 10) {
                        _this.carts.price = _this.carts.price * 0.7;
                        _this.msg = "Congrats You Got 30% Discount";
                    }
                    else if (_this.carts.productid >= 10 || _this.carts.productid <= 12) {
                        _this.carts.price = _this.carts.price * 0.75;
                        _this.msg = "Congrats You Got 25% Discount";
                    }
                    else {
                        _this.carts.price = _this.carts.price - 100;
                    }
                }
            }
        });
    };
    PaymentComponent.prototype.onSubmit = function (customer) {
        var _this = this;
        this.service.GetCart().subscribe(function (data) {
            var _loop_1 = function (index) {
                if (data[index].productid == localStorage.getItem("currentproduct")) {
                    _this.service.getActiveUser().subscribe(function (data2) {
                        _this.order = Object.assign({}, customer, data[index], data2);
                        _this.service.AddOrder(_this.order).subscribe();
                    });
                }
            };
            for (var index = 0; index < data.length; index++) {
                _loop_1(index);
            }
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.css']
        })
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
