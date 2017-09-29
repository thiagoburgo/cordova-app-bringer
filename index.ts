import { Injectable } from "@angular/core";
import { Cordova, CordovaProperty, Plugin, CordovaCheck, IonicNativePlugin } from "@ionic-native/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/merge";

@Plugin({
  pluginName: "AppBringer",
  pluginRef: "AppBringer",
  plugin: "cordova-app-bringer",
  repo: "https://github.com/thiagoburgo/app-bringer",
  platforms: ["Android"]
})
@Injectable()
export class AppBringer extends IonicNativePlugin {

  @Cordova()
  bringToFront(): void {
    return;
  }

}