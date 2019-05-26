let links = thumbs.querySelectorAll('.fashionGallery');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', chngLargePic);
}

function chngLargePic(event) {
  event.preventDefault();
  largeImg.setAttribute('src', event.currentTarget.getAttribute('href'));
}
