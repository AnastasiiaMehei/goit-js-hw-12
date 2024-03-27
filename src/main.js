import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../src/js/pixabay-api';
import { renderImages } from './js/render-functions';
export const refs = {
  formEl: document.querySelector('form'),
  formCont: document.querySelector('form-container'),
  inputEl: document.querySelector('input.form-control'),
  ulEl: document.querySelector('ul.gallery'),
};
export let query = '';
refs.inputEl.addEventListener('input', e => {
  e.preventDefault();
  query = refs.inputEl.value.trim();
  refs.ulEl.innerHTML = '';
});
const fetchUsersBtn = document.querySelector('.btn');
fetchUsersBtn.addEventListener('click', e => {
  e.preventDefault();
  if (query) {
    refs.ulEl.innerHTML = '<div class="loader"></div>';
    fetchImages(query)
      .then(data => renderImages(data))
      .catch(error => {
        console.log(error);
        iziToast.error({
          title: 'Error',
          backgroundColor: 'red',
          position: 'topRight',
          message:
            'Please Sorry, there are no images matching your search query. Please try again! again!',
        });
      });
  }
});
