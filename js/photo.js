import { generatePhotos } from './data.js';

const PICTURE_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
const PICTURES_CONTAINER = document.querySelector('.pictures');

// Функция для создания DOM-элемента на основе данных фотографии
const createPictureElement = (picture) => {
  const pictureElement = PICTURE_TEMPLATE.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureElement;
};

// Функция для отрисовки списка фотографий
const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPictureElement(picture);
    fragment.appendChild(pictureElement);
  });

  PICTURES_CONTAINER.appendChild(fragment);
};

// Генерируем фотографии и отрисовываем их на странице
const photos = generatePhotos(10);
renderPictures(photos);
