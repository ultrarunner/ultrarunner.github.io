webpackJsonp([1,5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentRss; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponentRss = (function () {
    function DashboardComponentRss(feedService, dialogService) {
        this.feedService = feedService;
        this.dialogService = dialogService;
        this.feed = {};
        this.items = [];
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    DashboardComponentRss.prototype.ngOnInit = function () {
        this.onPullData();
    };
    DashboardComponentRss.prototype.onPullData = function () {
        var _this = this;
        this.feedService.getFeedContent(this.end_point)
            .delay(1000)
            .subscribe(function (result) {
            console.log(result.items);
            _this.feed = result.feed,
                _this.items = result.items.filter(function (item, index) { return index < _this.count; });
        }, function (error) { return console.log(error); });
    };
    DashboardComponentRss.prototype.openDialog = function (feedEntry) {
        console.log(feedEntry);
        var title = feedEntry.title + " | " + feedEntry.pubDate;
        this.dialogService.confirm(title, feedEntry.description);
    };
    DashboardComponentRss.prototype.onPlay = function (enclosure) {
        console.log(enclosure.link);
    };
    DashboardComponentRss.prototype.onSelected = function () {
        this.selected.emit(this);
    };
    DashboardComponentRss.prototype.onOpenLink = function () {
        window.open(this.feed.link, '_blank');
    };
    return DashboardComponentRss;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DashboardComponentRss.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DashboardComponentRss.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], DashboardComponentRss.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], DashboardComponentRss.prototype, "selected", void 0);
DashboardComponentRss = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'component-rss',
        template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 320px; margin: 5px;\">\n        <md-card-header *ngIf=\"items.length\">\n          <div md-card-avatar *ngIf=\"feed.image!=''\"><img src=\"{{feed.image}}\" style=\"width: 30px;\"/></div>\n          <md-card-title>{{feed.title}} <font color=\"red\">|</font> {{feed.author}}</md-card-title>\n          <md-card-subtitle>{{feed.description}} </md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"!items.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"items.length\">\n          <md-list-item *ngFor=\"let item of items\">         \n            <button md-icon-button (click)=\"openDialog(item)\" mdTooltip=\"Play Audio\">\n              <md-icon>info</md-icon>\n            </button>\n            <button mdTooltip=\"View Description\" md-icon-button *ngIf=\"item.enclosure.type != null\" (click)=\"onPlay(item.enclosure)\">\n              <md-icon>play_circle_filled</md-icon>\n            </button>            \n            {{item.title}}             \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)='onOpenLink()' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n            <md-icon>open_in_new</md-icon>\n          </button>\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>\n      "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], DashboardComponentRss);

var _a, _b;
//# sourceMappingURL=dashboard-component-rss.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
        this.rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
    }
    FeedService.prototype.getFeedContent = function (url) {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    FeedService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    FeedService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__["a" /* SimpleDialogComponent */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleDialogComponent = (function () {
    function SimpleDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SimpleDialogComponent.prototype.ngOnInit = function () {
    };
    return SimpleDialogComponent;
}());
SimpleDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-simple-dialog',
        template: "\n      <h2 md-dialog-title>{{title}}</h2>\n      <md-dialog-content [innerHtml]=message></md-dialog-content>\n  ",
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object])
], SimpleDialogComponent);

var _a;
//# sourceMappingURL=simple-dialog.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 176;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(206);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: "\n        <md-toolbar style=\"background-color: black;\">\n          <span style=\"color: white;\">\n          <a href=\"\">\n          <img \n            src=\"/assets/borntolearnwild.png\" \n            style=\"margin-right: 10px; width:30px; height: 30px;\" \n            alt=\"Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge *can* come from any site.\">\n        </a>\n          </span>\n          <span class=\"example-spacer\"></span>\n          <!--<md-icon class=\"example-icon\" style=\"color: white;\">account_circle</md-icon>\n          <md-icon class=\"example-icon\" style=\"color: white;\">delete</md-icon>-->\n        </md-toolbar>\n        <div style=\"margin-top:5px;\">   \n            <dashboard></dashboard>\n        </div>        \n    "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component_rss__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component_outlet__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feed_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_simple_dialog_dialog_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipe_strip_html_tags_pipe__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_simple_dialog_simple_dialog_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { FeedCardComponent } from './feed-card/feed-card.component';


