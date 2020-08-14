(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.options = {
            title: 'Bildirim!',
            msg: "",
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap',
            type: ""
        };
        this.toastyConfig.position = 'top-right';
    }
    AlertComponent.prototype.addToast = function (message, type) {
        this.options.msg = message;
        this.options.type = type;
        console.log(this.options, this.toastyConfig);
        var toastOptions = {
            title: this.options.title,
            msg: this.options.msg,
            showClose: this.options.showClose,
            timeout: this.options.timeout,
            theme: this.options.theme,
        };
        switch (this.options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: "<ng2-toasty [position]=\"'top-right'\"></ng2-toasty>",
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyService"], ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyConfig"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url.service */ "./src/app/url.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ApiService = /** @class */ (function () {
    function ApiService(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    }
    ApiService.prototype.checkToken = function (res) {
        if (res.status === 401) {
            localStorage.removeItem("token");
            this.router.navigate(["/"]);
            window.alert("Kullanıcı izni geçersiz!");
        }
    };
    //Cancel service
    ApiService.prototype.cancelInvoice = function (invoice) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.put(this.urlService.getUrl("invoices", invoice.id), { "status": -1 }, { headers: this.headers }).toPromise()
                        .then(function (res) {
                        console.log("success", res);
                    })
                        .catch(function (res) {
                        console.log("Eyvah", res);
                        _this.checkToken(res);
                    })];
            });
        });
    };
    //Invoice service
    ApiService.prototype.postInvoice = function (invoice) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return __generator(this, function (_a) {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
                return [2 /*return*/, this.http.post(this.urlService.getUrl("invoices"), invoice, { headers: headers }).toPromise()
                        .then(function (res) {
                        console.log("success", res);
                        return res;
                    })
                        .catch(function (res) {
                        console.log("Eyvah", res);
                        _this.checkToken(res);
                        return Object(q__WEBPACK_IMPORTED_MODULE_4__["reject"])(res.error.message);
                    })];
            });
        });
    };
    ApiService.prototype.updateInvoice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.urlService.getUrl("invoices/files"), {}, { headers: this.headers }).toPromise()
                        .then(function (res) {
                        console.log("success", res);
                        return res;
                    })
                        .catch(function (res) {
                        console.log("Eyvah", res);
                        _this.checkToken(res);
                        return Object(q__WEBPACK_IMPORTED_MODULE_4__["reject"])(res.error.message);
                    })];
            });
        });
    };
    //List service
    ApiService.prototype.getList = function () {
        var _this = this;
        return this.http.get(this.urlService.getUrl("invoices"), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            console.log("success", res);
            return res;
        })
            .catch(function (res) {
            console.log("Eyvah", res);
            _this.checkToken(res);
            return res;
        });
    };
    //Login service 
    ApiService.prototype.checkUser = function (username, password) {
        var user = { loginName: username, password: password };
        return this.http.post(this.urlService.getUrl("session"), user).toPromise()
            .then(function (res) {
            localStorage.setItem("token", res["data"].token);
        })
            .catch(function (res) {
            console.log("Hebele", res);
            localStorage.removeItem("token");
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'create',
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
    },
    {
        path: 'list',
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <app-alert></app-alert>\r\n    <app-loading-screen></app-loading-screen>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _assets_directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/directives/numeric.directive */ "./src/assets/directives/numeric.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _decimalfix_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./decimalfix.directive */ "./src/app/decimalfix.directive.ts");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "./src/app/loading-screen/loading-screen.component.ts");
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading.interceptor */ "./src/app/loading.interceptor.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _assets_directives_numeric_directive__WEBPACK_IMPORTED_MODULE_10__["NumericDirective"],
                _decimalfix_directive__WEBPACK_IMPORTED_MODULE_12__["DecimalfixDirective"],
                _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_13__["LoadingScreenComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_16__["ToastyModule"].forRoot()
            ],
            providers: [
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_14__["LoadingScreenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            console.log(authenticated);
            if (authenticated) {
                return true;
            }
            else {
                window.alert("Hatalı Giriş");
                _this.router.navigate(["/"]);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(apiService) {
        this.apiService = apiService;
    }
    AuthService.prototype.isAuthenticated = function () {
        var promise = new Promise(function (resolve, reject) {
            resolve(localStorage.getItem("token"));
        });
        return promise;
    };
    AuthService.prototype.login = function (userName, password) {
        return this.apiService.checkUser(userName, password);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <img src=\"../../assets/white_logo-1.png\" alt=\"twing_logo\"  height=\"50px\">\r\n  <div class=\"menu\">\r\n    <a routerLink=\"/create\">Oluştur</a>\r\n    <a routerLink=\"/list\">Listele</a>\r\n  </div>\r\n</div>\r\n\r\n<app-loading-screen></app-loading-screen>\r\n<div class=\"container content\">\r\n  <div class=\"m-3\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"formOut(form)\">      \r\n      <div class=\"card mb-5\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Alıcı Bilgileri</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 form-group \">\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"cr1\" [(ngModel)]=\"selectTC\" name=\"rbutton\" value=\"true\" checked>\r\n                <label for=\"cr1\" class=\"custom-control-label\">Şahıs</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"cr2\" [(ngModel)]=\"selectTC\" name=\"rbutton\" value=\"false\">\r\n                <label for=\"cr2\" class=\"custom-control-label\">Şirket</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"cr3\" [(ngModel)]=\"selectTC\" name=\"rbutton\" value=\"other\">\r\n                <label for=\"cr3\" class=\"custom-control-label\">Bilim Seferberliği</label>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"selectTC == 'true'\" class=\"col-5 form-group\">\r\n              <label>Kimlik No.</label>\r\n              <input required [class.submitted]=\"formSubmitted\" minlength=\"11\" maxlength=\"11\" numeric [(ngModel)]=\"payForm.customerInfo.identityNumber\" name=\"tcNo\" #tcNo=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div *ngIf=\"selectTC == 'false' || selectTC == 'other'\" class=\"col-5 form-group\">\r\n              <label>Vergi Dairesi</label>\r\n              <input required [class.submitted]=\"formSubmitted\" numeric [(ngModel)]=\"payForm.customerInfo.taxDepartmentNumber\" name=\"debt\" #debt=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            \r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Ad</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.name\" name=\"pName\" #name=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Soyad</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.lastname\" name=\"pSurname\" #surname=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group \">\r\n              <label>E-Posta</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.email\" name=\"email\" #email=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Tel. 1</label>\r\n              <input required [class.submitted]=\"formSubmitted\" numeric [(ngModel)]=\"payForm.customerInfo.tel\" name=\"tel1\" #tel1=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Tel. 2</label>\r\n              <input [class.submitted]=\"formSubmitted\" numeric [(ngModel)]=\"payForm.customerInfo.telOpt\" name=\"tel2\" #tel2=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card mb-5\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Adres Bilgileri</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Ülke</label>\r\n              <ng-select required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"selectedCountry\" name=\"country\" >\r\n                <ng-option [value]=\"country\" *ngFor=\"let country of countries\">\r\n                  {{ country.name }}\r\n                </ng-option>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Şehir</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.city\" name=\"city\" #city=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>İlçe</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.district\" name=\"region\" #region=\"ngModel\" type=\"text\" class=\"form-control\">\r\n              <div class=\"custom-control custom-checkbox mt-2\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"ch\" [(ngModel)]=\"isSame\" name=\"check\" checked>\r\n                <label class=\"custom-control-label\" for=\"ch\">Fatura Adresi ve Sevkiyat Adresi aynı.</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Adres</label>\r\n              <textarea required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.address\" rows=\"5\" name=\"adress\" #adress=\"ngModel\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card mb-5\" *ngIf=\"!isSame\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Sevkiyat Bilgileri</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Unvan</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"shipmentInfo.title\" name=\"nickS\" #nickS=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>E-Posta</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"shipmentInfo.email\" name=\"emailS\" #emailS=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Tel. 1</label>\r\n              <input required [class.submitted]=\"formSubmitted\" numeric [(ngModel)]=\"shipmentInfo.tel\" name=\"tel1S\" #tel1S=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Tel. 2</label>\r\n              <input [class.submitted]=\"formSubmitted\" numeric [(ngModel)]=\"shipmentInfo.telOpt\" name=\"tel2S\" #tel2S=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Ülke</label>\r\n              <ng-select required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"selectedCountryS\" name=\"countryS\" >\r\n                <ng-option [value]=\"country\" *ngFor=\"let country of countries\">\r\n                  {{ country.name }}\r\n                </ng-option>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Şehir</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"shipmentInfo.city\" name=\"cityS\" #cityS=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>            \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>İlçe</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"shipmentInfo.district\" name=\"regionS\" #regionS=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Adres</label>\r\n              <textarea required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"shipmentInfo.address\" rows=\"5\" name=\"adressS\" #adressS=\"ngModel\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card mb-5\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Ödeme Bilgileri</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group \">\r\n              <label>Tarih</label>\r\n              <input required [class.submitted]=\"formSubmitted\" type=\"date\" [(ngModel)]=\"payForm.paymentDate\" name=\"date\" #date=\"ngModel\" rows=\"5\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Unvan</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.customerInfo.title\" name=\"nick\" #nick=\"ngModel\" type=\"text\" class=\"form-control\">\r\n            </div>            \r\n          </div>\r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Ödeme Şekli</label>\r\n              <select required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.paymentMethod\" name=\"payStyle\" #paystyle=\"ngModel\" class=\"form-control\">\r\n                <option value=\"KrediKarti_BankaKarti\">Kredi Kartı</option>\r\n                <option value=\"EFT_Havale\">EFT/Havale</option>          \r\n              </select>\r\n            </div>\r\n            \r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Döviz Türü</label>\r\n              <select required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.currency\" name=\"doviz\" #doviz=\"ngModel\" class=\"form-control\">\r\n                <option value=\"TL\">TL</option>\r\n                <option value=\"EUR\">EUR</option>\r\n                <option value=\"USD\">USD</option>\r\n              </select>\r\n            </div>\r\n          </div>   \r\n    \r\n          <div class=\"row\">\r\n            <div class=\"col-5 form-group\">\r\n              <label>Kargo Firması</label>\r\n              <select required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.shipmentCode\" name=\"eacode\" #eacode=\"ngModel\" class=\"form-control\">\r\n                <option value=\"EKOL\">Ekol</option>\r\n                <option value=\"DHL\">DHL Inc.</option>\r\n                <option value=\"FEDEX\">Federal Express Corporation</option>          \r\n                <option value=\"UPS\">United Parcel of Service of America Inc.</option>\r\n                <option value=\"YURTICI\">Yurtiçi Kargo</option>          \r\n                <option value=\"MNGKRG\">MNG Kargo</option>\r\n                <option value=\"ARASKRG\">Aras Kargo</option>          \r\n                <option value=\"DSLLOJ\">DSL Lojistik</option>\r\n                <option value=\"HKHZLKRG\">HK Hızlı Kargo</option>          \r\n              </select>\r\n            </div>\r\n            \r\n            <div class=\"col-5 form-group ml-2\">\r\n              <label>Satıcı Website Url</label>\r\n              <input required [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.merchantUrl\" type=\"text\" name=\"eaurl\" #eaurl=\"ngModel\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n\r\n      <div class=\"card mb-4\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Ürünler</h3>\r\n          \r\n          <ul class=\"list-group list-group-flush\">\r\n            <li *ngFor=\"let item of payForm.products; let i=index\" style=\"width: 100%;\" class=\"row list-group-item\">\r\n              <div class=\"col-3 form-group\">\r\n                <label>Kod</label>\r\n                <ng-select required [items]=\"materials\" bindValue=\"code\" bindLabel=\"title\" [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.products[i].code\" name=\"codeX\" ></ng-select>\r\n              </div>\r\n              \r\n              <div class=\"form-group ml-2\" style=\"width: 110px;\">\r\n                <label>Miktar</label>\r\n                <input required [class.submitted]=\"formSubmitted\" numeric min=\"0\" [(ngModel)]=\"payForm.products[i].quantity\" (ngModelChange)=\"calculateSummary()\" name=\"quantity{{i}}\" #quantity=\"ngModel\" type=\"number\" class=\"form-control\">\r\n              </div>\r\n    \r\n              <div class=\"form-group ml-4 border-right pr-2\" style=\"width: 130px;\">\r\n                <label>Fiyat</label>\r\n                <input required min=\"0\" [class.submitted]=\"formSubmitted\" [(ngModel)]=\"payForm.products[i].price\" (ngModelChange)=\"calculateSummary()\" name=\"price{{i}}\" #price=\"ngModel\" type=\"number\" class=\"form-control\">\r\n              </div>\r\n    \r\n              <div class=\"form-group ml-2\" style=\"width: 80px; display:inline-block; position: relative;\"  *ngFor=\"let discount of item.discounts; let j=index; trackBy:trackByFn\">\r\n                <label>İndirim {{ j + 1 }}</label>\r\n                <input min=\"0\" max=\"100\" class=\"form-control\" [(ngModel)]=\"payForm.products[i].discounts[j]\" (ngModelChange)=\"calculateSummary()\" name=\"{{i}}of{{j}}\" type=\"number\">\r\n                <button (click)=\"deleteDiscount(item, discount)\" class=\"close\" type=\"button\" style=\"position: absolute;right: 0;top: 0;font-size: inherit;\">x</button>\r\n              </div>\r\n              \r\n              <div class=\"form-group-append ml-3\" style=\"margin-top: 31px;\">          \r\n                <button (click)=\"addDiscount(item)\" class=\"btn btn-primary ml-1\" type=\"button\" *ngIf=\"payForm.products[i].discounts!=undefined && payForm.products[i].discounts.length != 3\">İndirim Ekle</button>                \r\n              </div>\r\n              \r\n              <div class=\"form-group-append ml-3\" style=\"margin-top: 31px;right: 0;position: absolute;\">          \r\n                <button (click)=\"deleteProduct(item)\" class=\"btn btn-danger\" *ngIf=\"i!=0\">Sil</button>             \r\n              </div>\r\n            </li> \r\n          </ul>\r\n        </div>\r\n        <button type=\"button\" (click)=\"appendProduct()\" class=\"form-group-append block\">Yeni Ürün Ekle</button>\r\n      </div>\r\n\r\n      <button type=\"button\" style=\"border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;\" *ngIf=\"payForm.discounts!=undefined && payForm.discounts.length!=3\"\r\n              (click)=\"addGeneralDiscount()\" class=\"form-group-append block bg-primary mb-5\">Genel İndirim Ekle</button>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card\" style=\"margin-left: 15px;\" *ngIf=\"payForm.discounts!=undefined && payForm.discounts.length\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"card-title\">Genel İndirimler</h3>\r\n            <div class=\"form-group ml-2\" style=\"width: 80px; display:inline-block; margin-top: 31px; position: relative;\"  *ngFor=\"let discount of payForm.discounts; let j=index; trackBy:trackByFn\">\r\n              <label>İndirim {{ j + 1 }}</label>\r\n              <input min=\"0\" max=\"100\" class=\"form-control\" [(ngModel)]=\"payForm.discounts[j]\" (ngModelChange)=\"calculateSummary()\" name=\"form{{i}}of{{j}}\" type=\"number\">\r\n              <button (click)=\"deleteDiscount(payForm, discount)\" class=\"close\" type=\"button\" style=\"position: absolute;right: 0;top: 0;font-size: inherit;\">x</button>\r\n            </div>\r\n          </div>        \r\n        </div>\r\n\r\n        <div class=\"card mb-5 col-3\" style=\"width: 306px; right: 161px;  position: absolute;\">\r\n          <div class=\"card-body\">\r\n            <div>\r\n              Toplam\r\n              <span style=\"display: inline-block;margin-top: 1px; position: absolute; right: 35px;\">{{ total.toFixed(2) }}</span>\r\n            </div>\r\n            <div>\r\n              Toplam İndirim(Ürün)\r\n              <span style=\"display: inline-block; position: absolute; right: 35px;\">{{ totalDiscount.toFixed(2) }}</span>            \r\n            </div>\r\n            <div>\r\n              Toplam İndirim(Genel)\r\n              <span style=\"display: inline-block; position: absolute; right: 35px;\">{{ totalDiscountGeneral.toFixed(2) }}</span>            \r\n            </div>\r\n            <div>\r\n              Net\r\n              <span style=\"display: inline-block; position: absolute; right: 35px;margin-top: 1px;\">{{ netTotal.toFixed(2) }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n      <div class=\"form-group-append mt-3\">\r\n        <button type=\"submit\" [disabled]=\"formSubmitted && serviceNotDone && form.valid\" [class.btn-secondary]=\"formSubmitted && serviceNotDone && form.valid\" class=\"btn btn-primary\">Gönder</button>\r\n      </div>\r\n      <!--<div class=\"form-group-append mt-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"autoFill(payForm)\">Hebele</button>\r\n      </div>-->\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_class_templates_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/class-templates/products */ "./src/assets/class-templates/products.ts");
/* harmony import */ var _assets_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/services/country.service */ "./src/assets/services/country.service.ts");
/* harmony import */ var src_assets_class_templates_invoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/class-templates/invoice */ "./src/assets/class-templates/invoice.ts");
/* harmony import */ var src_assets_class_templates_shipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/class-templates/shipment */ "./src/assets/class-templates/shipment.ts");
/* harmony import */ var src_assets_services_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/services/material.service */ "./src/assets/services/material.service.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../url.service */ "./src/app/url.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateComponent = /** @class */ (function () {
    function CreateComponent(countryservice, urlService, materialService, alertComponent) {
        this.countryservice = countryservice;
        this.urlService = urlService;
        this.materialService = materialService;
        this.alertComponent = alertComponent;
        this.payForm = new src_assets_class_templates_invoice__WEBPACK_IMPORTED_MODULE_3__["Invoice"];
        this.shipmentInfo = new src_assets_class_templates_shipment__WEBPACK_IMPORTED_MODULE_4__["Shipment"];
        this.isSame = true;
        this.selectTC = "true";
        this.total = 0;
        this.totalDiscount = 0;
        this.totalDiscountGeneral = 0;
        this.netTotal = 0;
        this.serviceNotDone = false;
        this.formSubmitted = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.materials = this.materialService.getMaterials();
        this.countries = this.countryservice.getCountries();
    };
    CreateComponent.prototype.appendProduct = function () {
        var products = new _assets_class_templates_products__WEBPACK_IMPORTED_MODULE_1__["Products"]();
        this.payForm.products.push(products);
    };
    CreateComponent.prototype.formOut = function (form) {
        var _this = this;
        this.formSubmitted = true;
        if (form.valid) {
            this.clean(this.payForm);
            this.serviceNotDone = true;
            this.payForm.customerInfo.country = this.selectedCountry.name;
            this.payForm.customerInfo.countryCode = this.selectedCountry.code;
            if (!this.isSame) {
                this.shipmentInfo.country = this.selectedCountryS.name;
                this.shipmentInfo.countryCode = this.selectedCountryS.code;
            }
            else {
                var shipmentIn = __assign({}, this.payForm.customerInfo);
                delete shipmentIn.name;
                delete shipmentIn.lastname;
                delete shipmentIn.taxDepartmentNumber;
                delete shipmentIn.identityNumber;
                this.shipmentInfo = __assign({}, shipmentIn);
            }
            this.payForm.shipmentInfo = this.shipmentInfo;
            this.urlService.httpPost("invoices", this.payForm)
                .then(function (res) {
                window.alert("Fatura başarıyla oluşturuldu. Fatura numaran: " + res.data);
                _this.payForm = new src_assets_class_templates_invoice__WEBPACK_IMPORTED_MODULE_3__["Invoice"];
                _this.shipmentInfo = new src_assets_class_templates_shipment__WEBPACK_IMPORTED_MODULE_4__["Shipment"];
                _this.selectedCountryS = { "code": null, "name": null };
                _this.selectedCountry = { "code": null, "name": null };
                _this.formSubmitted = false;
                form.reset();
                _this.serviceNotDone = false;
            })
                .catch(function (msg) {
                _this.alertComponent.addToast("Servis isteğinizi reddetti." + msg, 'error');
                _this.formSubmitted = false;
                _this.serviceNotDone = false;
            });
        }
        else {
            this.alertComponent.addToast("Kırmızı ile işaretlenmiş alanı doldurmalısınız.", 'error');
        }
    };
    CreateComponent.prototype.deleteProduct = function (product) {
        this.payForm.products = this.payForm.products.filter(function (p) { return p !== product; });
    };
    CreateComponent.prototype.deleteDiscount = function (product, discount) {
        var index = product.discounts.indexOf(discount);
        if (index !== -1) {
            product.discounts.splice(index, 1);
        }
        this.calculateSummary();
    };
    CreateComponent.prototype.addDiscount = function (product) {
        if (product.discounts.length < 3) {
            product.discounts.push(null);
        }
    };
    CreateComponent.prototype.addGeneralDiscount = function () {
        if (this.payForm.discounts.length < 3) {
            this.payForm.discounts.push(null);
        }
    };
    CreateComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    CreateComponent.prototype.calculateSummary = function () {
        this._total();
        this._discount();
        this._net();
        this._discountGeneral();
        this.netTotal -= this.totalDiscountGeneral;
    };
    CreateComponent.prototype._total = function () {
        var _this = this;
        this.total = 0;
        this.payForm.products.forEach(function (product) {
            _this.total += (product.price ? product.price : 0) * product.quantity;
        });
    };
    CreateComponent.prototype._discount = function () {
        var _this = this;
        this.totalDiscount = 0;
        this.payForm.products.forEach(function (product) {
            var newPrice = product.price * product.quantity;
            product.discounts.forEach(function (discount) {
                _this.totalDiscount += (newPrice * discount) / 100;
                newPrice -= (newPrice * discount) / 100;
            });
        });
    };
    CreateComponent.prototype._discountGeneral = function () {
        var _this = this;
        this.totalDiscountGeneral = 0;
        var newPrice = this.netTotal;
        this.payForm.discounts.forEach(function (discount) {
            _this.totalDiscountGeneral += (newPrice * discount) / 100;
            newPrice -= (newPrice * discount) / 100;
        });
    };
    CreateComponent.prototype._net = function () {
        this.netTotal = this.total - this.totalDiscount;
    };
    CreateComponent.prototype.clean = function (obj) {
        for (var propName in obj) {
            if (typeof obj[propName] == "object" && !(Array.isArray(obj[propName]) && obj[propName].length == 0)) {
                this.clean(obj[propName]);
            }
            else if (obj[propName] === undefined || obj[propName] == "" || obj[propName] === null || obj[propName].length == 0) {
                delete obj[propName];
            }
        }
    };
    CreateComponent.prototype.autoFill = function (obj) {
        for (var propName in obj) {
            if (typeof obj[propName] == "object") {
                this.autoFill(obj[propName]);
            }
            else if (typeof obj[propName] == "number") {
                obj[propName] = 1;
            }
            else if (typeof obj[propName] === "string") {
                obj[propName] = "Hebele";
            }
        }
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            providers: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_assets_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"], _url_service__WEBPACK_IMPORTED_MODULE_7__["UrlService"],
            src_assets_services_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/decimalfix.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/decimalfix.directive.ts ***!
  \*****************************************/
/*! exports provided: DecimalfixDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalfixDirective", function() { return DecimalfixDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DecimalfixDirective = /** @class */ (function () {
    function DecimalfixDirective(el) {
        this.el = el;
        this.min = -Infinity;
        this.max = Infinity;
        this.decimalSeparator = ',';
        this.hasDecimalPoint = false;
        this.inputElement = el.nativeElement;
    }
    DecimalfixDirective.prototype.ngOnChanges = function (changes) {
        if (changes.min) {
            var maybeMin = Number(this.min);
            this.min = isNaN(maybeMin) ? -Infinity : maybeMin;
        }
        if (changes.max) {
            var maybeMax = Number(this.max);
            this.max = isNaN(maybeMax) ? Infinity : maybeMax;
        }
    };
    DecimalfixDirective.prototype.onKeyDown = function (e) {
        if (((e.key === ',') && !this.hasDecimalPoint) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        else if ((e.key === this.decimalSeparator) && this.hasDecimalPoint) {
            e.preventDefault();
        }
        if (isNaN(Number(e.key))) {
            e.preventDefault();
        }
        var oldValue = this.inputElement.value;
        var newKey = e.key == ',' ? '.' : e.key;
        var newValue = (oldValue + newKey);
        console.log(oldValue, newValue);
        if (parseFloat(newValue) > this.max || parseFloat(newValue) < this.min) {
            e.preventDefault();
        }
    };
    DecimalfixDirective.prototype.onKeyUp = function (e) {
        this.updateDecimalPoint();
    };
    DecimalfixDirective.prototype.updateDecimalPoint = function () {
        this.hasDecimalPoint =
            (this.inputElement.value.includes(',') || this.inputElement.value.includes('.'));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DecimalfixDirective.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DecimalfixDirective.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DecimalfixDirective.prototype, "decimalSeparator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", Object)
    ], DecimalfixDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DecimalfixDirective.prototype, "onKeyUp", null);
    DecimalfixDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[decimalfix]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DecimalfixDirective);
    return DecimalfixDirective;
}());



/***/ }),

/***/ "./src/app/file.service.ts":
/*!*********************************!*\
  !*** ./src/app/file.service.ts ***!
  \*********************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.exportCompanyFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    FileService.prototype.exportGoodsFile = function (json, excelFileName) {
        var date = json.paymentDate.toString().replace(/\:|\./g, '');
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet([
            { A: "WorkOrderNo", B: "ArticleCode", C: "CompanyCode", D: "Quantity", E: "EDESPATCHURL" }
        ], { header: ["A", "B", "C", "D", "E"], skipHeader: true });
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_add_json(worksheet, [{ A: json.id }], { skipHeader: true, origin: "A2" });
        json.products.forEach(function (product, i) {
            xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_add_json(worksheet, [
                { B: product.code }
            ], { skipHeader: true, origin: "B" + (i + 2) });
        });
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_add_json(worksheet, [
            { C: this.convertStringToEnglishChars(json.customerInfo.name + json.customerInfo.lastname) + date }
        ], { skipHeader: true, origin: "C2" });
        json.products.forEach(function (product, i) {
            xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_add_json(worksheet, [
                { B: product.quantity }
            ], { skipHeader: true, origin: "D" + (i + 2) });
        });
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_add_json(worksheet, [
            { E: json.dispatchNoteFile }
        ], { skipHeader: true, origin: "E2" });
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    FileService.prototype.ekolMaker = function (payform) {
        var date = payform.paymentDate.toString().replace(/\:|\./g, '');
        return [{
                COMPANY_CODE: this.convertStringToEnglishChars(payform.customerInfo.name + payform.customerInfo.lastname) + date,
                COMPANY_NAME_1: payform.customerInfo.name + " " + payform.customerInfo.lastname,
                COMPANY_ADDRESS_1: payform.customerInfo.address,
                COMPANY_ADDRESS_2: "",
                CITY: payform.customerInfo.city,
                DISTRICT: payform.customerInfo.district,
                E_MAIL: payform.customerInfo.email,
                TELEPHONE_1: payform.customerInfo.tel,
                TELEPHONE_2: payform.customerInfo.telOpt
            }];
    };
    FileService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    FileService.prototype.convertStringToEnglishChars = function (phrase) {
        var str = phrase.toLowerCase();
        var charMap = {
            'ö': 'o',
            'ç': 'c',
            'ş': 's',
            'ı': 'i',
            'ğ': 'g',
            'ü': 'u'
        };
        var rx = /(ö|ç|ş|ı|ğ|ü)/g;
        // if any non-english charr exists,replace it with proper char
        if (rx.test(str)) {
            str = str.replace(rx, function (m, key, index) {
                return charMap[key];
            });
        }
        // if there are other invalid chars, convert them into blank spaces
        str = str.replace(/[^a-z\d\s-]/gi, "");
        // convert multiple spaces and hyphens into one space       
        str = str.replace(/[\s-]+/g, " ");
        // trim string
        str.replace(/^\s+|\s+$/g, "");
        // add hyphens
        str = str.replace(/\s/g, "-");
        return str;
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <img src=\"../../assets/white_logo-1.png\" alt=\"twing_logo\" height=\"50px\">\r\n  <div class=\"menu\">\r\n    <a routerLink=\"/create\">Oluştur</a>\r\n    <a routerLink=\"/list\">Listele</a>\r\n  </div>\r\n</div>\r\n<div class=\"container content\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Fatura No.\r\n          <div (change)=\"updateResults()\" (keyup)=\"updateResults()\">\r\n            <input type=\"text\" placeholder=\"Filtrele\" [(ngModel)]=\"searchValueId\">\r\n          </div></th>\r\n        <th>Ad-Soyad\r\n          <div (change)=\"updateResults()\" (keyup)=\"updateResults()\">\r\n            <input type=\"text\" placeholder=\"Filtrele\" [(ngModel)]=\"searchValueName\">\r\n          </div></th>\r\n        <th>Ülke/İl</th>\r\n        <th>Tarih</th>\r\n        <th>Durum\r\n          <div (change)=\"updateResults()\" (keyup)=\"updateResults()\">          \r\n            <select [(ngModel)]=\"filterOption\">\r\n              <option value=\"all\">Tümü</option>\r\n              <option value=\"0\">İşleniyor</option>\r\n              <option value=\"1\">Hazır</option>\r\n              <option value=\"2\">Tamamlandı</option>\r\n            </select>\r\n          </div>\r\n        </th>\r\n        <button *ngIf=\"filteredItems.length != 0\" (click)=\"exportAllAsXLSX()\" class=\"btn btn-success ml-2 mt-2\">Toplu Sipariş Exceli İndir</button>\r\n        <button (click)=\"updateInvoice()\" class=\"btn btn-primary ml-2 mb-2 mt-2\">E-İrsaliye Dosyalarını Senkronla</button>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let invoice of filteredItems\">\r\n        <td>{{ invoice.id }}</td>\r\n        <td>{{ invoice.customerInfo.name }} {{ invoice.customerInfo.lastname }}</td>\r\n        <td>{{ invoice.customerInfo.country }}/{{ invoice.customerInfo.city }}</td>\r\n        <td>{{ invoice.paymentDate | date:'dd-MM-yy' }}</td>\r\n        <td [ngSwitch]=\"invoice.status\">\r\n          <span *ngSwitchCase=\"0\" class=\"text-warning\">\r\n            <strong>İşleniyor</strong>  \r\n          </span>\r\n          <span *ngSwitchCase=\"1\" class=\"text-primary\">\r\n            <strong>Hazır</strong>\r\n          </span>\r\n          <span *ngSwitchCase=\"2\" class=\"text-success\">\r\n            <strong>Tamamlandı</strong>\r\n          </span>\r\n        </td>\r\n        <td>          \r\n          <button *ngIf=\"invoice.status == 1\" (click)=\"exportAsXLSX(invoice)\" class=\"btn btn-success\">Sipariş Exceli İndir</button>\r\n          <button *ngIf=\"invoice.status == 0\" (click)=\"cancelInvoice(invoice)\" class=\"btn btn-danger\">İptal Et</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file.service */ "./src/app/file.service.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../url.service */ "./src/app/url.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ListComponent = /** @class */ (function () {
    function ListComponent(fileService, urlService, alertComponent) {
        this.fileService = fileService;
        this.urlService = urlService;
        this.alertComponent = alertComponent;
        this.listEmpty = true;
        this.filteredItems = [];
        this.filteredItemsId = [];
        this.filteredItemsName = [];
        this.filterOption = 'all';
        this.searchValueId = '';
        this.searchValueName = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urlService.httpGet("invoices")
            .then(function (res) {
            _this.invoices = res.data;
        }).finally(function () {
            return _this.filteredItems = _this.invoices;
        });
    };
    ListComponent.prototype.cancelInvoice = function (invoice) {
        var accept = confirm("Silmek istiyor musunuz?");
        if (accept) {
            invoice.status = -1;
            this.urlService.httpPut("invoices", { "status": -1 }, invoice.id);
            this.filteredItems = this.filteredItems.filter(function (p) { return p.status != -1; });
        }
    };
    ListComponent.prototype.exportAsXLSX = function (data) {
        var arrayData = this.fileService.ekolMaker(data);
        this.fileService.exportCompanyFile(arrayData, 'company');
        this.fileService.exportGoodsFile(data, 'goods');
    };
    ListComponent.prototype.exportAllAsXLSX = function () {
        var _this = this;
        this.invoices.forEach(function (invoice) {
            if (invoice.status == 1) {
                var arrayData = _this.fileService.ekolMaker(invoice);
                _this.fileService.exportCompanyFile(arrayData, 'company');
                _this.fileService.exportGoodsFile(invoice, 'goods');
            }
        });
    };
    ListComponent.prototype.updateResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.filteredItems = this.invoices;
                this.filteredItemsId = this.filterByOption(this.searchById(this.invoices));
                this.filteredItemsName = this.filterByOption(this.searchByName(this.invoices));
                this.filteredItems = this.filteredItems.filter(function (value) { return _this.filteredItemsName.includes(value)
                    && _this.filteredItemsId.includes(value); });
                return [2 /*return*/];
            });
        });
    };
    ListComponent.prototype.searchById = function (items) {
        var _this = this;
        return items.filter(function (item) {
            if (_this.searchValueId.trim() === '') {
                return true;
            }
            else {
                return item.id.toLowerCase().includes(_this.searchValueId.trim().toLocaleLowerCase());
            }
        });
    };
    ListComponent.prototype.searchByName = function (items) {
        var _this = this;
        return items.filter(function (item) {
            if (_this.searchValueName.trim() === '') {
                return true;
            }
            else {
                return item.customerInfo.name.toLowerCase().includes(_this.searchValueName.trim().toLocaleLowerCase())
                    || item.customerInfo.lastname.toLowerCase().includes(_this.searchValueName.trim().toLocaleLowerCase());
            }
        });
    };
    ListComponent.prototype.filterByOption = function (items) {
        var _this = this;
        return items.filter(function (item) {
            if (_this.filterOption === 'all' || _this.filterOption === item.status.toString()) {
                return true;
            }
        });
    };
    ListComponent.prototype.updateInvoice = function () {
        var _this = this;
        this.urlService.httpPost("invoices/files", {})
            .then(function (res) {
            if (res.data.length !== 0) {
                res.data.forEach(function (invoice) {
                    var index = _this.invoices.indexOf(invoice);
                    if (index !== -1) {
                        _this.invoices[index] = invoice;
                    }
                });
                _this.updateResults();
                _this.alertComponent.addToast("Senkronizasyon Başarılı.", "success");
            }
            else {
                _this.alertComponent.addToast("Senkronizasyon için dosya bulunamadı.", "error");
            }
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            providers: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"], _url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"],
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/loading-screen.service.ts":
/*!*******************************************!*\
  !*** ./src/app/loading-screen.service.ts ***!
  \*******************************************/
/*! exports provided: LoadingScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenService", function() { return LoadingScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadingScreenService = /** @class */ (function () {
    function LoadingScreenService() {
        /*private _loading: boolean = false;
        loadingStatus: Subject<boolean> = new Subject();
      
        get loading():boolean {
          return this._loading;
        }
      
        set loading(value) {
          this._loading = value;
          this.loadingStatus.next(value);
        }
      
        startLoading() {
          this.loading = true;
        }
      
        stopLoading() {
          this.loading = false;
        }*/
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LoadingScreenService.prototype.show = function () {
        this.isLoading.next(true);
    };
    LoadingScreenService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    LoadingScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LoadingScreenService);
    return LoadingScreenService;
}());



/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.css":
/*!*************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerM {\r\n  position: fixed;\r\n  background-color:rgba(233, 233, 233, 0.459);\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.containerX {\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n}\r\n\r\n.dash {\r\n  margin: 0 15px;\r\n  width: 35px;\r\n  height: 15px;\r\n  border-radius: 8px;\r\n  background: #FF2CBD;\r\n  box-shadow: 0 0 10px 0 #FECDFF;\r\n}\r\n\r\n.uno {\r\n  margin-right: -18px;\r\n  transform-origin: center left;\r\n  -webkit-animation: spin 3s linear infinite;\r\n          animation: spin 3s linear infinite;  \r\n}\r\n\r\n.dos {\r\n  transform-origin: center right;\r\n  -webkit-animation: spin2 3s linear infinite;\r\n          animation: spin2 3s linear infinite;\r\n  -webkit-animation-delay: .2s;\r\n          animation-delay: .2s;\r\n}\r\n\r\n.tres {\r\n  transform-origin: center right;\r\n  -webkit-animation: spin3 3s linear infinite;\r\n          animation: spin3 3s linear infinite;\r\n  -webkit-animation-delay: .3s;\r\n          animation-delay: .3s;\r\n}\r\n\r\n.cuatro {\r\n  transform-origin: center right;\r\n  -webkit-animation: spin4 3s linear infinite;\r\n          animation: spin4 3s linear infinite;\r\n  -webkit-animation-delay: .4s;\r\n          animation-delay: .4s;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  25% {\r\n    transform: rotate(360deg);\r\n  }\r\n  30% {\r\n    transform: rotate(370deg);\r\n  }\r\n  35% {\r\n    transform: rotate(360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  25% {\r\n    transform: rotate(360deg);\r\n  }\r\n  30% {\r\n    transform: rotate(370deg);\r\n  }\r\n  35% {\r\n    transform: rotate(360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin2 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  20% {\r\n    transform: rotate(0deg);\r\n  }\r\n  30% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  35% {\r\n    transform: rotate(-190deg);\r\n  }\r\n  40% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  78% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  95% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  98% {\r\n    transform: rotate(-370deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin2 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  20% {\r\n    transform: rotate(0deg);\r\n  }\r\n  30% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  35% {\r\n    transform: rotate(-190deg);\r\n  }\r\n  40% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  78% {\r\n    transform: rotate(-180deg);\r\n  }\r\n  95% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  98% {\r\n    transform: rotate(-370deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  27% {\r\n    transform: rotate(0deg);  \r\n  }\r\n  40% {\r\n    transform: rotate(180deg);\r\n  }\r\n  45% {\r\n    transform: rotate(190deg);\r\n  }\r\n  50% {\r\n    transform: rotate(180deg);\r\n  }\r\n  62% {\r\n    transform: rotate(180deg);\r\n  }\r\n  75% {\r\n    transform: rotate(360deg);\r\n  }\r\n  80% {\r\n    transform: rotate(370deg);\r\n  }\r\n  85% {\r\n    transform: rotate(360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  27% {\r\n    transform: rotate(0deg);  \r\n  }\r\n  40% {\r\n    transform: rotate(180deg);\r\n  }\r\n  45% {\r\n    transform: rotate(190deg);\r\n  }\r\n  50% {\r\n    transform: rotate(180deg);\r\n  }\r\n  62% {\r\n    transform: rotate(180deg);\r\n  }\r\n  75% {\r\n    transform: rotate(360deg);\r\n  }\r\n  80% {\r\n    transform: rotate(370deg);\r\n  }\r\n  85% {\r\n    transform: rotate(360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes spin4 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  38% {\r\n    transform: rotate(0deg);\r\n  }\r\n  60% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  65% {\r\n    transform: rotate(-370deg);\r\n  }\r\n  75% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin4 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  38% {\r\n    transform: rotate(0deg);\r\n  }\r\n  60% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  65% {\r\n    transform: rotate(-370deg);\r\n  }\r\n  75% {\r\n    transform: rotate(-360deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLDRCQUFvQjtVQUFwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQWhCQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQTVCQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUEvQkE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBbkJBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lck0ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjMzLCAyMzMsIDIzMywgMC40NTkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyWCB7XHJcbiAgei1pbmRleDogNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kYXNoIHtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRjJDQkQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjRkVDREZGO1xyXG59XHJcblxyXG4udW5vIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7ICBcclxufVxyXG5cclxuLmRvcyB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xyXG4gIGFuaW1hdGlvbjogc3BpbjIgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjJzO1xyXG59XHJcblxyXG4udHJlcyB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xyXG4gIGFuaW1hdGlvbjogc3BpbjMgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjNzO1xyXG59XHJcblxyXG4uY3VhdHJvIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbiAgYW5pbWF0aW9uOiBzcGluNCAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzcwZGVnKTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbjIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOTBkZWcpO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG4gIDc4JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIH1cclxuICA5OCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM3MGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4zIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMjclIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgXHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTkwZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIDYyJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM3MGRlZyk7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW40IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMzglIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzcwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.html":
/*!**************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerM\" *ngIf=\"isLoading | async\">\r\n  <div class=\"containerX\">\r\n    <div class=\"dash uno\"></div>\r\n    <div class=\"dash dos\"></div>\r\n    <div class=\"dash tres\"></div>\r\n    <div class=\"dash cuatro\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-screen.service */ "./src/app/loading-screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.loading = false;
        this.isLoading = this.loadingScreenService.isLoading;
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
        /*this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value) => {
          this.loading = value;
        });*/
    };
    LoadingScreenComponent.prototype.ngOnDestroy = function () {
        /*this.loadingSubscription.unsubscribe();*/
    };
    LoadingScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-screen',
            template: __webpack_require__(/*! ./loading-screen.component.html */ "./src/app/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__(/*! ./loading-screen.component.css */ "./src/app/loading-screen/loading-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_loading_screen_service__WEBPACK_IMPORTED_MODULE_1__["LoadingScreenService"]])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/loading.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/loading.interceptor.ts ***!
  \****************************************/
