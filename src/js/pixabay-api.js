import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// функція, яка виконує запит на сервер
import axios from 'axios';
export async function fetchImages(query) {
  const url = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '42924833-4b721b8caf67a58fd43475ecb',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  // const options = {
  //   method: 'GET',
  // };
  // return fetch(url, options).then(res => res.json());
  const res = await axios.get(url, { params });
  return res.data;
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // })
  // .catch(error => {
  //   iziToast.error({
  //     backgroundColor: 'red',
  //     position: 'topCenter',
  //     title: 'Error',
  //     message:
  //       'Sorry, there are no images matching your search query. Please try again!',
  //   });
  // });
}
