export default {
  swithchToLanguageString: 'Svenska',

  header: {
    title: 'Book a group study room'
  },
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
      listOfRoomsHeader: 'Available rooms at',
    },
    backToListOfRoomsNav: 'All rooms',
    closeButton: 'Close',

    statusStrings: {
      booked: 'Booked',
      available: 'Available'
    },

    loginForm: {
      outletHeader: "Sign in",
      header: 'Book this room',
      patrionCardNumber: 'GU Card number *',
      personalSecurityNumber: 'Password *',
      signature: 'Signature *',
      bookButton: 'Book',
      okButton: 'Ok',
    },

    myBookings: {
      headerMyConfirmableBookings: 'Bookings to confirm',
      headerMyConfirmedBookings: 'Bookings that are confirmed',
      headerMyBookings: 'My bookings',
      cancelBookingButton: 'Cancel',
      confirmBookingButton: 'Confirm',
      noBookingsMessage: 'You have no bookings',
      countdownStrings: {
        startInBefore: 'Starting in',
        startInAfter: 'minutes',
        startedAgoBefore: 'Started',
        startedAgoAfter: 'minutes ago',
      },
    },
    error: {
      passUnavail: 'This session is no longer available. Someone got to it before you. Try to book another session!',
      passLimitError: 'A user can take up two sessions within a day, and you have already booked two sessions today.',
      checkLoginInformation: 'Check your data!',
    },
    success: {
      bookSuccess: 'This room has now been booked for you.',
      cancelBookingSuccess: 'This room has been cancelled.',
      confirmSuccess: 'This room has now been confirmed',
    }



};
