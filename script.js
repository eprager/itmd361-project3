function initMap(){ 

	var map = new google.maps.Map(document.getElementById('canvas'), {
		center: {lat: 41.8334669, lng: -87.6245049},
		zoom: 8    });
	}

google.maps.event.addDomListener(window, 'load', init);