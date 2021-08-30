"use strict";
exports.__esModule = true;
var http_1 = require("@angular/common/http");
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("../app-routing.module");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var header_component_1 = require("../header/header.component");
var tokeninterceptor_service_1 = require("../services/tokeninterceptor.service");
var user_service_1 = require("../services/user.service");
var can_active_guard_1 = require("./can-active.guard");
describe('CanActiveGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_component_1.DashboardComponent,
                header_component_1.HeaderComponent],
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
                }]
        });
        guard = testing_1.TestBed.inject(can_active_guard_1.CanActiveGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
