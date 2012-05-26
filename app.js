Ti.include('views/window1.js');
Ti.include('views/window2.js');
Ti.include('data.js');

var callback = {
	go: _go
};
var win1 = createWindow1(callback);
win1.open();

function _go() {
	var win2 = createWindow2();
	win2.open();
}
