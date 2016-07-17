// displays selected subcategory
$(document).ready(function(){
	// when user selects anything on dropdown
	$('.selector').change(function() {
		//  Hide all specialty lists
		$(".specialties").hide();
		//  Show the selected specialty list
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