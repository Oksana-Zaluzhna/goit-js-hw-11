import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', handleSearch);

const refreshPage = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function handleSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';

  const inputValue = input.value.trim();
  if (!inputValue) {
    loader.style.display = 'none';
    iziToast.error({
      maxWidth: 432,
      position: 'topRight',
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  fetchImages(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          maxWidth: 432,
          position: 'topRight',
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      gallery.innerHTML = createMarkup(data.hits);
      refreshPage.refresh();
      form.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}
