async function loadGallery() {

    const response = await fetch("data/gallery.json");
    const gallery = await response.json();

    const container = document.getElementById("galleryContainer");

    gallery.forEach(image => {

        container.innerHTML += `

        <div class="card">

            <img src="${image.image}" alt="${image.title}">

            <h3>${image.title}</h3>

        </div>

        `;

    });

}

loadGallery();