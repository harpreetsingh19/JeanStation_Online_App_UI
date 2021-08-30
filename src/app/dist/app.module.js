"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var preview_component_1 = require("./preview/preview.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var cart_component_1 = require("./cart/cart.component");
var payment_component_1 = require("./payment/payment.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var admin_component_1 = require("./admin/admin.component");
var search_pipe_1 = require("./pipe/search.pipe");
var order_component_1 = require("./order/order.component");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var admin_edit_details_component_1 = require("./admin-edit-details/admin-edit-details.component");
var addproduct_component_1 = require("./addproduct/addproduct.component");
var placedorders_component_1 = require("./placedorders/placedorders.component");
var updatestatus_component_1 = require("./updatestatus/updatestatus.component");
var tokeninterceptor_service_1 = require("./services/tokeninterceptor.service");
var user_service_1 = require("./services/user.service");
var serach_component_1 = require("./serach/serach.component");
var admin_header_component_1 = require("./admin-header/admin-header.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                preview_component_1.PreviewComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                cart_component_1.CartComponent,
                payment_component_1.PaymentComponent,
                dashboard_component_1.DashboardComponent,
                admin_component_1.AdminComponent,
                search_pipe_1.SearchPipe,
                order_component_1.OrderComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_edit_details_component_1.AdminEditDetailsComponent,
                addproduct_component_1.AddproductComponent,
                placedorders_component_1.PlacedordersComponent,
                updatestatus_component_1.UpdatestatusComponent,
                serach_component_1.SerachComponent,
                admin_header_component_1.AdminHeaderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [user_service_1.UserService, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: tokeninterceptor_service_1.TokeninterceptorService,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
