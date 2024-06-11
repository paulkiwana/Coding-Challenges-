//My original solution with a for loop
const vowels = ['a', 'e', 'i', 'o', 'u'];

const inputWord = prompt('your word');

const vowelCount = (inputWord) => {
  let totalVowCount = 0;  // Define inside the function to avoid global scope
  
  const word = inputWord.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      totalVowCount++;
    }
  }

  return totalVowCount;
}

const totalVowels = vowelCount(inputWord);

if (totalVowels > 1) {
  console.log("Your word has " + totalVowels + " vowels");
} else if (totalVowels === 1) {
  console.log("Your word has " + totalVowels + " vowel");
} else {
  console.log("Your word has no vowels");
}

/*//My original solution after Chat gpt told me 
 //that I could use the let char method 

const vowels = ['a', 'e', 'i', 'o', 'u'];

const inputWord = prompt('your word');

const vowelCount = (inputWord) => {
  let totalVowCount = 0;  // Define inside the function to avoid global scope
  
  const word = inputWord.toLowerCase();

  for (let char of word) {
    if (vowels.includes(char)) {
      totalVowCount++;
    }
  }

  return totalVowCount;
}

const totalVowels = vowelCount(inputWord);

if (totalVowels > 1) {
  console.log("Your word has " + totalVowels + " vowels");
} else if (totalVowels === 1) {
  console.log("Your word has " + totalVowels + " vowel");
} else {
  console.log("Your word has no vowels");
}

//Meta AI solution with regex blowing my mind 
function count_vowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(count_vowels("Celebration")); // 5
console.log(count_vowels("Palm")); // 1
console.log(count_vowels("Prediction")); // 4
*/