// Hides address bar on page load
/mobile/i.test(navigator.userAgent)
&& !window.location.hash
&& setTimeout(function () {
window.scrollTo(0,0);
}, 0);

//Initializes touch events
function enableTouch(){
	$('.mainNav .touchable').on('touchstart', function(e) { 
		$(this).addClass("touched");
	});

	$('.mainNav .touchable').on('touchend', function(e) {  
		$(this).removeClass("touched");
	});

	$('.phone-list li').on('touchstart', function(e) { 
		$(this).addClass("touched");
	});

	$('.phone-list li').on('touchend', function(e) {  
		$(this).removeClass("touched");
	});
}

enableTouch();

// Navigation
$('#mainNav').load( 'mainnav.html', enableTouch);

function showNav(){	
	$("#main-window").addClass("main-window-out");
	$("#overlay").fadeIn(500);
}

function hideNav(){
	$("#main-window").removeClass("main-window-out");
	$("#overlay").fadeOut(350);
}

var menuStatus;

function toggleNav (){
if(menuStatus != true){
	menuStatus = true;
	showNav();
	return false;
	} else {
		menuStatus = false;
		hideNav();
		return false;
	}
}

function modalShow(){
	$("#modal").removeClass("hideMe").hide().fadeIn(200);
	return false;
}

function modalHide(){
	$("#modal").fadeOut(200);
	setTimeout(toggleNav, 200);
	return false;
}

function scrollMe(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
}

$(document).ready(function() {
	$(".toggle-nav").click(toggleNav);
	$(".modal-window .close-button").click(modalHide);
	$(".scrollup").click(scrollMe);
	// Shows and hides scroll to top button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 160) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
 	});
 	// scrolls to top for anchor page states on load
 	scrollMe();
});


// opens and closes "See More" divs
$(".collapsible").toggle(
	function expands() {
		var totalHeight = 0;
		totalHeight = $(this).children().outerHeight(true);
		$(this).css("height", totalHeight);
		$(this).addClass('expanded');
	},
	function contracts(){
		var wellOnLoad = 96;
		$(this).css("height", wellOnLoad);
		$(this).removeClass('expanded');
	}
);

$('#overlay, #modal').on('touchmove', function (event) {
// locking these elements, so they can't be moved
	event.preventDefault();
});
