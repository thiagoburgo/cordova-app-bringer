# cordova-bring-to-front
Ionic plugin to bring app to foreground when it's hidden - on background but still running.  
This plugin is **android** only.

# Installation
``
cordova plugin add https://github.com/thiagoburgo/cordova-app-bringer.git
``

# Usage
``
constructor(appBringer:AppBringer){
	this.appBringer.bringToFront(()=>{/*sucess*/}, (err)=>{/*error*/});
}
``
