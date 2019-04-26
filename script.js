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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 