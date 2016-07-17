// Hides address bar on page load
/mobile/i.test(navigator.userAgent)
&& !window.location.hash
&& setTimeout(function () {
window.scrollTo(0,0);
}, 0);


function modalShow(){
	$("#modal").removeClass("hideMe").hide().fadeIn(200);
	return false;
}

function modalHide(){
	$("#modal").fadeOut(200);
	return false;
}

function scrollMe(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
}

function hidesAppAlert (){
	$(".app-alert").addClass("hide-me");
	$("#login-form").removeClass("hide-me");
	// $("#last_name").focus();
	return false;
}

// hides 15 min alert on provider: your visits today page
function providerTodayHidesAlert (){
	$(".alert").addClass("hide-me");
	return false;
}


$(document).ready(function() {

	$(".refresh").click(function() {
    location.reload();
});

		$(".alert").click(providerTodayHidesAlert);
	$(".modal-window .close-button, .modal-window #login-submit").click(modalHide);
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

$('#overlay, #modal').on('touchmove', function (event) {
// locking these elements, so they can't be moved when dragging the div
	event.preventDefault();
});


$("#btn-i-have-it").click(hidesAppAlert);

$("form :input").focus(function() {
	$(this).parent().addClass("form-focus");
	}).blur(function() {
		$(this).parent().removeClass("form-focus");
		});

// opens and closes "See More" divs
$(".visit-collapsible").toggle(
	function expands() {
		var totalHeight = 0;
		totalHeight = $(this).children().outerHeight(true);
		$(this).css("height", totalHeight);
		$(this).addClass('visit-expanded');
		return false;
	},
	function contracts(){
		var wellOnLoad = 20;
		$(this).css("height", wellOnLoad);
		$(this).removeClass('visit-expanded');
		return false;
	}
);




// For POC purposes only - it displays the sample error messages below the input fields

$("#last_name").keyup(function () {
		var value = $(this).val();
		var errorMessage = "name entered doesn't match our records (sample message)";
		if (value == "error" || value == "Error") {
			$(this).next(".failmessage").text(errorMessage);
			$(this).next(".failmessage").removeClass("hide-me");
			$(this).parent().addClass("error");
		}
		else {
			$(this).next(".failmessage").addClass("hide-me");
			$(this).parent().removeClass("error");
		}
	});

$("#mrn").keyup(function () {
		var value = $(this).val();
		var errorMessage = "invalid number (sample message)";
		if (value == "99") {
			$(this).next(".failmessage").text(errorMessage);
			$(this).next(".failmessage").removeClass("hide-me");
			$(this).parent().addClass("error");
		}
		else {
			$(this).next(".failmessage").addClass("hide-me");
			$(this).parent().removeClass("error");
		}
	});

$("#birth_year").keyup(function () {
		var value = $(this).val();
		var errorMessage = "Please enter year in a 4-digit format (for example: 1952) (sample msg)";
		if (value == "99") {
			$(this).next(".failmessage").text(errorMessage);
			$(this).next(".failmessage").removeClass("hide-me");
			$(this).parent().addClass("error");
		}
		else {
			$(this).next(".failmessage").addClass("hide-me");
			$(this).parent().removeClass("error");
		}
	});

// For POC purposes only ------- END