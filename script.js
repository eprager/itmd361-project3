function initMap(){ 

	var emma = {lat: 41.8334669, lng: -87.6245049};
	var map = new google.maps.Map(document.getElementById('map'), {center: emma, zoom: 13});
	var marker = new google.maps.Marker({position: emma, map: map});

}
google.maps.event.addDomListener(window, 'load', initMap);