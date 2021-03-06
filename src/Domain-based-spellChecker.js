module.exports = function (query) {
//	@Mayanka	:basic testing
	if(typeof query !== 'string') {
    throw new Error('Not a String');
  }
	let natural = require('natural');
	let Spellchecker = require(__dirname + './dict/dictionary/hunspell-spellchecker');
	let fs = require('fs');
	let spellchecker = new Spellchecker();
//  @Mayanka :importing the dictionary files
	let DICT = spellchecker.parse({
		aff: fs.readFileSync(__dirname + './dict/dictionary/en_US.aff'),
		dic: fs.readFileSync(__dirname + './dict/dictionary/en_US.dic')});
	let tokenizer = new natural.WordTokenizer();
	//  @Mayanka : importing the file having domain related data
	let text = fs.readFileSync(__dirname + './dict/corpus/domainSpecificWords.txt', 'utf-8');
	let corpus = tokenizer.tokenize(text);
	let spellcheck = new natural.Spellcheck(corpus);
	let spellChecked = '';
	//  @Mayanka :	flag to indicate if spellcheck was done
  let flag = 0;
let sentence = query.split(' ');
//  @Mayanka :	passing the query,word by word
sentence.forEach(function(word)
{
if(!spellchecker.check(word))
{
	spellChecked = spellcheck.getCorrections(word)[0];
	query = query.replace(word, spellChecked);
}
});
//  @Mayanka : strArray to verify with spell corrected sentence
let strArray = query.trim().split(' ');
//  @Mayanka :	check for spellcheck in any word
 for(let i in sentence)
 {
    if(sentence[i] !== strArray[i])
		{
//	@Mayanka: if flag is one, spell correction is done
      flag = 1;
        break;
    }
  }
	//	@Mayanka : returns spellcorrected word or sentence
    return {
    query
  };
};
