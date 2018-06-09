$(document).ready(function() {
	// accordion controls 
  	let acc = $(".accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
	 	acc[i].addEventListener("click", function() {
	    	this.classList.toggle("active");
	    	let panel = this.nextElementSibling;
	    	if (panel.style.maxHeight){
	      		panel.style.maxHeight = null;
	    	} else {
	      		panel.style.maxHeight = panel.scrollHeight + "px";
	    	} 
	  	});
	}

	// slideshow controls
	let slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  	showSlides(slideIndex += n);
	};

	// Thumbnail image controls
	function currentSlide(n) {
	  	showSlides(slideIndex = n);
	};

	function showSlides(n) {
	  	let i;
	  	let slides = $(".mySlides");
	  	let dots = $(".dot");

	  	if (n > slides.length) {slideIndex = 1} 
	  	if (n < 1) {slideIndex = slides.length}
	  	for (i = 0; i < slides.length; i++) {
	      	slides[i].style.display = "none"; 
	  	}
	  	for (i = 0; i < dots.length; i++) {
	     	dots[i].className = dots[i].className.replace(" active", "");
	  	}
	  	slides[slideIndex-1].style.display = "block"; 
	};

	$(".prev").on("click", function() {
		plusSlides(-1);
	});

	$(".next").on("click", function() {
		plusSlides(1);
	});

});
