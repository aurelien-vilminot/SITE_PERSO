function preloadImages(array) {
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
        img.src = array[i];
    }
}

function testPreload() {
    $.ajax({
        url: '../php/parseDisk.php',
        method: 'post'
    }).done((data) => {
        console.log(data.tabImgProject);
        console.log(data.tabImg);
        console.log(data.tabIc);
        preloadImages(data.tabIc);
    }).fail(() => customFail());
}