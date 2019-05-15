let links = thumbs.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', chngLargePic);
}

function chngLargePic(event) {
  event.preventDefault();
  largeImg.setAttribute('src', this.getAttribute('href'));
}
