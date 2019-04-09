const IMG_PATH = '/img/';
const IMG_EXT = '.png';
const NAMES = [
  'lego_gray_small',
  'lego_blue_small',
  'lego_green_small',
  'lego_red_small',
];
const CANVAS = document.getElementById('lego');

// Values is an array of integers, representing number of legos for each
// category
function plotLegos(values) {
  let ctx = CANVAS.getContext('2d');
  let pieceCount = 0;
  for (var i in NAMES) {
    let img = document.getElementById(NAMES[i]);
    for (var piece = 0; piece < values[i]; piece++) {
      ctx.drawImage(img, 0, img.height * 0.3 * pieceCount, 50, 50);
      pieceCount++;
    }
  }
}

function init() {
  var loaded = 0;
  for (var i in NAMES) {
    let img = document.createElement('img');
    img.id = NAMES[i];
    img.src = IMG_PATH + NAMES[i] + IMG_EXT;
    img.style.display = 'none';
    document.body.appendChild(img);

    img.onload = () => {
      loaded++;
      if (loaded === NAMES.length) {
        plotLegos([1, 2, 2, 4]);
      }
    }
  }
}

window.onload = init;
