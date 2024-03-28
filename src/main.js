import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../src/js/pixabay-api';
import { renderImages } from './js/render-function';
export const refs = {
  formEl: document.querySelector('form'),
  inputEl: document.querySelector('input.form-control'),
  ulEl: document.querySelector('ul.gallery'),
};

export const loadButton = document.getElementById('load-button');
export const loaderDiv = document.getElementById('loader');
export let page = 1;
export let limit = 15;

export let query = '';
refs.inputEl.addEventListener('input', e => {
  e.preventDefault();
  query = refs.inputEl.value.trim();
  refs.ulEl.innerHTML = '';
  loaderDiv.className = 'loader visually-hidden';
  loadButtonButton.className = 'loader visually-hidden';
});
const searchBtn = document.querySelector('.btn');
searchBtn.addEventListener('click', async () => {
  refs.ulEl.innerHTML = '';
  loader.className = 'loader';
  page = 1;
  limit = 15;
  try {
    if (query) {
      loadButton.className = '';
      // refs.ulEl.innerHTML = <div class="loader"></div>;
      const posts = await fetchImages(query);
      renderImages(posts);
      loader.className = 'loader visually-hidden';
      page += 1;
    }
  } catch (error) {
    loadButton.className = 'visually-hidden';
    iziToast.error({
      title: 'Error',
      backgroundColor: 'red',
      position: 'topRight',
      message:
        'Please Sorry, there are no images matching your search query. Please try again! again!',
    });
  }
});
loadButton.addEventListener('click', async () => {
  loader.className = 'loader';
  try {
    if (query) {
      const posts = await fetchImages(query);
      const totalItems = posts.totalHits;
      renderImages(posts);
      const currentPageItems =
        document.querySelectorAll('.gallery-item').length;
      if (currentPageItems >= totalItems) {
        loadButton.className = 'visually-hidden';
        loaderDiv.className = 'visually-hidden';
        return iziToast.error({
          title: 'Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      renderImages(posts);
      loaderDiv.className = 'loader visually-hidden';
      const rect = loadButton.getBoundingClientRect();
      scrollBy(rect.x, rect.y);
      page += 1;
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      backgroundColor: 'red',
      position: 'topRight',
      message:
        'Please Sorry, there are no images matching your search query. Please try again! again!',
    });
  }
});
