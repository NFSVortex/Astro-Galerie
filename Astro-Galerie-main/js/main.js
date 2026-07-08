const galleryContainer = document.getElementById("galleryContainer");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const title = document.getElementById("title");
const date = document.getElementById("date");
const locationField = document.getElementById("location");
const telescope = document.getElementById("telescope");
const camera = document.getElementById("camera");
const exposure = document.getElementById("exposure");
const description = document.getElementById("description");

const close = document.getElementById("close");

async function loadGallery() {

    const response = await fetch("data/gallery.json");
    const images = await response.json();

    // Hero-Bild = erstes Bild
    if (images.length > 0) {

        document.getElementById("hero").style.backgroundImage =
            `url("${images[0].image}")`;

    }

    images.forEach(image => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${image.image}" alt="${image.title}">
            <h3>${image.title}</h3>
        `;

        card.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImage.src = image.image;

            title.textContent = image.title;
            date.textContent = image.date;
            locationField.textContent = image.location;
            telescope.textContent = image.telescope;
            camera.textContent = image.camera;
            exposure.textContent = image.exposure;
            description.textContent = image.description;

        });

        galleryContainer.appendChild(card);

    });

}

loadGallery();

close.onclick = () => {

    lightbox.style.display = "none";

}

lightbox.onclick = (event) => {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

}
