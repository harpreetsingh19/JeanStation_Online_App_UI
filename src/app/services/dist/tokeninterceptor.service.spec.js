"use strict";
exports.__esModule = true;
var http_1 = require("@angular/common/http");
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("../app-routing.module");
var tokeninterceptor_service_1 = require("./tokeninterceptor.service");
var user_service_1 = require("./user.service");
describe('TokeninterceptorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
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
        service = testing_1.TestBed.inject(tokeninterceptor_service_1.TokeninterceptorService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
