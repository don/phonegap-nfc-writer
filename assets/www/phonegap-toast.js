/*global cordova*/
var Toasty = function() {
};

Toasty.prototype.showLong = function(message, win, fail) {
  cordova.exec(win, fail, "Toasty", "show_long", [message]);
};

Toasty.prototype.showShort = function(message, win, fail) {
  cordova.exec(win, fail, "Toasty", "show_short", [message]);
};

Toasty.prototype.cancel = function(win, fail) {
  cordova.exec(win, fail, "Toasty", "cancel", []);
};

navigator.toast = new Toasty();