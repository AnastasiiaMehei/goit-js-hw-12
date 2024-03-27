import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../main';

export async function renderImages(data) {
  console.log(data);
  const images = data.hits;
  // console.log(data.hits);
  if (images.length == 0) {
    iziToast.error({
      title: 'Error',
      message: `Error: No such pictures!`,
      position: 'topRight',
    });
  }

  refs.ulEl.insertAdjacentHTML('beforeend', createGalleryMarkup(images));
  const galleryCfg = {
    captionsData: 'alt',
    captionDelay: 250,
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img       
          class="gallery-image"
          width="1280"
          height="152"
          src="${webformatURL}"
          alt="${tags}"
        />
        <ul class="img-description"><li class><h3>Likes</h3><p>${likes}</p><li/>
        <li><h3>Views</h3><p>${views}</p><li/>
        <li><h3>Comments</h3><p>${comments}</p><li/>  
        <li><h3>Downloads</h3><p>${downloads}</p><li/></ul>
      </a>
    </li>   
  `
    )
    .join('');
}
// container.insertAdjacentHTML('beforeend', createGalleryMarkup(images));
