/* jQuery and JS for Pizza API */
$(document).ready(function() {

	/* placeholder focusing */
	$('#city').data('ph', $('#city').attr('placeholder'));
	$('#city').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('#city').focusout(function () {
        $(this).attr('placeholder', $(this).data('ph'));
    });

	/* check whether 'Find Me Pizza' button clicked or enter key pressed */
	$('#find').click(function() {
		findPizza();
		$(this).closest('form').find("input[type=text], textarea").val("");
	});
	$('#city').keydown(function(event) {
		if(event.keyCode == 13){
			event.preventDefault();
			findPizza();
			$(this).closest('form').find("input[type=text], textarea").val("");
		}
	});

	/* Clickable list items direct to pizzeria website */
	$('#pizzeria-list').on("click", "li", function() {
		var listItem = $(this).index().toString();
		var url = $.session.get(listItem).toString();
		window.location.href = url;
	});

	/* Query Pizza API for pizzeria's
	 * (First) validate form information
	 * (Second) get JSON objects
	 * (Third) validate JSON data
	 * (Fourth) make pizzeria list
	 */
	var findPizza = function() {
		$.session.clear();
		$('#pizzeria-list').empty();
		var location = $('#city').val().toString();
		/* (First) */
		if (!location.trim()) {
			$('#list').html("<h3 class='loading'>Please enter a city name</h3>");
		} else {
			/* (Second) */
			$('#list').html("<h3 class='loading'>Loading pizzeria's");
			$.getJSON("http://shipt-pizza-api.herokuapp.com/api/v1/properties/search?city=" + location, function(json) {
				/* (Third) */
				if (json.length == 0) {
					$('#list').html("<h3 class='loading'>Nothing found for " + location + "</h3>");
				} else {
					/* (Fourth) */
					var total = json.length;
					var list = $('#pizzeria-list');
					$('#list').html("<h3 class='loading'>" + total + " Pizzeria's Near " + location + "<br>"
						+ "Click a Pizzeria for more information</h3>");
					$.each(json, function(index, object) {
						var restaurantName = json[index].properties.pizzeria;
						var restaurantAddress = json[index].properties.address;
						$.session.set(index, json[index].properties.website);
						var item = "<li><p>Name: " + restaurantName + "<br> Address: " + restaurantAddress + "</p></li>";
						list.append(item);
					});
				}
			});
		}
		return false;
	}
});
