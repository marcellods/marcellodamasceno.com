// Hides address bar on page load
/mobile/i.test(navigator.userAgent)
&& !window.location.hash
&& setTimeout(function () {
window.scrollTo(0,0);
}, 0);


function scrollMe(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
}


$(window).load(function(){

	var $container = $('#isotopeContainer');
	
	$container.isotope({

		itemSelector : '.projectCard',
		masonry : {
			columnWidth : 2
		},
		getSortData : {
			name : function ( $elem ) {
				return $elem.find('.name').text();
			},
			client : function ( $elem ) {
				return $elem.find('.client').text();
			},
			type : function ( $elem ) {
				return $elem.find('.type').text();
			},
			date : function ( $elem ) {
				return $elem.find('.date').text();
			}
		}
	});

	var $optionSets = $('.option-set'),
			$optionLinks = $optionSets.find('a');

	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		// make option object dynamically, i.e. { filter: '.my-filter-class' }
		var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
		// parse 'false' as false boolean
		value = value === 'false' ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options )
		} else {
			// otherwise, apply new options
			$container.isotope( options );
		}
		
		return false;
	});

});

// = = = = = = = = = = = = 


// rearranging project cards using the select box;
$(".dropdown").change(function() {
	//window.location = $(this).find("option:selected").val();
	var sortAtt = $(this).find("option:selected").val();
	$('#isotopeContainer').isotope({ sortBy : sortAtt });
	return false;
});


// Modal loader = = = = = =
$(".modal #modalCloseButton").click(function(event) {
	$('#modal').fadeOut('fast');
});

$(".lightbox").click(function(event) {
	event.preventDefault();
	var elementURL = $(this).attr("href");
	$(".modal").fadeIn('fast');
	$("#modalContent").load(elementURL);
});

$(".directLink").click(function(event) {
	event.preventDefault();
	var elementURL = $(this).attr("href");
	window.open(elementURL, "_self");
});

$(document).ready(function() {

	// $("").click(hideable);
	$(".scrollup").click(scrollMe);
	// Shows and hides scroll-to-top button
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
