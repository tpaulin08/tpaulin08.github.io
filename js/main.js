function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
		
	var fullName = firstName+' '+lastName

	console.log('User is called ' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult');
	} else if (userAge>= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		alert('Greetings ' + fullName + '!');
	}

}

// When the page has loaded
$(function() {

	// When the user clicks the image, ask questions
	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click', function() {

		// Hide the next element
		$(this).next().slideToggle();

	});

});