(function() {
  var app = angular.module('myQuotes', []);

 app.controller('myquoteController', function(){
    this.quotes= quotes;
  });

  var quotes = [
    { text: 'If I were Taylor Swift...', author: 'Billy'},
    {text: 'Some people never go crazy, what truly horrible lives they must lead', author: 'Charles Bukowski' },
    { text: 'People Are Strange', author: 'The Doors' },
    { text: 'Whats my age again?', author: 'Blink182'},
   { text: 'The future is called "perhaps," which is the only possible thing to call the future.  And the only important thing is not to allow that to scare you.', author:'~Tennessee Williams, Orpheus Descending'},
   { text: 'I hate mankind, for I think myself one of the best of them, and I know how bad I am.', author:'~Joseph Baretti,'},
    { text: 'But I am the administrator and I did contact myself', author:'Olive'},
   { text: 'Billy sounds like he is dying over there...Billy is always dying',author:'Chelsie and Jade'},
    { text: 'My biggest fear in life is Bugs ... and dying alone', author:'Nicole R'},
   { text: 'Gandi does not quote, he iss dead!', author:'Sophie'},
   { text: 'as soon as you assign gender to a robot... they have won!', author:'Sophie'},
   { text: 'Under croutching peepees?', author:'Hilary'}
      
    ];
})();
