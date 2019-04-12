function init(){
	//alert('it works');
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8334669, lng: -87.6245049},
    zoom: 8
  });

	/*var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/icon.ico'
	});

	var contentString = '<h1>Alpha Sigma Alpha</h1>;

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});

    */
}

google.maps.event.addDomListener(window, 'load', init);