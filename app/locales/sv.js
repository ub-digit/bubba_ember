export default {
	mainNav: {
		nav1: 'Rum',
		nav2: 'Mina bokningar'
	},
	filter: {
		dropdown: {
			libraries: {
				prompt: 'Välj bibliotek'
			},
			dates: {
				prompt: 'Välj dag'
			}
		},
		missingLibraryInFilter: 'Var vänlig välj bibliotek',
		noResultForActiveFilter: 'Inga rum tillgängliga',

		dateStrings: {
			today: 'Today',
			tomorrow: 'Tomorrow'
		},
		
	},
	room: {
  		meta: {
  			seats: 'seat(s)', // will result in 2 seat(s)
  			computer: 'computer',
  			whiteboard: 'whiteboard'
  		},
  		listOfRoomsHeader: 'Availible rooms:',
  	},
  	backToListOfRoomsNav: 'Back to list of rooms',
  	closeButton: 'Close',

  	statusStrings: {
  		booked: 'Booked',
  		availible: 'Availible'
  	},

  	loginForm: {
  		header: 'Book this location',
  		patrionCardNumber: 'Cardnumber',
  		personalSecurityNumber: 'Personal security number',
  		signature: 'Signature',
  		bookButton: 'Book',
  	},	

  	error: {
  		passUnavail: 'This booking is no longer availible. Someone got to it before you. Sorry!',
  		passLimitError: 'You have overstepped your availible booking-ratio',
  		checkLoginInformation: 'Kontrollera uppgifterna!',
  	},
  	success: {
  		bookSuccess: 'This slot has now been booked for you'
  	}



};
