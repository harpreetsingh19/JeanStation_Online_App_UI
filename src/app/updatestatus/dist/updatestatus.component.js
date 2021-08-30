"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdatestatusComponent = void 0;
var core_1 = require("@angular/core");
var UpdatestatusComponent = /** @class */ (function () {
    function UpdatestatusComponent(service) {
        this.service = service;
        this.u = {};
        this.id = Number(localStorage.getItem("changestatus"));
    }
    UpdatestatusComponent.prototype.ngOnInit = function () {
    };
    UpdatestatusComponent.prototype.Val = function (u) {
        this.u.orderid = this.id;
        this.service.AdminUpdateStatus(this.id, this.u).subscribe();
    };
    UpdatestatusComponent = __decorate([
        core_1.Component({
            selector: 'app-updatestatus',
            templateUrl: './updatestatus.component.html',
            styleUrls: ['./updatestatus.component.css']
        })
    ], UpdatestatusComponent);
    return UpdatestatusComponent;
}());
exports.UpdatestatusComponent = UpdatestatusComponent;