/*! exports provided: LoadingScreenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenInterceptor", function() { return LoadingScreenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-screen.service */ "./src/app/loading-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingScreenInterceptor = /** @class */ (function () {
    function LoadingScreenInterceptor(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.activeRequests = 0;
        this.skippUrls = [
            '/authrefresh',
        ];
    }
    LoadingScreenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (this.activeRequests === 0) {
            this.loadingScreenService.show();
        }
        this.activeRequests++;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.activeRequests--;
            if (_this.activeRequests === 0) {
                _this.loadingScreenService.hide();
            }
        }));
    };
    ;
    LoadingScreenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_loading_screen_service__WEBPACK_IMPORTED_MODULE_1__["LoadingScreenService"]])
    ], LoadingScreenInterceptor);
    return LoadingScreenInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-5\">\r\n  <div class=\"m-3\">\r\n    <div class=\"row m-4\">\r\n      <img src=\"../../assets/logo.png\" alt=\"twing_logo\" height=\"100px\" style=\"margin-left:105px\">\r\n    </div>    \r\n    <form #formLogin=\"ngForm\" (ngSubmit)=\"login(formLogin)\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-body\">\r\n            <div class=\"col form-group\">\r\n              \r\n              <label>Kullanıcı Adı</label>\r\n              <input required [class.submitted]=\"formSubmitted\" type=\"text\" [(ngModel)]=\"userName\" name=\"user\" class=\"form-control\">\r\n              \r\n              <label>Şifre</label>\r\n              <input required [class.submitted]=\"formSubmitted\" type=\"password\" [(ngModel)]=\"password\" name=\"pass\" class=\"form-control\">\r\n\r\n              <div class=\"form-group-append mt-3\">\r\n                <button type=\"submit\" [disabled]=\"formSubmitted && serviceNotDone && formLogin.valid\" [class.btn-secondary]=\"formSubmitted && serviceNotDone && formLogin.valid\" class=\"btn btn-primary\">Giriş</button>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.formSubmitted = false;
        this.serviceNotDone = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (formLogin) {
        var _this = this;
        this.formSubmitted = true;
        if (formLogin.valid) {
            this.serviceNotDone = true;
            this.authService.login(this.userName, this.password).then(function (res) {
                _this.router.navigate(["/create"]);
                formLogin.reset();
                _this.serviceNotDone = false;
            });
            this.formSubmitted = false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/url.service.ts":
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlService = /** @class */ (function () {
    function UrlService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "https://twin-sales-operation.azurewebsites.net";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    }
    UrlService.prototype.getUrl = function (endpoint, id) {
        if (endpoint) {
            if (id) {
                return this.url + "/" + endpoint + "/" + id;
            }
            return this.url + "/" + endpoint;
        }
        return this.url;
    };
    UrlService.prototype.checkToken = function (res) {
        if (res.status === 401) {
            localStorage.removeItem("token");
            this.router.navigate(["/"]);
            window.alert("Kullanıcı izni geçersiz!");
        }
    };
    UrlService.prototype.httpPut = function (endpoint, body, id) {
        var _this = this;
        return this.http.put(this.getUrl(endpoint, id), body, { headers: this.headers }).toPromise()
            .then(function (res) {
            console.log("success", res);
            return res;
        }).catch(function (res) {
            console.log("Eyvah", res);
            _this.checkToken(res);
            return Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(res.error.message);
        });
    };
    UrlService.prototype.httpPost = function (endpoint, body) {
        var _this = this;
        return this.http.post(this.getUrl(endpoint), body, { headers: this.headers }).toPromise()
            .then(function (res) {
            console.log("success", res);
            return res;
        }).catch(function (res) {
            console.log("Eyvah", res);
            _this.checkToken(res);
            return Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(res.error.message);
        });
    };
    UrlService.prototype.httpGet = function (endpoint) {
        var _this = this;
        return this.http.get(this.getUrl(endpoint), { headers: this.headers }).toPromise()
            .then(function (res) {
            console.log("success", res);
            return res;
        }).catch(function (res) {
            console.log("Eyvah", res);
            _this.checkToken(res);
            return Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(res.error.message);
        });
    };
    //Login service 
    UrlService.prototype.checkUser = function (username, password) {
        var user = { loginName: username, password: password };
        return this.http.post(this.getUrl("session"), user).toPromise()
            .then(function (res) {
            localStorage.setItem("token", res["data"].token);
        })
            .catch(function (res) {
            console.log("Hebele", res);
            localStorage.removeItem("token");
        });
    };
    UrlService.prototype.returnResponse = function (res) {
        if (res.status === 200) {
            var body = void 0;
            try {
                body = JSON.parse(res._body);
            }
            catch (error) {
                body = res._body;
            }
            return body.data || body || {};
        }
        else {
            return Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])('Something bad happened; please try again later.');
        }
    };
    UrlService.prototype.handleError = function (error) {
        console.log('error handler', error);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            this.checkToken(error);
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        var errorBody;
        try {
            errorBody = JSON.parse(error._body);
        }
        catch (error) {
            errorBody = error._body;
        }
        // return an observable with a user-facing error message
        return Object(q__WEBPACK_IMPORTED_MODULE_3__["reject"])(errorBody.message || 'Something bad happened; please try again later.');
    };
    ;
    UrlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/assets/class-templates/customer.ts":
/*!************************************************!*\
  !*** ./src/assets/class-templates/customer.ts ***!
  \************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.name = "";
        this.lastname = "";
        this.title = "";
        this.address = "";
        this.district = "";
        this.city = "";
        this.countryCode = "";
        this.country = "";
        this.tel = undefined;
        this.telOpt = undefined;
        this.email = "";
        this.taxDepartmentNumber = "";
        this.identityNumber = undefined;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/assets/class-templates/invoice.ts":
/*!***********************************************!*\
  !*** ./src/assets/class-templates/invoice.ts ***!
  \***********************************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/assets/class-templates/customer.ts");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./src/assets/class-templates/products.ts");
/* harmony import */ var _shipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipment */ "./src/assets/class-templates/shipment.ts");



