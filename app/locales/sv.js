export default {
  swithchToLanguageString: 'English',
  header: {
    title: 'Grupprumsbokning'
  },
  mainNav: {
    nav1: 'Grupprum',
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
      patrionCardNumber: 'Nummer på GU-kort',
      personalSecurityNumber: 'Personnummer',
      signature: 'Signatur',
      bookButton: 'Boka',
      okButton: 'OK',
    },

    myBookings: {
      headerMyConfirmableBookings: 'Bokningar att kvittera',
      headerMyBookings: 'Mina bokningar',
      cancelBookingButton: 'Avboka',
      confirmBookingButton: 'Kvittera',
      noBookingsMessage: 'Du har inga bokningar',
      countdownStrings: {
        startInBefore: 'Börjar om',
        startInAfter: 'minuter',
        startedAgoBefore: 'Började för',
        startedAgoAfter: 'minuter sedan',
      },
    },
    error: {
      passUnavail: 'Tyvärr, det här rummet är inte längre tillgängligt. Någon hann före dig.',
      passLimitError: 'Du har redan bokat 2 pass idag, och får tyvärr inte boka fler.',
      checkLoginInformation: 'Kontrollera uppgifterna!',
    },
    success: {
      bookSuccess: 'Du har nu bokat det här passet.',
      cancelBookingSuccess: 'Du har nu avbokat det här passet.',
      confirmSuccess: 'Du har nu kvitterat det här passet.',
    }



};
