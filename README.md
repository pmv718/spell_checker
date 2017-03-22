 ** Domain based Spell Checker<br/>
 --------------------------------------------------------------------------------
 It contains a common dictionary for checking if a word is in the English dictionary and probably the following can happen,<br/>
     (i)  If a word is in the dictionary, the actual word is returned<br/>
    (ii) If a word is not in the dictionary , it checks the wrong word with a default english dictionary and matched it with your <br/> corpus which can be your own set of words and brings the most accurate match.<br/>
 A separate corpus is maintained so that if your website is regarding travel, you can put your own words in it which reduces the <br/> time for replacing each wrong word as it does'nt have to loop through the entire english dictionary having umpteen of<br/> words. Mostly the spell corrected is an exact word which the user meant.<br/>

 Welcome!!<br/>
 Please follow these steps before using Domain-based spell-checker in your project<br/>
--------------------------------------------------------------------------------
 ** steps : <br/>
 npm install Domain-based-spellChecker<br/>

 **test : <br/>
   mocha test<br/>

 **Uses  <br/>
  main.js :<br/>
 let spellcheck = require('./src/Domain-based-spellChecker');<br/>
 let wrongWord = 'travl by bs';<br/>
 let correctSpell = spellcheck(wrongWord);<br/>
 console.log('Wrong word     : '+wrongWord);<br/>
 console.log('Corrected word : '+correctSpell.query);<br/>

 **Known issues : <br/>
   Currently Domain-based spell checker supports only one edits as default.

 **Road map : <br/>
   A more enhanced version of this should be able to modify its edits for each word to bring up an exact corrected match for the   wrong word.