var Invoice = /** @class */ (function () {
    function Invoice() {
        this.id = "";
        this.merchantUrl = "";
        this.shipmentCode = "EKOL";
        this.paymentMethod = "KrediKarti_BankaKarti";
        this.paymentDate = null;
        this.currency = "";
        this.customerInfo = new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
        this.products = [new _products__WEBPACK_IMPORTED_MODULE_1__["Products"]()];
        this.discounts = [];
        this.fileUrl = "";
        this.dispatchNoteFile = "";
        this.status = undefined;
        this.shipmentInfo = new _shipment__WEBPACK_IMPORTED_MODULE_2__["Shipment"]();
    }
    return Invoice;
}());



/***/ }),

/***/ "./src/assets/class-templates/products.ts":
/*!************************************************!*\
  !*** ./src/assets/class-templates/products.ts ***!
  \************************************************/
/*! exports provided: Products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
var Products = /** @class */ (function () {
    function Products() {
        this.code = "";
        this.quantity = 1;
        this.price = null;
        this.discounts = [];
    }
    return Products;
}());



/***/ }),

/***/ "./src/assets/class-templates/shipment.ts":
/*!************************************************!*\
  !*** ./src/assets/class-templates/shipment.ts ***!
  \************************************************/
/*! exports provided: Shipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipment", function() { return Shipment; });
var Shipment = /** @class */ (function () {
    function Shipment() {
        this.title = "";
        this.address = "";
        this.district = "";
        this.city = "";
        this.countryCode = "TR";
        this.country = "Türkiye";
        this.tel = undefined;
        this.telOpt = undefined;
        this.email = "";
    }
    return Shipment;
}());



