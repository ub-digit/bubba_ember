export default {
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
    missingLibraryInFilter: 'Välj ett bibliotek i listan',
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
      listOfRoomsHeader: 'Tillgängliga rum:',
    },
    backToListOfRoomsNav: 'Tillbaka till lista med rum',
    closeButton: 'Stäng',

    statusStrings: {
      booked: 'Bokat',
      availible: 'Ledigt'
    },

    loginForm: {
      outletHeader: "Logga in",
      header: 'Boka det här rummet',
      patrionCardNumber: 'Lånekortsnummer',
      personalSecurityNumber: 'Personnummer',
      signature: 'Signatur',
      bookButton: 'Boka',
      okButton: 'Ok',
    },

    myBookings: {
      header: 'Mina bookningar',
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
      passLimitError: 'Du har redan bokat 2 pass idag, och får tyvärr inte boka fler',
      checkLoginInformation: 'Kontrollera uppgifterna!',
    },
    success: {
      bookSuccess: 'Du har nu bokat det här passet',
      cancelBookingSuccess: 'Du har nu avbokat det här passet',
      confirmSuccess: 'Du har nu kvitterat det här passet',
    }



};
