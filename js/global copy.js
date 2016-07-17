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

// hides inline alerts (which have x on top right) on click
function hideable(){
	$(this).addClass("hide-me");
	return false;
}




		// $(function(){
			
		// 	var $container = $('#isotopeContainer');
			
		// 	$container.isotope({
		// 		itemSelector: '.projectCard'
		// 	});
			
		// });

// Sorting Cards = = = = =

// $('#isotopeContainer').isotope({
// 	getSortData : {
// 		name : function ( $elem ) {
// 			return $elem.find('.name').text();
// 		},
// 		client : function ( $elem ) {
// 			return $elem.find('.client').text();
// 		},
// 		type : function ( $elem ) {
// 			return $elem.find('.type').text();
// 		}
// 	}
// });



// $('#sort-by a').click(function(){

// 	// get href attribute, minus the '#'
// 	var sortName = $(this).attr('href').slice(1);
// 	$('#isotopeContainer').isotope({ sortBy : sortName });
// 	return false;
// });

//  $(window).resize(function() {
//   if ($(window).width() < 960) {
//      alert('Less than 960');
//   }
//  else {
//     alert('More than 960');
//  }
// });

 //$('.projectCard').width();

//alert($columnWidthVar);

$(window).load(function(){
// $( document ).ready(function() {
//var $columnWidthVar = 8;// $('#sampleProjectCard').width();

			// $(window).on('resize', function() {

			// 		if ( $(window).width() < 641) {
			// 			// alert('More than 640 resize');
			// 		$columnWidthVar = 160
			// 		}
			// 		else {
			// 		$columnWidthVar = 242
			// 		}
			// 		// alert($columnWidthVar);
			// 		 $container.isotope({columnWidth : $columnWidthVar});
			// 		//$container.isotope('reLayout');
			// });

	$(window).on('resize', function() {
		//$container.isotope('reLayout');
	});

			var $container = $('#isotopeContainer');
			
			$container.isotope({

				itemSelector : '.projectCard',
				// resizable: false,
				masonry : {
					columnWidth : 8
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
					// date : function( $elem ) {
					// 	return $elem.attr('data-date');
					// }
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

			//$('#isotopeContainer').isotope({ sortBy : date });

		});
// = = = = = = = = = = = = 



// rearranging project cards using the select box;
$(".menu select").change(function() {
	//window.location = $(this).find("option:selected").val();
	var sortAtt = $(this).find("option:selected").val();
	$('#isotopeContainer').isotope({ sortBy : sortAtt });
	return false;
});


// Modal loader
$(".modal #modalCloseButton").click(function(event) {
	$('#modal').fadeOut('fast');
});

$(".projectCard").click(function(event) {
	event.preventDefault();
	var elementURL = $(this).attr("href");
	$(".modal").fadeIn('fast');
	$("#modalContent").load(elementURL);
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

// offsetting anchor tags scrolling (due to the fixed header)
// $('a[href="#past-clients"]').on('click',function(e){
//   // prevent normal scrolling action
//   e.preventDefault();
//   var target = $(this.hash);
//   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//            window.scrollTo(0, target.offset().top - 86); // <-- our offset
//       return false;
//   }
// });