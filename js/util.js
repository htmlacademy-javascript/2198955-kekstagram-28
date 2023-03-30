

// Функция для генерации случайного числа в заданном диапазоне
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации случайного предложения из заданного списка
export const getRandomSentence = (sentences) => {
  const index = getRandomNumber(0, sentences.length - 1);
  return sentences[index];
};


