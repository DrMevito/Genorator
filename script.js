const nav = document.querySelector(".elements");
const button = document.querySelector(".rows");
const lines = document.querySelectorAll(".span");

function toggler() {
	nav.classList.toggle("sidebar");
	lines[0].classList.toggle("line-0");
	lines[1].classList.toggle("line-1");
	lines[2].classList.toggle("line-2");
}

button.addEventListener("click", toggler);




/** lazy load */

/* document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});  */

/** dark mode */

function myFunction() {
   var element = document.body;
   element.classList.toggle("toggle");
}



//red more//

/*$(document).ready(function(){
	$(".read").click(function(){
		$(this).prev().toggle();
		$(this).siblings('.dots').toggle();
		if($(this).text()=='read more'){
			$(this).text('read less');
		}
		else{
			$(this).text('read more');
		}
	});
});*/