/***/ }),

/***/ "./src/assets/countries.json":
/*!***********************************!*\
  !*** ./src/assets/countries.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, default */
/***/ (function(module) {

module.exports = [{"code":"TR","name":"Türkiye"},{"code":"VI","name":"ABD Virgin Adaları"},{"code":"AF","name":"Afganistan"},{"code":"AX","name":"Aland Adaları"},{"code":"DE","name":"Almanya"},{"code":"US","name":"Amerika Birleşik Devletleri"},{"code":"UM","name":"Amerika Birleşik Devletleri Küçük Dış Adaları"},{"code":"AS","name":"Amerikan Samoası"},{"code":"AD","name":"Andora"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AQ","name":"Antarktika"},{"code":"AG","name":"Antigua ve Barbuda"},{"code":"AR","name":"Arjantin"},{"code":"AL","name":"Arnavutluk"},{"code":"AW","name":"Aruba"},{"code":"QU","name":"Avrupa Birliği"},{"code":"AU","name":"Avustralya"},{"code":"AT","name":"Avusturya"},{"code":"AZ","name":"Azerbaycan"},{"code":"BS","name":"Bahamalar"},{"code":"BH","name":"Bahreyn"},{"code":"BD","name":"Bangladeş"},{"code":"BB","name":"Barbados"},{"code":"EH","name":"Batı Sahara"},{"code":"BZ","name":"Belize"},{"code":"BE","name":"Belçika"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BY","name":"Beyaz Rusya"},{"code":"BT","name":"Bhutan"},{"code":"ZZ","name":"Bilinmeyen veya Geçersiz Bölge"},{"code":"AE","name":"Birleşik Arap Emirlikleri"},{"code":"GB","name":"Birleşik Krallık"},{"code":"BO","name":"Bolivya"},{"code":"BA","name":"Bosna Hersek"},{"code":"BW","name":"Botsvana"},{"code":"BV","name":"Bouvet Adası"},{"code":"BR","name":"Brezilya"},{"code":"BN","name":"Brunei"},{"code":"BG","name":"Bulgaristan"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"CV","name":"Cape Verde"},{"code":"GI","name":"Cebelitarık"},{"code":"DZ","name":"Cezayir"},{"code":"CX","name":"Christmas Adası"},{"code":"DJ","name":"Cibuti"},{"code":"CC","name":"Cocos Adaları"},{"code":"CK","name":"Cook Adaları"},{"code":"TD","name":"Çad"},{"code":"CZ","name":"Çek Cumhuriyeti"},{"code":"CN","name":"Çin"},{"code":"DK","name":"Danimarka"},{"code":"DM","name":"Dominik"},{"code":"DO","name":"Dominik Cumhuriyeti"},{"code":"TL","name":"Doğu Timor"},{"code":"EC","name":"Ekvator"},{"code":"GQ","name":"Ekvator Ginesi"},{"code":"SV","name":"El Salvador"},{"code":"ID","name":"Endonezya"},{"code":"ER","name":"Eritre"},{"code":"AM","name":"Ermenistan"},{"code":"EE","name":"Estonya"},{"code":"ET","name":"Etiyopya"},{"code":"FK","name":"Falkland Adaları (Malvinalar)"},{"code":"FO","name":"Faroe Adaları"},{"code":"MA","name":"Fas"},{"code":"FJ","name":"Fiji"},{"code":"CI","name":"Fildişi Sahilleri"},{"code":"PH","name":"Filipinler"},{"code":"PS","name":"Filistin Bölgesi"},{"code":"FI","name":"Finlandiya"},{"code":"FR","name":"Fransa"},{"code":"GF","name":"Fransız Guyanası"},{"code":"TF","name":"Fransız Güney Bölgeleri"},{"code":"PF","name":"Fransız Polinezyası"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GH","name":"Gana"},{"code":"GN","name":"Gine"},{"code":"GW","name":"Gine-Bissau"},{"code":"GD","name":"Granada"},{"code":"GL","name":"Grönland"},{"code":"GP","name":"Guadeloupe"},{"code":"GU","name":"Guam"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GY","name":"Guyana"},{"code":"ZA","name":"Güney Afrika"},{"code":"GS","name":"Güney Georgia ve Güney Sandwich Adaları"},{"code":"KR","name":"Güney Kore"},{"code":"CY","name":"Güney Kıbrıs Rum Kesimi"},{"code":"GE","name":"Gürcistan"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard Adası ve McDonald Adaları"},{"code":"IN","name":"Hindistan"},{"code":"IO","name":"Hint Okyanusu İngiliz Bölgesi"},{"code":"NL","name":"Hollanda"},{"code":"AN","name":"Hollanda Antilleri"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong SAR - Çin"},{"code":"HR","name":"Hırvatistan"},{"code":"IQ","name":"Irak"},{"code":"VG","name":"İngiliz Virgin Adaları"},{"code":"IR","name":"İran"},{"code":"IE","name":"İrlanda"},{"code":"ES","name":"İspanya"},{"code":"IL","name":"İsrail"},{"code":"SE","name":"İsveç"},{"code":"CH","name":"İsviçre"},{"code":"IT","name":"İtalya"},{"code":"IS","name":"İzlanda"},{"code":"JM","name":"Jamaika"},{"code":"JP","name":"Japonya"},{"code":"JE","name":"Jersey"},{"code":"KH","name":"Kamboçya"},{"code":"CM","name":"Kamerun"},{"code":"CA","name":"Kanada"},{"code":"ME","name":"Karadağ"},{"code":"QA","name":"Katar"},{"code":"KY","name":"Kayman Adaları"},{"code":"KZ","name":"Kazakistan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"CO","name":"Kolombiya"},{"code":"KM","name":"Komorlar"},{"code":"CG","name":"Kongo"},{"code":"CD","name":"Kongo Demokratik Cumhuriyeti"},{"code":"CR","name":"Kosta Rika"},{"code":"KW","name":"Kuveyt"},{"code":"KP","name":"Kuzey Kore"},{"code":"MP","name":"Kuzey Mariana Adaları"},{"code":"CU","name":"Küba"},{"code":"KG","name":"Kırgızistan"},{"code":"LA","name":"Laos"},{"code":"LS","name":"Lesotho"},{"code":"LV","name":"Letonya"},{"code":"LR","name":"Liberya"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Litvanya"},{"code":"LB","name":"Lübnan"},{"code":"LU","name":"Lüksemburg"},{"code":"HU","name":"Macaristan"},{"code":"MG","name":"Madagaskar"},{"code":"MO","name":"Makao S.A.R. Çin"},{"code":"MK","name":"Makedonya"},{"code":"MW","name":"Malavi"},{"code":"MV","name":"Maldivler"},{"code":"MY","name":"Malezya"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"IM","name":"Man Adası"},{"code":"MH","name":"Marshall Adaları"},{"code":"MQ","name":"Martinik"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Meksika"},{"code":"FM","name":"Mikronezya Federal Eyaletleri"},{"code":"MD","name":"Moldovya Cumhuriyeti"},{"code":"MC","name":"Monako"},{"code":"MS","name":"Montserrat"},{"code":"MR","name":"Moritanya"},{"code":"MZ","name":"Mozambik"},{"code":"MN","name":"Moğolistan"},{"code":"MM","name":"Myanmar"},{"code":"EG","name":"Mısır"},{"code":"NA","name":"Namibya"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NE","name":"Nijer"},{"code":"NG","name":"Nijerya"},{"code":"NI","name":"Nikaragua"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Adası"},{"code":"NO","name":"Norveç"},{"code":"CF","name":"Orta Afrika Cumhuriyeti"},{"code":"UZ","name":"Özbekistan"},{"code":"PK","name":"Pakistan"},{"code":"PW","name":"Palau"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua Yeni Gine"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PN","name":"Pitcairn"},{"code":"PL","name":"Polonya"},{"code":"PT","name":"Portekiz"},{"code":"PR","name":"Porto Riko"},{"code":"RE","name":"Reunion"},{"code":"RO","name":"Romanya"},{"code":"RW","name":"Ruanda"},{"code":"RU","name":"Rusya Federasyonu"},{"code":"SH","name":"Saint Helena"},{"code":"KN","name":"Saint Kitts ve Nevis"},{"code":"LC","name":"Saint Lucia"},{"code":"PM","name":"Saint Pierre ve Miquelon"},{"code":"VC","name":"Saint Vincent ve Grenadinler"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"Sao Tome ve Principe"},{"code":"SN","name":"Senegal"},{"code":"SC","name":"Seyşeller"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapur"},{"code":"SK","name":"Slovakya"},{"code":"SI","name":"Slovenya"},{"code":"SB","name":"Solomon Adaları"},{"code":"SO","name":"Somali"},{"code":"LK","name":"Sri Lanka"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Surinam"},{"code":"SY","name":"Suriye"},{"code":"SA","name":"Suudi Arabistan"},{"code":"SJ","name":"Svalbard ve Jan Mayen"},{"code":"SZ","name":"Svaziland"},{"code":"RS","name":"Sırbistan"},{"code":"CS","name":"Sırbistan-Karadağ"},{"code":"CL","name":"Şili"},{"code":"TJ","name":"Tacikistan"},{"code":"TZ","name":"Tanzanya"},{"code":"TH","name":"Tayland"},{"code":"TW","name":"Tayvan"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad ve Tobago"},{"code":"TN","name":"Tunus"},{"code":"TC","name":"Turks ve Caicos Adaları"},{"code":"TV","name":"Tuvalu"},{"code":"TM","name":"Türkmenistan"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukrayna"},{"code":"OM","name":"Umman"},{"code":"UY","name":"Uruguay"},{"code":"QO","name":"Uzak Okyanusya"},{"code":"JO","name":"Ürdün"},{"code":"VU","name":"Vanuatu"},{"code":"VA","name":"Vatikan"},{"code":"VE","name":"Venezuela"},{"code":"VN","name":"Vietnam"},{"code":"WF","name":"Wallis ve Futuna"},{"code":"YE","name":"Yemen"},{"code":"NC","name":"Yeni Kaledonya"},{"code":"NZ","name":"Yeni Zelanda"},{"code":"GR","name":"Yunanistan"},{"code":"ZM","name":"Zambiya"},{"code":"ZW","name":"Zimbabve"}];

/***/ }),

/***/ "./src/assets/directives/numeric.directive.ts":
/*!****************************************************!*\
  !*** ./src/assets/directives/numeric.directive.ts ***!
  \****************************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumericDirective = /** @class */ (function () {
    function NumericDirective(el) {
        this.el = el;
        this.hasDecimalPoint = false;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste',
        ];
        this.decimal = false;
        this.decimalSeparator = '.';
        this.min = -Infinity;
        this.max = Infinity;
        this.inputElement = el.nativeElement;
    }
    NumericDirective.prototype.ngOnChanges = function (changes) {
        if (changes.pattern) {
            this.regex = this.pattern ? RegExp(this.pattern) : null;
        }
        if (changes.min) {
            var maybeMin = Number(this.min);
            this.min = isNaN(maybeMin) ? -Infinity : maybeMin;
        }
        if (changes.max) {
            var maybeMax = Number(this.max);
            this.max = isNaN(maybeMax) ? Infinity : maybeMax;
        }
    };
    NumericDirective.prototype.onKeyDown = function (e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
            (this.decimal && e.key === this.decimalSeparator && !this.hasDecimalPoint) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
        // check the input pattern RegExp
        if (this.regex) {
            var newValue_1 = this.forecastValue(e.key);
            if (!this.regex.test(newValue_1)) {
                e.preventDefault();
            }
        }
        var newValue = Number(this.forecastValue(e.key));
        if (newValue > this.max || newValue < this.min) {
            e.preventDefault();
        }
    };
    NumericDirective.prototype.onKeyUp = function (e) {
        this.updateDecimalPoint();
    };
    NumericDirective.prototype.onPaste = function (event) {
        var pastedInput;
        if (window['clipboardData']) {
            // Browser is IE
            pastedInput = window['clipboardData'].getData('text');
        }
        else if (event.clipboardData && event.clipboardData.getData) {
            // Other browsers
            pastedInput = event.clipboardData.getData('text/plain');
        }
        this.pasteData(pastedInput);
        event.preventDefault();
    };
    NumericDirective.prototype.onDrop = function (event) {
        var textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        this.pasteData(textData);
        event.preventDefault();
    };
    NumericDirective.prototype.pasteData = function (pastedContent) {
        var sanitizedContent = this.sanitizeInput(pastedContent);
        var pasted = document.execCommand('insertText', false, sanitizedContent);
        if (!pasted) {
            if (this.inputElement.setRangeText) {
                var _a = this.inputElement, start = _a.selectionStart, end = _a.selectionEnd;
                this.inputElement.setRangeText(sanitizedContent, start, end, 'end');
            }
            else {
                // Browser does not support setRangeText, e.g. IE
                this.insertAtCursor(this.inputElement, sanitizedContent);
            }
        }
        this.updateDecimalPoint();
    };
    // The following 2 methods were added from the below article for browsers that do not support setRangeText
    // https://stackoverflow.com/questions/11076975/how-to-insert-text-into-the-textarea-at-the-current-cursor-position
    NumericDirective.prototype.insertAtCursor = function (myField, myValue) {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos) + myValue
            + myField.value.substring(endPos, myField.value.length);
        var pos = startPos + myValue.length;
        myField.focus();
        myField.setSelectionRange(pos, pos);
        this.triggerEvent(myField, 'input');
    };
    NumericDirective.prototype.triggerEvent = function (el, type) {
        if ('createEvent' in document) {
            // modern browsers, IE9+
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        }
    };
    // end stack overflow code
    NumericDirective.prototype.sanitizeInput = function (input) {
        var result = '';
        if (this.decimal && this.isValidDecimal(input)) {
            var regex = new RegExp("[^0-9" + this.decimalSeparator + "]", 'g');
            result = input.replace(regex, '');
        }
        else {
            result = input.replace(/[^0-9]/g, '');
        }
        var maxLength = this.inputElement.maxLength;
        if (maxLength > 0) {
            // the input element has maxLength limit
            var allowedLength = maxLength - this.inputElement.value.length;
            result = allowedLength > 0 ? result.substring(0, allowedLength) : '';
        }
        return result;
    };
    NumericDirective.prototype.isValidDecimal = function (string) {
        if (!this.hasDecimalPoint) {
            return string.split(this.decimalSeparator).length <= 2;
        }
        else {
            // the input element already has a decimal separator
            var selectedText = this.getSelection();
            if (selectedText && selectedText.indexOf(this.decimalSeparator) > -1) {
                return string.split(this.decimalSeparator).length <= 2;
            }
            else {
                return string.indexOf(this.decimalSeparator) < 0;
            }
        }
    };
    NumericDirective.prototype.updateDecimalPoint = function () {
        if (this.decimal) {
            this.hasDecimalPoint =
                this.inputElement.value.indexOf(this.decimalSeparator) > -1;
        }
    };
    NumericDirective.prototype.getSelection = function () {
        return this.inputElement.value.substring(this.inputElement.selectionStart, this.inputElement.selectionEnd);
    };
    NumericDirective.prototype.forecastValue = function (key) {
        var selectionStart = this.inputElement.selectionStart;
        var selectionEnd = this.inputElement.selectionEnd;
        var oldValue = this.inputElement.value;
        var selection = oldValue.substring(selectionStart, selectionEnd);
        return selection
            ? oldValue.replace(selection, key)
            : oldValue.substring(0, selectionStart) +
                key +
                oldValue.substring(selectionStart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericDirective.prototype, "decimal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericDirective.prototype, "decimalSeparator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericDirective.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericDirective.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumericDirective.prototype, "pattern", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", Object)
    ], NumericDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onKeyUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onPaste", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onDrop", null);
    NumericDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numeric]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumericDirective);
    return NumericDirective;
}());



