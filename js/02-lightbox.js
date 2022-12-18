import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) => `
	 <a class="gallery__item" href=${item.original}>
  <img
	 loading = "lazy"
	 class="gallery__image"
	 src=${item.preview}
	 alt=${item.description}
  />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
