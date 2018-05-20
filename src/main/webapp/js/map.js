(function($) {
	var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:20,
        center: [116.959824,36.648459]
	});
	var marker = new AMap.Marker({
		icon:"img/marker.png",
		position:[116.959824,36.648459]
	});
	marker.setMap(map);

})(jQuery); // End of use strict


