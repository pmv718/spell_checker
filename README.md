** Domain based Spell Checker

It contains a common dictionary for checking if a word is in the English dictionary and probably the following can happen,
  (i)  If a sword is in the dictionary, the actual word is returned
  (ii) If a word is not in the dictionary , it goes to your set of words in the corpus and brings the exact match.
Its done so because if your website is regarding travel, you can put your own words in it which reduces the time for replacing each wrong word and mostly the corrected word that is returned is accurate.

Welcome!!
Please follow these steps before using Domain-based spell-checker in your project
--------------------------------------------------------------------------------
** steps
 npm install Domain-based-spellChecker

**test
  mocha test

**Known issues
  Currently Domain-based spell checker supports only one edits as default.

**Road map
  A more enhanced version of this should be able to modify its edits for each word to bring up an exact corrected match for the wrong word.
