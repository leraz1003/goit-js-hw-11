import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createImageGallery } from './render-functions.js';


const gallery = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery li a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay:	250
});


export function fetchRequest(event) {


  const queryValue = event.currentTarget.elements.search_query.value.trim().toLowerCase();

  if (!queryValue) {
    return;
  }
  loader.classList.remove('hidden');


  const searchParams = new URLSearchParams({
    key: "45116727-e543bef81ffe857c5144581e6",
    q: queryValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  });

// setTimeout для того, щоб було видноloader
  setTimeout(() => {
    fetch(`https://pixabay.com/api/?${searchParams}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((value) => {
        if (value.hits.length < 1) {

          iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: "#ef4040",
            position: "topRight",
            messageSize: 16,
            messageColor: '#fff',
            messageLineHeight: "150%",

            image: '../img/eroor.svg',
            imageWidth: 24,
            timeout: 4000
          });

        } else {
          gallery.insertAdjacentHTML('beforeend', createImageGallery(value.hits));
          lightbox.refresh();
        }

      })
      .catch((error) => console.log(error))
      .finally(() => {
        loader.classList.add('hidden')
      })
  }, 1000);



}