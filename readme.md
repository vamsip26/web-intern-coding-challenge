Web Intern Coding Challenge (Best Pizza Around Town)
=======================
Completed by Brendan Baalke


Configuration / Installation
----------------------------
* The Pizzeria site is hosted on github pages and can be accessed via the link below:
  [Pizzeria](http://quazemo.github.io/web-intern-coding-challenge/Pizzeria/src/templates/)

* Run locally by downloading this repository onto your local machine. I have tested this project primarily with the Chrome web browser so if you test with another browser there may be bugs. To get the project up and running locally just point Chrome to the index.html file within Pizzeria -> src -> templates -> index.html. To do this first unzip the repository files, then navigate to the index.html file and right click and choose "open with -> Chrome." Or you can use MAMP for a local server environment. Instructions for using MAMP are at the bottom of this readme.


Libraries / Dependencies
----------------------------
* jQuerySession Plugin
	- I use this public jQuery session plugin so I can make use of session storage for each item in my pizza list.<br />
  [Source](https://github.com/AlexChittock/JQuery-Session-Plugin)

* jQuery Library Version 3.2.0
	- jQuery provides session storage, and simple to read web scripting. As well as quick web service implementation. Since this web service is so small jQuery seems ideal, but if this was larger I would try to use more native JavaScript for better performance.<br />
  [jQuery Code](https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js)<br />
  [Download jQuery](https://jquery.com/download/)


Problem
-------
* ***Best Pizza Around Town***
- **Brief Description:**
	- Create a user friendly web service for finding the latest and top rated pizza restaurants around the world!
	Design UX/UI that is simple enough to handle/understand for users of all ages.

- **Requirements:**
	- Allow users to find pizzeria's by city name.
	- List pizzeria's elegantly.
	- Allow users to click on listed pizzeria and gain additional information from restaurants website.

- **Questions to think about:**
	- What are some use cases?
	- What are some scenarios?
	- When might a user want pizza?
	- How far away of an order might they consider too far?
	- How long are they willing to wait?
	- What kind of options would they want the web service to provide?
	- Are users going to order from their phone or computer, which is more likely?
	- Should this web service transfer them to the pizzeria's website or allow direct ordering/navigation?
	- What happens if a user searches for a specific pizzeria that has many locations around the world?
	- Should the first pizzeria listed be the pizzeria closest to their current location?


Solution
--------
  - **Design:**
	- I designed Pizzeria with mobility in mind. I used Flexbox/CSS styling to allow the site to scale down well to mobile phone resolutions. I wanted to make the UI as simple as possible to navigate, which is why I designed one input textarea and one button. The idea is to have all the nitty gritty work happen in the background and make sure the user is not overwhelmed. Once the list of pizzeria's is displayed then allow the user to select one, and then choose options like 'order' or 'route'. The Athena's Pizza background image added a nice touch since the tilt shift draws users into the content on the page. Plus the blur emphasizes the 'Pizzeria' title. I also think this image reflects what someone might visualize when they picture a delicious pizza on the dinner table.

  - **Functionality:**
	- I decided to use jQuery for the similar CSS syntax, and API data simplicity. Since jQuery also makes working with JSON data so easy this improved my productivity. JQuery will make this site easier to change if needed in the future. jQuery is also typically easier to understand for new web developers. I used Flexbox for flow and arranging my design. Flexbox offers greater design control with less code and I find it very intuitive. I use the jQuerySession plugin so that I only store data for a single web session, and I make sure to clear the data with every search result. Since I only use the city name I didn't see a need to use the "INDEX" and "SHOW" endpoints from the pizza API.

  - **Testing / Validation:**
	- I perform form validation as well as some API validation within my jQuery code. Checked that all file permissions are safe. Created a simple Content Security Policy header to avoid code injection from untrusted sources. Outside of programming I have tested Pizzeria on Chrome, Mozilla Firefox, Safari/Safari mobile, and Internet Explorer. <br />
  ```javascript
	$.session.clear();
	$('#pizza-list').empty();
	var location = $('#city').val().toString();
	if (!location.trim()) {
		$('#list').html("<h3 class='loading'>Please enter a city name</h3>");
	} else {
		$('#list').html("<h3 class='loading'>Loading pizzeria's");
		$.getJSON("http://shipt-pizza-api.herokuapp.com/api/v1/properties/search?city=" + location, function(json) {
			if (json.length == 0) {
				$('#list').html("<h3 class='loading'>Nothing found for " + location + "</h3>");
  ```
<br />
With Additional Time
--------------------
* I would focus primarily on testing as much as possible before creating new features. A feature I would like to add later though would be the ability to save cookies locally for the list of pizzeria's. That way a users previous list is repopulated when they return to the website. I would perform tests for other scenarios such as 'what happens when a user switches from wifi to their mobile service provider'? Does the service freeze, crash, glitch out? I'd like to spend time working on some automated tests to ping the Pizza API Server to make sure it is online before trying to get data from it. I'd check for more possibilities of code injection (XSS attacks...etc). I would look into the possibility of adding a feature to allow users to directly order pizza or begin navigation from the site. I'd also look at changing some of the jQuery to JavaScript for better performance, since jQuery adds a bit more overhead from tasks like ```$('#city').val()``` I would look for a higher resolution background image with similar appeal, and look into having a script determine which device is currently viewing the site. That way I can adjust the screen ratio and resolutions to allow for a better user experience. Gathering "hands-on" user feedback and surveying the public is a great way to continue rapidly prototyping this site incrementally.


Resume / Profiles / Projects
------------------------
* LinkedIn -> [LinkedIn](https://www.linkedin.com/in/brendan-baalke-192444114)
* My online portfolio -> [brendanbaalke.com](www.brendanbaalke.com)
* My indie game studio -> [xealousstudios.com](www.xealousstudios.com)
* Angellist -> https://angel.co/brendan-baalke
* JourneyApp -> https://github.com/quazemo/JourneyApp


Useful Tools
------------
* MAMP for a local server environment
  - Download MAMP [here](https://www.mamp.info/en/downloads/) and navigate to where MAMP has installed. Drag this project folder into the folder inside MAMP called "htdocs". Then start MAMP hit "start servers" and click on the WebStart page button. Click on "My Website" once the MAMP homepage has loaded. Then navigate to the directory containing index.html.

* CSS Flexbox
	- Flexbox allowed me to align my main content horizontally and vertically very easily. If I want to add further content to my site the ".flex-container" and ".flex-item" classes will be useful.
