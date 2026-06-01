const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

// 1. Removes special characters using the requested split/join method
const removeSpecialChars = function(sentence) {
  let updatedSentence = sentence;
  for (let char of specialChars) {
    // Split on the special char and join with an empty string to erase it
    updatedSentence = updatedSentence.split(char).join("");
  }
  return updatedSentence;
};

// 2. Converts to lowercase, cleans characters, and splits into an array
const cleanText = function(sentence) {
  const lowercased = sentence.toLowerCase();
  const cleanedSentence = removeSpecialChars(lowercased);
  // Split by spaces to turn the string into an array of words
  return cleanedSentence.split(" ");
};

// 3. Updates the global wordCounts object
const addToCounter = function(word) {
  if (wordCounts[word]) {
    wordCounts[word] += 1;
  } else {
    wordCounts[word] = 1;
  }
};

// 4. Main coordinator function
const countWords = function(sentence) {
  const cleanSentence = cleanText(sentence);
  for (let word of cleanSentence) {
    addToCounter(word);
  }
};

// Run the program
countWords(story);
console.log(wordCounts);