//  @Mayanka:  just require 'spellChecker' in your file to use it
let spellcheck = require('./src/spellChecker');
//  @Mayanka: sample wrong word or sentence
let wrongWord = 'travl by bs';
//  @Mayanka: passing it to spellcheck and storing correct word in correctSpell
let correctSpell = spellcheck(wrongWord);
console.log('Wrong word     : '+wrongWord);
// @Mayanka:  query contains corrected word
console.log('Corrected word : '+correctSpell.query);