// shared


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component_outlet__["a" /* DashboardComponentOutlet */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component_rss__["a" /* DashboardComponentRss */],
            //FeedCardComponent,
            __WEBPACK_IMPORTED_MODULE_14__pipe_strip_html_tags_pipe__["a" /* StripHtmlTagsPipe */],
            __WEBPACK_IMPORTED_MODULE_15__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_simple_dialog_dialog_service__["a" /* DialogService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component_rss__["a" /* DashboardComponentRss */],
            __WEBPACK_IMPORTED_MODULE_15__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentOutlet; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponentOutlet = (function () {
    function DashboardComponentOutlet(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    DashboardComponentOutlet.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.type) {
            this.viewContainer.clear();
            // Create Component
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
            var componentRef = this.viewContainer.createComponent(factory);
            this.dynamicInstance = componentRef.instance;
            // Set up Event-Handlers and delegate to own handlers
            this.dynamicInstance.selected.subscribe(function (e) { return _this.selected.emit(e); });
        }
        // Delegate Properties
        if (changes.title) {
            this.dynamicInstance.title = this.title;
            this.dynamicInstance.end_point = this.end_point;
            this.dynamicInstance.count = this.count;
        }
    };
    return DashboardComponentOutlet;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DashboardComponentOutlet.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DashboardComponentOutlet.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], DashboardComponentOutlet.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "type", void 0);
DashboardComponentOutlet = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'dashboard-component-outlet',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */]) === "function" && _b || Object])
], DashboardComponentOutlet);

var _a, _b;
//# sourceMappingURL=dashboard-component-outlet.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboard = (function () {
    function Dashboard() {
        this.options = {
            transitionDuration: '0.35',
            fitWidth: true,
            gutter: 5,
            percentPosition: true
        };
        this.componentInfos = [
            {
                type: __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__["a" /* DashboardComponentRss */],
                title: '1st Component - Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                count: 6
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__["a" /* DashboardComponentRss */],
                title: '2nd Component - Channel 9',
                end_point: 'https://channel9.msdn.com/all/rss',
                count: 8
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__["a" /* DashboardComponentRss */],
                title: '3rd Component - Ted Talks',
                end_point: 'https://www.ted.com/talks/rss',
                count: 10
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__["a" /* DashboardComponentRss */],
                title: '4th Component - Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                count: 10
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__dashboard_component_rss__["a" /* DashboardComponentRss */],
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                count: 4
            }
        ];
    }
    Dashboard.prototype.ngAfterViewInit = function () {
        this.masonry.layoutComplete.subscribe(function () {
            console.log('masonry layout complete.');
        });
    };
    Dashboard.prototype.select = function (selected) {
        this.selectedComponent = selected;
    };
    return Dashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]) === "function" && _a || Object)
], Dashboard.prototype, "masonry", void 0);
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'dashboard',
        template: "\n        <masonry style=\"margin: 0 auto;\">\n            <dashboard-component-outlet *ngFor=\"let info of componentInfos\"\n                [type]=\"info.type\" \n                [title]=\"info.title\" \n                [end_point]=\"info.end_point\"\n                [count]=\"info.count\"\n                (selected)=\"select($event)\">\n            </dashboard-component-outlet>\n        </masonry>\n        <div *ngIf=\"selectedComponent\" class=\"col-sm-12\">\n            <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}\n        </div>\n    "
    })
], Dashboard);

var _a;
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripHtmlTagsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StripHtmlTagsPipe = (function () {
    function StripHtmlTagsPipe() {
        this.tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        this.tagOrComment = new RegExp('<(?:'
            + '!--(?:(?:-*[^->])*--+|-?)'
            + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
            + '|/?[a-z]'
            + this.tagBody
            + ')>', 'gi');
    }
    StripHtmlTagsPipe.prototype.transform = function (value) {
        var oldHtml;
        do {
            oldHtml = value;
            value = value.replace(this.tagOrComment, '');
        } while (value !== oldHtml);
        return value.replace(/</g, '&lt;');
    };
    return StripHtmlTagsPipe;
}());
StripHtmlTagsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'stripHtmlTags'
    })
], StripHtmlTagsPipe);

//# sourceMappingURL=strip-html-tags.pipe.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(177);


/***/ })

},[528]);
//# sourceMappingURL=main.bundle.js.map