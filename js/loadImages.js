function preloadImages(array, path) {
	if (!preloadImages.list) {
		preloadImages.list = [];
	}
	var list = preloadImages.list;
	for (var i = 0; i < array.length; i++) {
		var img = new Image();
		img.onload = function() {
			var index = list.indexOf(this);
			if (index !== -1) {
				list.splice(index, 1);
			}
		};
		list.push(img);
		img.src = path + array[i];
	}
}

function preloadInit() {
	$.ajax({
		url: '../php/parseDisk.php',
		method: 'get'
	}).done((data) => {
		preloadImages(data.tabIc, '../files/ic_languages/');
		preloadImages(data.tabImg, '../files/img/');
		preloadImages(data.tabImgProject, '../files/img_projects/');
	}).fail(() => customFail());
}
