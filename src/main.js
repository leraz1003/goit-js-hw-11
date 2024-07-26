
const form = document.querySelector('.form');
const gallery = document.querySelector(".gallery");



import { fetchRequest } from './js/pixabay-api.js';

form.addEventListener('submit', (event)=>{
  event.preventDefault();






  fetchRequest(event);
  form.reset();
  gallery.innerHTML = '';
});


