## Domain based Spell Checker

This module performs spell checks of a word or sentence against the vocabulary of a domain, maintained in a corpus.  When you pass a word or sentence as an argument to the spell checker, it performs the following steps:
1. Checks whether or not the word is present in the built-in dictionary. If present,  the word is assumed to be correct.
2. If the check against the dictionary fails, the module  looks into the corpus to retun the correctly spelled word.
To optimally use the Spell Checker for more accurate match, update the corpus with words based on your project domain, such as Travel, Insurance, and Entertainment. You can locate the corpus as domainSpecificWords.txt inside the corpus folder.
 ***
## Steps :

npm install domain-based-spellChecker

## Test :

mocha test

## Usage :

## main.js :
 ` let spellcheck = require('./src/Domain-based-spellChecker');`
 ` let wrongWord = 'travl by bs';`
 ` let correctSpell = spellcheck(wrongWord);`
 ` console.log('Wrong word     : '+wrongWord);`
 ` console.log('Corrected word : '+correctSpell.query);`

## Known issues :
Currently Domain-based spell checker supports only one edit distance.

## Road map :
The next version of Domain-based spell checker should have more enhance edit distance implementation to bring up an exact correct match for the wrong word.

### For additional information, please refer  [here](https://github.com/pmv718/spell_checker/wiki)
