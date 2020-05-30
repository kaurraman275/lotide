const countLetters = (sentence) => {
    const spRemSent = sentence.split(" ").join("");
    const letterCount = {};
    for (const letter of spRemSent) {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else letterCount[letter] = 1;
    } return letterCount;
  };
  console.log(countLetters("lighthouse in the house"));