console.log('string', process.argv[2]);

var originalWords = process.argv.slice(2);
var pigLatinWords = [];

console.log("originalWords is", originalWords);
console.log("pigLatinWords is", pigLatinWords);

for (var i = 1; i < originalWords.length; i++) {
  console.log('i, originalWords[i]', i, originalWords[i])
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

// function translateToPigLatin(word) {
//  return word.slice(2, word.length) + word[0] + "ay";
// }

function translateToPigLatin(word) {
  console.log("Word", word);
  console.log("First letter", word[0]);
  console.log("Rest of word", word.slice(2, word.length));
  return word.slice(2, word.length) + word[0] + "ay";
}