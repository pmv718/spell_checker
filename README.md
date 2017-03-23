 ## Domain based Spell Checker
 ***
 This module performs spell checks of a word or sentence against the vocabulary of a domain, maintained in a corpus.

 Welcome!!
 Please follow these steps before using Domain-based spell-checker in your project
***
 ## Steps :
  npm install Domain-based-spellChecker

 ## Test  :
   mocha test

 ## Uses  :
  main.js :
 let spellcheck = require('./src/Domain-based-spellChecker');
 let wrongWord = 'travl by bs';
 let correctSpell = spellcheck(wrongWord);
 console.log('Wrong word     : '+wrongWord);
 console.log('Corrected word : '+correctSpell.query);

 ## Known issues :
   Currently Domain-based spell checker supports only one edit as default.

 ## Road map :
   A more enhanced version of this should be able to modify its edits for each word to bring up an exact corrected match for the   wrong word.
