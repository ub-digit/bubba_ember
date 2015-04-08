export default {
	mainNav: {
		nav1: 'Rooms',
		nav2: 'My bookings'
	},
	filter: {
		dropdown: {
			libraries: {
				prompt: 'Select a library'
			},
			dates: {
				prompt: 'Select a date'
			}
		},
		missingLibraryInFilter: 'Please select a library',
		noResultForActiveFilter: 'No rooms available',

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
  		listOfRoomsHeader: 'available rooms:',
  	},
  	backToListOfRoomsNav: 'Back to list of rooms',
  	closeButton: 'Close',

  	statusStrings: {
  		booked: 'Booked',
  		availible: 'Available'
  	},

  	loginForm: {
  		header: 'Book this location',
  		patrionCardNumber: 'Cardnumber',
  		personalSecurityNumber: 'Personal security number',
  		signature: 'Signature',
  		bookButton: 'Book',
      okButton: 'Okaj',
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
