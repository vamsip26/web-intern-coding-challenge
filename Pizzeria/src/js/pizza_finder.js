/* jQuery and JS for Pizza API */
$(document).ready(function() {
	$('#find').click(function() {
		findPizza();
		$(this).closest('form').find("input[type=text], textarea").val("");
	});
	$('#city').keyup(function(event) {
		if(event.keyCode == 13){
			findPizza();
			$(this).closest('form').find("input[type=text], textarea").val("");
		}
	});
	var findPizza = function() {
		var location = $('#city').val();
		console.log('location is: ', location);
		if (!location.trim()) {
			$('#validation').html("<h3 class='loading'>Please enter a city name</h3>");
		} else {
			$('#validation').html("<h3 class='loading'>Loading pizzeria's");
			$.getJSON("http://shipt-pizza-api.herokuapp.com/api/v1/properties/search?city=" + location, function(json) {
				if (json.length == 0) {
					$('#validation').html("<h3 class='loading'>Nothing found for " + location + "</h3>");
				} else {
					console.log(json);
					var total = "" + json.length;
					var list = $('#pizza-list');
					$('#validation').html("<h3 class='loading'>" + total + " pizzeria near " + location + "</h3>");
					$.each(json, function(index, object) {
						var restaurantName = json[index].properties.pizzeria;
						var restaurantAddress = json[index].properties.address;
						var item = "<li>" + restaurantName + " " + restaurantAddress + "</li>";
						list.append(item);
					});
				}
			});
		}
		return false;
	}
});
