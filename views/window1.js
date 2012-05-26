function createWindow1(callback) {
	var win = Ti.UI.createWindow();
	
	var button = Ti.UI.createButton({
		title: 'CLICK ME',
		width: '150dip',
		height: 50,
		top: 100,
		left: 100
	});
	win.add(button);
	
	var view1 = Ti.UI.createView({
		backgroundColor: '#F00',
		width: 100,
		height: 100,
		top: 300,
		left: 300
	});
	win.add(view1);
	
	button.addEventListener('click', _animate);
	
	return win;
	
	function _openWindow2() {
		callback.go();
	}
	
	function _openPhotoGallery() {
		Ti.Media.openPhotoGallery({
			success: function(e) { alert('success'); },
			error: function(e) { alert('error'); },
			cancel: function(e) { alert('cancel'); },
			allowEditing: true
		});
	}
	
	function _animate() {
		view1.animate({top:400,duration:1000});
	}
}

