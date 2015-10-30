export default {
  swithchToLanguageString: 'Svenska',
  statuses: {
    status_1: 'Available',
    status_2: 'Booked',
    status_3: 'Occupied - wating for confirmation',
    status_4: 'Occupied',
    status_5: 'Booked',
  },

  header: {
    title: 'Book a group study room'
  },
  mainNav: {
    nav1: 'Book a room',
    nav2: 'Confirm and cancel',
    nav3: 'Log out'
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
    pleaseSelectPromptText: 'Select where and when you wish to book',
    noResultForActiveFilter: 'No rooms available',

    dateStrings: {
      dateFormatString: 'dddd D MMMM',
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
      patrionCardNumberExample: '3300776403',
      personalSecurityNumber: 'Swedish personal identity number *',
      personalSecurityNumberExample: 'yymmddnnnn (10 characters)',
      signature: 'Signature *',
      signatureExample: 'Example: Albert',
      bookButton: 'Book',
      okButton: 'Ok',
      forgetMeLink: 'This is not me, clear the details'
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
      passUnavail: 'This room is no longer available. Someone got to it before you. Try to book another room!',
      passLimitError: 'You have already booked two rooms today.',
      checkLoginInformation: 'Check your details!',
    },
    success: {
      bookSuccess: 'This room has been booked.',
      cancelBookingSuccess: 'This booking has been cancelled.',
      confirmSuccess: 'This booking has been confirmed',
    }
};
