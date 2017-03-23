 ** Domain based Spell Checker<br/>
 -------------------------------------------------------------------------------
 If a word or sentence is passed as an argument to the spell checker, the following are the possibilities:<br/>
     (i) It checks whether the word is in the dictionary and if it is present, it's obviously the right word and so no    
         spell correction happens and the same word is returned. <br/>
    (ii) If the input word is not in the dictionary, spell check matches it with your <br/> corpus which can be your own set of
         words based on your project domain(travel,restaurants,e-commerce and so on) and brings the most accurate match.<br/>
 A separate corpus is maintained so that if your website is regarding 'travel', you can put your own words in the domainSpecificWords file(corpus folder) which reduces the time for replacing each wrong word as it doesn't have to loop through the entire English dictionary consisting of lakhs of words. Mostly the spell corrected word is an exact match which the user literally meant.<br/>

 Welcome!!<br/>
 Please follow these steps before using Domain-based spell-checker in your project<br/>
--------------------------------------------------------------------------------
 **Steps : <br/>
  npm install Domain-based-spellChecker<br/>

 **Test  : <br/>
   mocha test<br/>

 **Uses  : <br/>
  main.js :<br/>
 let spellcheck = require('./src/Domain-based-spellChecker');<br/>
 let wrongWord = 'travl by bs';<br/>
 let correctSpell = spellcheck(wrongWord);<br/>
 console.log('Wrong word     : '+wrongWord);<br/>
 console.log('Corrected word : '+correctSpell.query);<br/>

 **Known issues : <br/>
   Currently Domain-based spell checker supports only one edit as default.

 **Road map : <br/>
   A more enhanced version of this should be able to modify its edits for each word to bring up an exact corrected match for the   wrong word.
