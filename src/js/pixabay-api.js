import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
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
  const res = await axios.get(url, { params });
  return res.data;
}
