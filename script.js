function initMap() {
	var emma = {lat: 41.8334669, lng: -87.6245049};
	var map = new google.maps.Map(document.getElementById('map'), {center: emma, zoom: 14});

	var contentString = '3340 S Michigan Ave, Chicago, IL 60616';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: emma,
		map: map,
		title: 'Alpha Sigma Alpha',
		icon: 'images/location.png'
	});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

google.maps.event.addDomListener(window, 'load', initMap);