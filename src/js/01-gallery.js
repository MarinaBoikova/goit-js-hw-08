// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemsRef = document.querySelector('.gallery');

const galleryItemMarcup = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a> `
);

galleryItemsRef.insertAdjacentHTML('beforeend',  galleryItemMarcup.join(''));

let lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: "alt",
  captionDelay: 250
  });