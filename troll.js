function setup() {
let fs = fullscreen();
fullscreen(!fs);
}
function keyTyped() {
  if (key === 'escape') {
    let fs = fullscreen();
    fullscreen(!fs);
  } 
  }