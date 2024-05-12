let fs = fullscreen();

function setup() {
  new Canvas(500, 240);
  //alert("test");

}

function mousePressed() {
   // if (kb.pressing('a')) {
      let fs = fullscreen();

      alert(fs);

      fullscreen(!fs);
    
//} 
}