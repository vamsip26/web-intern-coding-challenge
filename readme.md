Intern Coding Challenge
=======================
Completed by Brendan Baalke

Tools/Libraries
---------------
* 'free' MAMP for a local server environment
    - Download MAMP [here](https://www.mamp.info/en/downloads/) and navigate to where MAMP has installed. Drag this project folder into the folder inside MAMP called "htdocs". Then start MAMP hit "start servers" and click on the WebStart page button. Click on "My Website" once the MAMP homepage has loaded. Then navigate to the directory containing index.html.

* 'free' Sublime Text 2 editor
	- Download Sublime Text 2 [here](https://sublimetext.com/2).

* jQuery Library
	- How to include jQuery:
	```javascript
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	```

* Flexbox

My Naming Conventions
---------------------
* File names have underscores
* class's and id's in CSS have hyphens
* variables and functions in JS have camel case

Problem
-------
---
* ***Pizzeria***
	- **Description:**
		- Create a user friendly web service for finding the latest and top rated pizza restaurants around the world!
		Design UX/UI that is simple enough to handle/understand for users of all ages.

    - **Requirements:**
		- Allow users to find a pizzeria either by city name or by specific pizzeria name.
		- List pizzeria's elegantly (possibly Google Maps API integration).
		- Allow users to click on links in the list to gain additional information or start navigation to pizzeria.

    - **Questions to think about:**
		- What are some use cases?
		- What are some scenarios?
		- When might a user want pizza?
		- How far away of an order might they consider too far?
		- How long are they willing to wait?
		- What kind of options would they want the web service to provide?
		- Are users going to order from their phones and computers, which is more likely?
		- Should this web service transfer them to the pizzeria's website or allow direct ordering?
		- What happens if a user searches for a specific pizzeria that has many locations around the world?
		- Should the first pizzeria listed be the pizzeria closest to their current location?

    - **Design:**
		- I designed Pizzeria with mobility in mind. I used Flexbox/CSS styling to allow the site to scale down well to mobile phone resolutions. I wanted to make the UI as simple as possible to navigate, which is why I designed one input textarea and one button. The idea is to have all the nitty gritty work happen in the background and make sure the user is not overwhelmed. Once the list of pizzeria's is displayed then allow the user to select one, and then choose options like 'order' or 'route'. The Athena's Pizza background image added a nice touch since the tilt shift draws users into the content on the page. Plus the blur emphasizes the 'Pizzeria' title. I also think this image reflects what someone might visualize when they picture a delicious pizza on the dinner table.
			- With additional time to work on the design I would definitely look for a higher resolution background image with similar appeal. I would also like to gather additional "hands on" user feedback, and test the design on more smart phones, browsers and different screen resolutions.

    - **Functionality:**
		- I decided to use jQuery for the similar CSS syntax, and API data simplicity. Since jQuery also makes working with JSON data so easy this improved my productivity. JQuery will make this site easier to change if needed in the future, and also easy to understand for new web developers. I used Flexbox for flow and arranging my design. Flexbox offers greater design control with less code and I find it very intuitive.
			- With additional time I would test my site on Opera, Android, and Blackberry browsers to make sure my Flex styling and JQuery are working properly.

    - **Testing:**
    	```javascript
    	var location = $('#city').val();
		if (!location.trim()) {
			$('#list').html("<h3 class='loading'>Please enter a city name</h3>");
		} else {
			$('#list').html("<h3 class='loading'>Loading pizzeria's");
			$.getJSON("http://shipt-pizza-api.herokuapp.com/api/v1/properties/search?city=" + location, function(json) {
				if (json.length == 0) {
					$('#list').html("<h3 class='loading'>Nothing found for " + location + "</h3>");
    	```
    	- I perform form validation as well as some API validation within my jQuery code. Outside of programming I have tested Pizzeria on Chrome, Mozilla Firefox, Safari/Safari mobile, and Internet Explorer. In addition to testing I have had several of my friends and I try to break my web service.
    		- With additional time I would try to test and find answers to the questions above in the 'Questions to think about' section. I would also perform tests for other scenarios such as 'what happens when a user switches from wifi to their mobile service provider'? Does the service freeze, crash, glitch out? I'd also spend time working on an automated test to ping the Pizza API Server to make sure it is online before trying to get JSON data from it.

---
*   ***GitFollowers***
	- **Description**
	- **Requirements**
	- **Questions to think about**
	- **Design**
	- **Functionality**
	- **Testing**
---

Project Conclusion
------------------
* "Create a service that shows a list of the best pizza locations around the world." I thought about this line for a while trying to determine exactly how to interpret and implement this into my Pizzeria service. I decided that if someone actually used my service it wouldn't make sense to just list "all" the pizza restaraunts around the world. The purpose of the service is to let people know what pizza restaraunts are near them, and help them get the best pizza as quick as possible. That is why I decided to just use a city name as my searching parameter. I thought about using the pizzeria name as well, but if someone searched for 'flying squirrel' they could get restaraunts all over the country and that doesn't seem useful in most scenarios. Since I only use the city name I didn't need to use the "INDEX" and "SHOW" endpoints.

Resume/Profiles
---------------
* My LinkedIn -> [LinkedIn](https://www.linkedin.com/in/brendan-baalke-192444114)
* My online profile -> [brendanbaalke.com](www.brendanbaalke.com)
* My indie game studio -> [xealousstudios.com](www.xealousstudios.com)
