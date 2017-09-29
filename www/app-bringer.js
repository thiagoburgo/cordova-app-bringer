var exec = require('cordova/exec');

function AppBringer() {
    this.bringToFront = function() {
        exec(null, null, 'AppBringer', 'bringToFront', []);
    };
}

module.exports = new AppBringer();