/***/ }),

/***/ "./src/assets/material-list.json":
/*!***************************************!*\
  !*** ./src/assets/material-list.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, default */
/***/ (function(module) {

module.exports = [{"Kodu":"MOD-MC-11 ","code":"MC-11 ","title":"MC-11 Sayaç"},{"Kodu":"MOD-MC-12-1 ","code":"MC-12-1 ","title":"MC-12-1 Sol DC Motor"},{"Kodu":"MOD-MC-12-2 ","code":"MC-12-2 ","title":"MC-12-2 Sağ DC Motor"},{"Kodu":"MOD-MC-12-3 ","code":"MC-12-3 ","title":"MC-12-3 Turbo DC Motor"},{"Kodu":"MOD-MC-13-1 ","code":"MC-13-1 ","title":"MC-13-1 Kablolu LED - Kırmızı"},{"Kodu":"MOD-MC-13-3 ","code":"MC-13-3 ","title":"MC-13-3 Kablolu LED - Mavi"},{"Kodu":"MOD-MC-14 ","code":"MC-14 ","title":"MC-14 Servo Motor"},{"Kodu":"MOD-MC-15 ","code":"MC-15 ","title":"MC-15 Sıralı Led"},{"Kodu":"MOD-MC-16 ","code":"MC-16 ","title":"MC-16 Fan"},{"Kodu":"MOD-MC-17 ","code":"MC-17 ","title":"MC-17 Zil"},{"Kodu":"MOD-ME-11 ","code":"ME-11 ","title":"ME-11 USB Güç"},{"Kodu":"MOD-ME-12 ","code":"ME-12 ","title":"ME-12 Güç"},{"Kodu":"MOD-ME-13 ","code":"ME-13 ","title":"ME-13 Powerbank"},{"Kodu":"MOD-ME-14 ","code":"ME-14 ","title":"ME-14 2A Powerbank"},{"Kodu":"MOD-MG-11 ","code":"MG-11 ","title":"MG-11 Kızaklı DİM"},{"Kodu":"MOD-MG-12 ","code":"MG-12 ","title":"MG-12 Buton"},{"Kodu":"MOD-MG-14 ","code":"MG-14 ","title":"MG-14 Mesafe Algılayıcı"},{"Kodu":"MOD-MG-14-1 ","code":"MG-14-1 ","title":"MG-14-1 Mesafe Algılayıcı Gövde"},{"Kodu":"MOD-MG-14-2 ","code":"MG-14-2 ","title":"MG-14-2 Mesafe Algılayıcı Sensör"},{"Kodu":"MOD-MG-15 ","code":"MG-15 ","title":"MG-15 Hareket Algılayıcı"},{"Kodu":"MOD-MG-16 ","code":"MG-16 ","title":"MG-16 Işık Algılayıcı"},{"Kodu":"MOD-MG-17 ","code":"MG-17 ","title":"MG-17 Ses Algılayıcı"},{"Kodu":"MOD-MG-18 ","code":"MG-18 ","title":"MG-18 Uzaktan Kumanda"},{"Kodu":"MOD-ML-11 ","code":"ML-11 ","title":"ML-11 Bağlantı Kablosu "},{"Kodu":"MOD-ML-11-1 ","code":"ML-11-1 ","title":"ML-11-1 Bağlantı Kablosu Giriş"},{"Kodu":"MOD-ML-11-2 ","code":"ML-11-2 ","title":"ML-11-2 Bağlantı Kablosu Çıkış"},{"Kodu":"MOD-ML-12 ","code":"ML-12 ","title":"ML-12 Dağıtıcı "},{"Kodu":"MOD-ML-12-1 ","code":"ML-12-1 ","title":"ML-12-1 Dağıtıcı Giriş"},{"Kodu":"MOD-ML-12-2 ","code":"ML-12-2 ","title":"ML-12-2 Dağıtıcı Çıkış"},{"Kodu":"MOD-ML-13 ","code":"ML-13 ","title":"ML-13 Sinyal Sabitleyici"},{"Kodu":"MOD-ML-14 ","code":"ML-14 ","title":"ML-14 Sinyal Dönüştürücü"},{"Kodu":"MOD-ML-15 ","code":"ML-15 ","title":"ML-15 Ve/Veya Kapısı"},{"Kodu":"MOD-ML-16 ","code":"ML-16 ","title":"ML-16 Kodlama Modülü"},{"Kodu":"MOD-ML-17 ","code":"ML-17 ","title":"ML-17 Sinyal İletici"},{"Kodu":"SET-001-001","code":"SH-001-00","title":"Robotik Sanat Seti"},{"Kodu":"SET-001-01","code":"SH-001-01","title":"Robotik Sanat Seti - Türkçe"},{"Kodu":"SET-001-02","code":"SH-001-02","title":"Robotik Sanat Seti - İngilizce"},{"Kodu":"SET-001-03","code":"SH-001-03","title":"Robotik Sanat Seti - İtalyanca"},{"Kodu":"SET-001-04","code":"SH-001-04","title":"Robotik Sanat Seti - İspanyolca"},{"Kodu":"SET-001-05","code":"SH-001-05","title":"Robotik Sanat Seti - Almanca"},{"Kodu":"SET-001-06","code":"SH-001-06","title":"Robotik Sanat Seti - Arapça"},{"Kodu":"SET-001-07","code":"SH-001-07","title":"Robotik Sanat Seti - Rusça"},{"Kodu":"SET-001-08","code":"SH-001-08","title":"Robotik Sanat Seti - Fransızca"},{"Kodu":"SET-001-09","code":"SH-001-09","title":"Robotik Sanat Seti - Portekizce"},{"Kodu":"SET-002-00","code":"SH-002-00","title":"Mucit Seti (Curiosity Kit)"},{"Kodu":"SET-002-01","code":"SH-002-01","title":"Mucit Seti - Türkçe"},{"Kodu":"SET-002-02","code":"SH-002-02","title":"Mucit Seti - İngilizce"},{"Kodu":"SET-002-03","code":"SH-002-03","title":"Mucit Seti - İtalyanca"},{"Kodu":"SET-002-04","code":"SH-002-04","title":"Mucit Seti - İspanyolca"},{"Kodu":"SET-002-05","code":"SH-002-05","title":"Mucit Seti - Almanca"},{"Kodu":"SET-002-06","code":"SH-002-06","title":"Mucit Seti - Arapça"},{"Kodu":"SET-002-07","code":"SH-002-07","title":"Mucit Seti - Rusça"},{"Kodu":"SET-002-08","code":"SH-002-08","title":"Mucit Seti - Fransızca"},{"Kodu":"SET-002-09","code":"SH-002-09","title":"Mucit Seti - Portekizce"},{"Kodu":"SET-003-00","code":"SH-003-00","title":"Kodlama Seti (Coding Kit)"},{"Kodu":"SET-003-01","code":"SH-003-01","title":"Kodlama Seti - Türkçe"},{"Kodu":"SET-003-02","code":"SH-003-02","title":"Kodlama Seti - İngilizce"},{"Kodu":"SET-003-03","code":"SH-003-03","title":"Kodlama Seti - İtalyanca"},{"Kodu":"SET-003-04","code":"SH-003-04","title":"Kodlama Seti - İspanyolca"},{"Kodu":"SET-003-05","code":"SH-003-05","title":"Kodlama Seti - Almanca"},{"Kodu":"SET-003-06","code":"SH-003-06","title":"Kodlama Seti - Arapça"},{"Kodu":"SET-003-07","code":"SH-003-07","title":"Kodlama Seti - Rusça"},{"Kodu":"SET-003-08","code":"SH-003-08","title":"Kodlama Seti - Fransızca"},{"Kodu":"SET-003-09","code":"SH-003-09","title":"Kodlama Seti - Portekizce"},{"Kodu":"SET-HA-00","code":"SH-006-00","title":"Havacılık Seti (Aviation Kit)"},{"Kodu":"SET-HA-01","code":"SH-006-01","title":"Havacılık Seti - Türkçe"},{"Kodu":"SET-HA-02","code":"SH-006-02","title":"Havacılık Seti - İngilizce"},{"Kodu":"SET-HA-03","code":"SH-006-03","title":"Havacılık Seti - İtalyanca"},{"Kodu":"SET-HA-04","code":"SH-006-04","title":"Havacılık Seti - İspanyolca"},{"Kodu":"SET-HA-05","code":"SH-006-05","title":"Havacılık Seti - Almanca"},{"Kodu":"SET-HA-06","code":"SH-006-06","title":"Havacılık Seti - Arapça"},{"Kodu":"SET-HA-07","code":"SH-006-07","title":"Havacılık Seti - Rusça"},{"Kodu":"SET-HA-08","code":"SH-006-08","title":"Havacılık Seti - Fransızca"},{"Kodu":"SET-HA-09","code":"SH-006-09","title":"Havacılık Seti - Portekizce"},{"Kodu":"SET-KE-00","code":"SH-005-00","title":"Keşif Seti (Discovery Kit)"},{"Kodu":"SET-KE-01","code":"SH-005-01","title":"Keşif Seti - Türkçe"},{"Kodu":"SET-KE-02","code":"SH-005-02","title":"Keşif Seti - İngilizce"},{"Kodu":"SET-OA-00","code":"SH-005-03","title":"Otonom Araç Seti (Autonomous Car Kit)"},{"Kodu":"SET-OA-01","code":"SH-005-04","title":"Otonom Araç Seti - Türkçe"},{"Kodu":"SET-OA-02","code":"SH-005-05","title":"Otonom Araç Seti - İngilizce"},{"Kodu":"SET-OA-03","code":"SH-005-06","title":"Otonom Araç Seti - İtalyanca"},{"Kodu":"SET-OA-04","code":"SH-005-07","title":"Otonom Araç Seti - İspanyolca"},{"Kodu":"SET-OA-05","code":"SH-005-08","title":"Otonom Araç Seti - Almanca"},{"Kodu":"SET-OA-06","code":"SH-005-09","title":"Otonom Araç Seti - Arapça"},{"Kodu":"SET-OA-07","code":"SH-005-10","title":"Otonom Araç Seti - Rusça"},{"Kodu":"SET-OA-08","code":"SH-005-11","title":"Otonom Araç Seti - Fransızca"},{"Kodu":"SH-005-12","code":"SH-005-12","title":"Otonom Araç Seti - Portekizce"}];

/***/ }),

