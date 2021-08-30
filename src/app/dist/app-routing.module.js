"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var addproduct_component_1 = require("./addproduct/addproduct.component");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var admin_edit_details_component_1 = require("./admin-edit-details/admin-edit-details.component");
var admin_component_1 = require("./admin/admin.component");
var cart_component_1 = require("./cart/cart.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var can_active_guard_1 = require("./guard/can-active.guard");
var login_component_1 = require("./login/login.component");
var order_component_1 = require("./order/order.component");
var payment_component_1 = require("./payment/payment.component");
var placedorders_component_1 = require("./placedorders/placedorders.component");
var preview_component_1 = require("./preview/preview.component");
var register_component_1 = require("./register/register.component");
var serach_component_1 = require("./serach/serach.component");
var updatestatus_component_1 = require("./updatestatus/updatestatus.component");
var routes = [
    { path: '', redirectTo: '/preview', pathMatch: 'full' },
    { path: 'preview', component: preview_component_1.PreviewComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'adminlogin', component: admin_component_1.AdminComponent },
    { path: 'search', component: serach_component_1.SerachComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [can_active_guard_1.CanActiveGuard] },
    { path: 'admindashboard', component: admin_dashboard_component_1.AdminDashboardComponent },
    { path: 'admindashboard/placedorders/changestatus', component: updatestatus_component_1.UpdatestatusComponent },
    { path: 'admindashboard/addproduct', component: addproduct_component_1.AddproductComponent },
    { path: 'admindashboard/placedorders', component: placedorders_component_1.PlacedordersComponent },
    { path: 'admindashboard/adminEditdetails', component: admin_edit_details_component_1.AdminEditDetailsComponent },
    { path: 'order', component: order_component_1.OrderComponent },
    { path: 'dashboard/cart', component: cart_component_1.CartComponent, canActivate: [can_active_guard_1.CanActiveGuard] },
    { path: 'dashboard/payment', component: payment_component_1.PaymentComponent, canActivate: [can_active_guard_1.CanActiveGuard], pathMatch: 'prefix' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
