import SimpleLightbox from "simplelightbox";
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryUl = document.querySelector('ul.gallery');
const photosMarkup = createGalleryItem(galleryItems);

galleryUl.style.listStyle = 'none';
galleryUl.insertAdjacentHTML('beforeend',photosMarkup);

function createGalleryItem(element) {
    return element
    .map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
};

const gallery = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionDelay: 500, // add 250ms after opening animation speed
    captionPosition: 'bottom',
    // close: false,
    // showCounter: false,
    animationSpeed: 250, //animation speed 250ms
    hashReseted: false,
    loop: false,
 });
