import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchRequest } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector(".gallery");



form.addEventListener('submit', (event)=>{
  event.preventDefault();


  fetchRequest(event);
  form.reset();
   gallery.innerHTML = '';

});


export function initLightbox() {
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });
}