/* jQuery and JS for Pizza API */
$(document).ready(function() {

	/* placeholder focusing */
	$('#city').data('ph', $('#city').attr('placeholder'));
	$('#city').focusin(function () {
    $(this).attr('placeholder', "");
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
		if(event.keyCode == 13) {
			event.preventDefault();
			findPizza();
			$(this).closest('form').find("input[type=text], textarea").val("");
		}
	});

	/* allow only alphanumerics for city input */
  $("#city").keypress(function(event) {
      var inputValue = event.which;
      if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122)
      	&& (inputValue != 32 && inputValue != 0)) {
          event.preventDefault();
      }
  });

	/* capitalize first letter of city name when displayed */
	/* function allows chaining */
	String.prototype.capitalizeFL = function() {
		var cityNameSplit = this.split(" ");
		var fullCityName = "";
		var index;
		var numberOfSpaces = cityNameSplit.length - 1;

		for (index = 0; index < cityNameSplit.length; index++) {
			fullCityName += cityNameSplit[index].charAt(0).toUpperCase() + cityNameSplit[index].slice(1).toLowerCase();
			if (index != numberOfSpaces) {
				fullCityName += " ";
			}
		}
    return fullCityName;
	}

	/* clickable list items direct to pizzeria website */
	/* checks for tab creation via cmd/ctrl */
	$('#pizzeria-list').on("click", "li", function(e) {
		var listItem = $(this).index().toString();
		var url = $.session.get(listItem).toString();
		if (e.metaKey) {
			window.open(url, "_blank");
		} else {
			window.location.href = url;
		}
	});

	/* query pizza API for pizzeria's
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
					$('#list').html("<h3 class='loading'>" + total + " pizzeria's near " + location.capitalizeFL() + "<br>"
						+ "Click a pizzeria for more information</h3>");
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
