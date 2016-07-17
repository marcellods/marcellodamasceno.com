// Hides address bar on page load
/mobile/i.test(navigator.userAgent)
&& !window.location.hash
&& setTimeout(function () {
window.scrollTo(0,0);
}, 0);

//Initializes touch events
function enableTouch(){
	$(".mainNav .touchable, .phone-list li, .result-item, .results-sorter li:not(.active), .result-item h3").on('touchstart', function(e) { 
		$(this).addClass("touched");
	});

	$(".mainNav .touchable, .phone-list li, .result-item, .results-sorter li:not(.active), .result-item h3").on('touchend', function(e) {  
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
	// 121102: if statement added to accomodate for modals triggered from both navigation and within page
	if (menuStatus = true) {
		setTimeout(toggleNav, 200);
	}
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
		if ((menuStatus != true) && ($(this).scrollTop() > 160)) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		};
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

$('#overlay, #modal, .pic-frame .pic').on('touchmove', function (event) {
// disabling touch events on these elements, so they can't be moved
	event.preventDefault();
});
