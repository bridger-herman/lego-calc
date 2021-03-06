const IMG_PATH = './img/';
const IMG_EXT = '.png';
const NAMES = [
  'lego_orange_arrow',
  'lego_white_arrow',
  'lego_pink_arrow',
  'lego_yellow_arrow',
];
const CANVAS = document.getElementById('lego-canvas');
const WIDTH = 70;
const HEIGHT = 83;

var LOADED = false;

// Values is an array of integers, representing number of legos for each
// category
function plotLegos(values, canvas) {
  loadImages().then((v) => {
    let cv = canvas || CANVAS;
    let ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, WIDTH, 768);
    let pieceCount = 0;
    for (var i in NAMES) {
      let img = document.getElementById(NAMES[i]);
      for (var piece = 0; piece < values[i]; piece++) {
        let yCoord = img.height * 0.39 * pieceCount;
        ctx.drawImage(img, 0, yCoord, WIDTH, HEIGHT);
        pieceCount++;
      }
    }
  });
}

async function loadImages() {
  let promise = new Promise(function(resolve, reject) {
    var loaded = 0;
    for (var i in NAMES) {
      if (document.getElementById(NAMES[i])) {
        loaded++;
        if (loaded === NAMES.length) {
          resolve('Loaded!');
        }
        continue;
      }
      let img = document.createElement('img');
      img.id = NAMES[i];
      img.src = IMG_PATH + NAMES[i] + IMG_EXT;
      img.style.display = 'none';
      img.class = 'lego-img-hidden';
      document.body.appendChild(img);

      img.onload = () => {
        loaded++;
        if (loaded === NAMES.length) {
          resolve('Loaded!');
        }
      }
    }
  });
  return promise;
}
