import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");
const markup = createGallaryMarkup(galleryItems);

list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const url = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img loading = "lazy" src=${url} width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeClick);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscapeClick);
      },
    }
  );

  function onEscapeClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}

function createGallaryMarkup(items) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
	<a class="gallery__link" href=${original}>
	<img
	class="gallery__image"
		 src=${preview}
		 data-source=${original}
		 alt=${description}
	/></a></li>`
    )
    .join("");
}
