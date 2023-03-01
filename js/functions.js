

const shortLength = (string, number) => string.length <= number;
shortLength('Hello World', 20);

const equalToLength = (string, number) => string.length === number;
equalToLength('Должно быть всё ок', 18);

const moreToLength = (string, number) => string.length > number;
moreToLength('Все и есть ок!!!', 10);


const isPalindrom = (string) => {
  const tempString = string.toLowerCase();
  let reverseString = "";
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return tempString === reverseString;
}

console.log(isPalindrom(топот));


const isPalindrom = (string) => {
  const tempString = string.toLowerCase().split(' ').join('')
  console.log(tempString);
  let reverseString = "";
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return tempString === reverseString;
}

console.log(isPalindrom(''));


function extractDigitsFromString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char >= '0' && char <= '9') {
      result += char;
    }
  }
  if (result === '') {
    return NaN;
  }
  return parseInt(result, 10);
}


function addCharactersToBeginning(str, minLength, additionalChars) {
  if (str.length >= minLength) {
    return str;
  }
  let additionalCharsUsed = '';
  while (additionalCharsUsed.length < minLength - str.length) {
    additionalCharsUsed += additionalChars;
  }
  return additionalCharsUsed.slice(-1 * (minLength - str.length)) + str;
}
