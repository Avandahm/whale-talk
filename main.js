var input = 'How are you';

var vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray= [];

for (let i = 0; i < input.length; i++) {
  const myVowels = input[i];
  
  for (let j = 0; j < myVowels.length; j++) {
    const vowel = myVowels[j];
    
    console.log(vowel);
  }
}
