const originalWords = process.argv.slice(2);
console.log(originalWords);

for(let i =0; i < originalWords.length; i++) {
  let word = originalWords[i]
  console.log(word)
  let output = ""; 
  for(let j=0; j < word.length; j++) {
    let letter = word[j]
    console.log(letter)
    output = letter + output
  }
  console.log(output);
}