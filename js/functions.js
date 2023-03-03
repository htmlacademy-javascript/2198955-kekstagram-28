

const isShortLength = (string, number) => string.length <= number;
isShortLength('Hello World', 20);

const isStringLengthEquals = (string, number) => string.length === number;
isStringLengthEquals('Должно быть всё ок', 18);

const isMoreToLength = (string, number) => string.length > number;
isMoreToLength('Все и есть ок!!!', 10);


const isPalindrom = (string) => {
  const tempString = string.toLowerCase().split(' ').join('');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return tempString === reverseString;
};
isPalindrom('Лёша на полке клопа нашёл');

const extractDigitsFromString = (str) => {
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
};
extractDigitsFromString('2023 год');

const addCharactersToBeginning = (str, minLength, additionalChars) => {
  if (str.length >= minLength) {
    return str;
  }
  let additionalCharsUsed = '';
  while (additionalCharsUsed.length < minLength - str.length) {
    additionalCharsUsed += additionalChars;
  }
  return additionalCharsUsed.slice(-1 * (minLength - str.length)) + str;
};
addCharactersToBeginning('1', 2, '0');
