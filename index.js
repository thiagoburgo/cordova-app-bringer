var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Cordova, Plugin, IonicNativePlugin } from "@ionic-native/core";
import "rxjs/add/observable/merge";
var AppBringer = (function (_super) {
    __extends(AppBringer, _super);
    function AppBringer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppBringer.prototype.bringToFront = function (successCallback, failCallBack) {
        return;
    };
    return AppBringer;
}(IonicNativePlugin));
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", void 0)
], AppBringer.prototype, "bringToFront", null);
AppBringer = __decorate([
    Plugin({
        pluginName: "AppBringer",
        pluginRef: "AppBringer",
        plugin: "cordova-app-bringer",
        repo: "https://github.com/thiagoburgo/app-bringer",
        platforms: ["Android"]
    }),
    Injectable()
], AppBringer);
export { AppBringer };
//# sourceMappingURL=index.js.map