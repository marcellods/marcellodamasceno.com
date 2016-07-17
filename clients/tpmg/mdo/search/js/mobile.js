// displays selected subcategory
$(document).ready(function(){
	// when user selects anything on dropdown
	$('.selector').change(function() {
		//  Hide all location addresses
		$(".specialties").hide();
		//  Show the selected location address
		$('#' + $(this).find('option:selected').attr('value')).fadeIn();
		//  At the end, we add return false so that the click on the link is not executed
		//alert($(this).find('option:selected').attr('value'));
		return false;
	});
	// hides all addresses on load
	$(".specialties").hide();

	$('#submit').addClass('hide-me');
	$('input').change(function(e) {
		if (
			$('#FirstName').val()
			&& $('#LastName').val()
			&& $('#specialty-selector').val()
			&& $('#location-selector').val()
		) {
				$('#submit').removeClass('hide-me');
			}
	});
});

// $('form > input').keyup(function() {

//     var empty = false;
//     $('form > input').each(function() {
//         if ($(this).val() == '') {
//             empty = true;
//         }
//     });

//     if (empty) {
//         $('#submit').attr('disabled', 'disabled');
//     } else {
//         $('#submit').removeAttr('disabled');
//     }
// });