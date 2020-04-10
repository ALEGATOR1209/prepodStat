function updatePrepod(name, url) {
  const innerHTML = `<img class="prepod_face" src="${url}" alt="Prepod's face" id="prepod-face">
  <h1 class="prepod_name" id='prepod-name'>${name}</h1>`;
  const prepodEl = document.getElementById('prepod');
  prepodEl.innerHTML = innerHTML;
}