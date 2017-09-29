var exec = require('cordova/exec');

function AppBringer() {
    this.bringToFront = function(successCallback, failCallBack) {
        exec(successCallback, failCallBack, 'AppBringer', 'bringToFront', []);
    };
}

module.exports = new AppBringer();