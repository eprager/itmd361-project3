function initMap() {
	var emma = {lat: 41.868362, lng: -87.613138};
	var map = new google.maps.Map(document.getElementById('map'), {center: emma, zoom: 14});

	var infowindow = new google.maps.InfoWindow({
		content: 'Shedd Aquarium: Lakefront Trail'
	});

	var marker = new google.maps.Marker({
		position: emma,
		map: map,
		icon: 'images/location.png'
	});
	
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}