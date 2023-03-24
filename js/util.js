import {commentSentences} from './commentSentences.js';

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации случайного предложения из заданного списка
const getRandomSentence = (sentences) => {
  const index = getRandomNumber(0, sentences.length - 1);
  return sentences[index];
};

// Функция для генерации случайного комментария
const generateComment = () => {
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const message = getRandomSentence(commentSentences);
  const name = 'Гость';
  return { id: getRandomNumber(1, 1000), avatar, message, name };
};

// Функция для генерации объектов фотографий
const generateComments = (count) => {
  const comments = [];
  const usedCommentIds = new Set();

  for (let j = 1; j <= count; j++) {
    let commentId = getRandomNumber(1, 1000);
    while (usedCommentIds.has(commentId)) {
      commentId = getRandomNumber(1, 1000);
    }
    usedCommentIds.add(commentId);
    comments.push({ id: commentId, ...generateComment() });
  }

  return comments;
};

const generatePhotos = (count) => {
  const photos = [];
  const usedIds = new Set();

  for (let i = 1; i <= count; i++) {
    let id = getRandomNumber(1, count);
    while (usedIds.has(id)) {
      id = getRandomNumber(1, count);
    }
    usedIds.add(id);

    const url = `photos/${i}.jpg`;

    const commentsCount = getRandomNumber(0, 10);
    const comments = generateComments(commentsCount);

    const likes = getRandomNumber(15, 200);
    const description = getRandomSentence(commentSentences);
    photos.push({ id, url, description, likes, comments });
  }

  return photos;
};

export {generatePhotos};

