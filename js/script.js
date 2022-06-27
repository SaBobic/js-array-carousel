//* MILESTONE 2: Inserire la lista di immagini attraverso un ciclo for

/*
1. Dichiaro le variabili globali (targhet HTML in cui inserire la lista, stringa rappresentante la lista da inserire nel target)
2. Creo ciclo for i=0, i<5 per concatenare i li all'interno degli ul (uso i per centralizzare nome immagini)
*/

const carouselGallery = document.getElementById('main-gallery');
let galleryList = "<ul>";

for (let i = 0; i < 5; i++){
    galleryList += `<li><img src="img/0${i + 1}.jpg" alt="Gallery Image ${i + 1}"></li>`;
}

galleryList += "</ul>";

carouselGallery.appendChild(galleryList);