function parallax() {
	var $slider = document.getElementById("slider");

	var yPos = window.pageYOffset / $slider.dataset.speed;
	yPos = -yPos;
	
	var coords = '0% '+ yPos + 'px';
	
	$slider.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});
