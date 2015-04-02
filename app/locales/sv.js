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
prompt: 'Välj datum'
}
},
missingLibraryInFilter: 'Du måste välja ett bibliotek',
noResultForActiveFilter: 'Det finns inga lediga rum',
 
dateStrings: {
today: 'Idag',
tomorrow: 'Imorgon'
},
},
room: {
  meta: {
  seats: 'seat(s)', // will result in 2 seat(s) //va? Ingen aning om vad detta är ens
  computer: 'dator',
  whiteboard: 'whiteboard'
  },
  listOfRoomsHeader: 'Lediga rum:',
  },
  backToListOfRoomsNav: 'Tillbaka till alla rum',
  closeButton: 'Stäng',
 
  statusStrings: {
  booked: 'Bokad',
  available: 'Ledig'
  },
 
  loginForm: {
  header: 'Boka grupprum',
  patrionCardNumber: 'Nummer på GU-kort/bibliotekskort',
  personalSecurityNumber: 'Personnummer',
  signature: 'Signatur',
  bookButton: 'Boka',
  },
 
 
  error: {
  passUnavail: 'Någon hann boka det här rummet före dig. Välj ett annat rum eller annan tid.',
  passLimitError: 'You have overstepped your available booking-ratio',
  checkLoginInformation: 'Kontrollera uppgifterna!',
  },
  success: {
  bookSuccess: 'This slot has now been booked for you'
  }
 
 
 
};