| ** Domain based Spell Checker **
| --------------------------------------------------------------------------------
| It contains a common dictionary for checking if a word is in the English dictionary and probably the following can happen,.    |    (i)  If a word is in the dictionary, the actual word is returned
|    (ii) If a word is not in the dictionary , it checks the wrong word with a default english dictionary and matched it with your | corpus which can be your own set of words and brings the most accurate match.
| A separate corpus is maintained so that if your website is regarding travel, you can put your own words in it which reduces the | time for replacing each wrong word as it does'nt have to loop through the entire english dictionary having umpteen of words. |Mostly the spell corrected is an exact word which the user meant.
|
| Welcome!!
| Please follow these steps before using Domain-based spell-checker in your project
|--------------------------------------------------------------------------------
| ** steps : **
| npm install Domain-based-spellChecker
|
| **test : **
|   mocha test
|
| **Uses  **
|  main.js :
| let spellcheck = require('./src/Domain-based-spellChecker');
| let wrongWord = 'travl by bs';
| let correctSpell = spellcheck(wrongWord);
| console.log('Wrong word     : '+wrongWord);
| console.log('Corrected word : '+correctSpell.query);
|
| **Known issues : **
|   Currently Domain-based spell checker supports only one edits as default.
|
| **Road map : **
|   A more enhanced version of this should be able to modify its edits for each word to bring up an exact corrected match for the |   wrong word.
