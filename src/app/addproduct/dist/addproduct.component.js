"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddproductComponent = void 0;
var core_1 = require("@angular/core");
var AddproductComponent = /** @class */ (function () {
    function AddproductComponent(service) {
        this.service = service;
        this.u = {};
    }
    AddproductComponent.prototype.ngOnInit = function () {
    };
    AddproductComponent.prototype.Val = function () {
        //replacing fakepath of image input to a actual path
        this.u.image = (this.u.image).replace('C:\\fakepath', "..\\..\\assets");
        //adding the products details to the database  
        this.service.AdminAddProduct(this.u).subscribe();
    };
    AddproductComponent = __decorate([
        core_1.Component({
            selector: 'app-addproduct',
            templateUrl: './addproduct.component.html',
            styleUrls: ['./addproduct.component.css']
        })
    ], AddproductComponent);
    return AddproductComponent;
}());
exports.AddproductComponent = AddproductComponent;
