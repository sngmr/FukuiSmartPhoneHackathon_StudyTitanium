function createWindow2() {
	var win = Ti.UI.createWindow({
		backgroundColor: '#F00',
		navBarHidden: true
	});
	
	var container = Ti.UI.createView({
		backgroundColor: '#0F0',
	});
	
	var view1 = Ti.UI.createView({
		width: 200,
		height: 200,
		backgroundColor: '#00F'
	});
	container.add(view1);
	view1.addEventListener('click', _view1ClickHandler);
	
	var view2 = Ti.UI.createImageView({
		url: 'images/images.jpeg'
	});
	container.add(view2);
	
	win.add(container);
	
	return win;
	
	function _view1ClickHandler(e) {
		Ti.API.info(e.x + '/' + e.y);
		var hit = Ti.UI.createView({
			backgroundColor: '#F00',
			top: e.globalPoint.y,
			left: e.globalPoint.x,
			width: 10,
			height: 10
		});
		win.add(hit);
	}
}
