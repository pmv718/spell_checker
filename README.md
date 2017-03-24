## Domain based Spell Checker

This module performs spell checks of a word or sentence against the vocabulary of a domain, maintained in a corpus.  
 ***
## Steps :

 ` npm install domain-based-spellchecker `

## Test :

 ` mocha test `

## Usage :

## main.js :
 ` let spellcheck = require('./domain-based-spellchecker');`     
 ` let wrongWord = 'travl by bs';`    
 ` let correctSpell = spellcheck(wrongWord);`    
 ` console.log('Wrong word     : '+wrongWord);`    
  ` console.log('Corrected word : '+correctSpell.query);`    

## Known issues :
Currently domain-based spell checker supports only one edit distance.

## Road map :
The next version of domain-based spell checker should have more enhance edit distance implementation to bring up an exact correct match for the wrong word.

### For additional information, please refer  [here](https://github.com/pmv718/spell_checker/wiki)
