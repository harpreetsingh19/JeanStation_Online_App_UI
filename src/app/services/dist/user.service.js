"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    UserService.prototype.RegisterUser = function (User) {
        return this.http.post('http://localhost:58503/api/Auth/register', User);
    };
    UserService.prototype.Validate = function (User) {
        return this.http.post('http://localhost:58503/api/Auth/validate', User);
    };
    UserService.prototype.GetCart = function () {
        //this.http.get<Product>("http://localhost:54140/api/admins/getproducts");
        return this.http
            .get("http://localhost:54140/api/admins/getproducts", {
            headers: new http_1.HttpHeaders().set('Authorization', this._authHeader)
        });
    };
    UserService.prototype.getCarts = function (userid) {
        return this.http.post("http://localhost:52560/api/Carts/getcartsbyuserid", userid);
    };
    Object.defineProperty(UserService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + this.token;
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.AddOrder = function (order) {
        return this.http.post("http://localhost:54151/api/orders", order);
    };
    UserService.prototype.UserCart = function (product) {
        // const headerhttp=new HttpHeaders({
        //   'Authorization':'bearer'+this.token
        // });
        return this.http.post("http://localhost:52560/api/carts", product);
        //return this.http.post<Cart>("http://localhost:52560/api/carts",product,{headers:headerhttp});
        //return this.http.post<any>("http://localhost:52560/api/carts",product,new HttpHeaders(){"Authorization":"bearer"+this.token});
    };
    UserService.prototype.ViewUserCart = function () {
        return this.http.get("http://localhost:52560/api/carts");
    };
    UserService.prototype.deleteIssue = function (id) {
        return this.http["delete"]("http://localhost:52560/api/carts/" + id);
    };
    UserService.prototype.ViewOrder = function () {
        return this.http.get("http://localhost:54151/api/orders");
    };
    UserService.prototype.ViewOrderById = function (id) {
        return this.http.post("http://localhost:54151/api/orders/getordersbyuserid", id);
    };
    UserService.prototype.RemoveOrder = function (id) {
        return this.http["delete"]("http://localhost:54151/api/orders/" + id);
    };
    UserService.prototype.AdminRemoveProduct = function (id) {
        return this.http["delete"]("http://localhost:54140/api/admins/" + id);
    };
    UserService.prototype.AdminAddProduct = function (product) {
        return this.http.post("http://localhost:54140/api/admins", product);
    };
    UserService.prototype.AdminPlacedOrders = function () {
        return this.http.get("http://localhost:54151/api/orders");
    };
    UserService.prototype.AdminUpdateDetails = function (id, p) {
        return this.http.put("http://localhost:54140/api/admins/" + id, p);
    };
    UserService.prototype.AdminUpdateStatus = function (id, p) {
        return this.http.put("http://localhost:54151/api/orders/" + id, p);
    };
    UserService.prototype.addActiveUser = function (activeuser) {
        return this.http.post('http://localhost:58503/api/Auth/addactiveuser', activeuser);
    };
    UserService.prototype.getActiveUser = function () {
        return this.http.get('http://localhost:58503/api/Auth/lastuser');
    };
    UserService.prototype.deleteActiveUser = function (activeuserid) {
        return this.http.post('http://localhost:58503/api/Auth/deleteactiveuser', activeuserid);
    };
    UserService.prototype.IsLogedIn = function () {
        return !!localStorage.getItem('token');
    };
    UserService.prototype.AdminLogedIn = function () {
        return !!localStorage.getItem('admin');
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
