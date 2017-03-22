 ** Domain based Spell Checker<br/>
 --------------------------------------------------------------------------------
 The Two possible cases which can happen in  spell check are :<br/>
     (i) If the input word is in the dictionary, the same word is returned<br/>
    (ii) If the input word is not in the dictionary, spell check matches it with your <br/> corpus which can be your own set of words and brings the most accurate match.<br/>
 A separate corpus is maintained so that if your website is regarding travel, you can put your own words in the domainSpecificWords file(corpus folder) which reduces the time for replacing each wrong word as it doesn't have to loop through the entire English dictionary consisting of lakhs of words. Mostly the spell corrected word is an exact match which the user literally meant.<br/>

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
