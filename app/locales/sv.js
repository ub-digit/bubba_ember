export default {
  swithchToLanguageString: 'English',
  statuses: {
    status_1: 'Ledigt',
    status_2: 'status 2',
    status_3: 'Upptaget - väntar på kvittering',
    status_4: 'Upptaget',
  },
  header: {
    title: 'Boka grupprum'
  },
  mainNav: {
    nav1: 'Boka grupprum',
    nav2: 'Kvittera & avboka'
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
    noResultForActiveFilter: 'Inga tillgängliga rum hittades',

    dateStrings: {
      today: 'idag',
      tomorrow: 'imorgon'
    },

  },
  room: {
      meta: {
        seats: 'platser', // will result in 2 seat(s)
        computer: 'dator',
        whiteboard: 'whiteboard'
      },
      listOfRoomsHeader: 'Lediga rum på',
    },
    backToListOfRoomsNav: 'Alla rum',
    closeButton: 'Stäng',

    statusStrings: {
      booked: 'Bokat',
      available: 'Ledigt'
    },

    loginForm: {
      outletHeader: "Logga in",
      header: 'Boka det här rummet',
      patrionCardNumber: 'Nummer på GU-kort *',
      personalSecurityNumber: 'Personnummer *',
      signature: 'Signatur *',
      bookButton: 'Boka',
      okButton: 'OK',
    },

    myBookings: {
      headerMyConfirmableBookings: 'Kan kvitteras',
      headerMyConfirmedBookings: 'Pågågende och kvitterade',
      headerMyBookings: 'Bokningar',
      cancelBookingButton: 'Avboka',
      confirmBookingButton: 'Kvittera',
      noBookingsMessage: 'Du har inga bokningar',
      countdownStrings: {
        startInBefore: 'Startar',
        startInAfter: 'minuter',
        startedAgoBefore: 'Startade',
        startedAgoAfter: 'minuter sedan',
      },
    },
    error: {
      passUnavail: 'Tyvärr, det här rummet är inte längre tillgängligt. Någon hann före dig.',
      passLimitError: 'Du har redan bokat 2 pass idag, och får tyvärr inte boka fler.',
      checkLoginInformation: 'Kontrollera uppgifterna!',
    },
    success: {
      bookSuccess: 'Du har nu bokat det här rummet.',
      cancelBookingSuccess: 'Du har nu avbokat det här rummet.',
      confirmSuccess: 'Du har nu kvitterat det här rummet.',
    }



};