/***/ "./src/assets/services/country.service.ts":
/*!************************************************!*\
  !*** ./src/assets/services/country.service.ts ***!
  \************************************************/
/*! exports provided: CountryService, Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _countries_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries.json */ "./src/assets/countries.json");
var _countries_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../countries.json */ "./src/assets/countries.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = /** @class */ (function () {
    function CountryService() {
    }
    CountryService.prototype.getCountries = function () {
        return _countries_json__WEBPACK_IMPORTED_MODULE_1__;
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CountryService);
    return CountryService;
}());

var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/assets/services/material.service.ts":
/*!*************************************************!*\
  !*** ./src/assets/services/material.service.ts ***!
  \*************************************************/
/*! exports provided: MaterialService, Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_list_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-list.json */ "./src/assets/material-list.json");
var _material_list_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../material-list.json */ "./src/assets/material-list.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialService = /** @class */ (function () {
    function MaterialService() {
        this.materialFixed = _material_list_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    MaterialService.prototype.getMaterials = function () {
        this.materialFixed.forEach(function (material) {
            material.code = material.code.trim();
            material.title = material.title.replace(material.code + ' ', '');
        });
        return this.materialFixed;
    };
    MaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MaterialService);
    return MaterialService;
}());

var Material = /** @class */ (function () {
    function Material() {
    }
    return Material;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tolgahan\Documents\GitHub\Proje\twin-sales-operation-panel\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map