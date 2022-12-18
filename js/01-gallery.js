import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href=${item.original}>
  <img
	 loading = "lazy"
	 class="gallery__image"
	 src=${item.preview}
	 data-source=${item.original}
	 alt=${item.description}
  />
</a>
</div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

//

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const url = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img loading = "lazy" class="gallery__image" src= ${url}>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
