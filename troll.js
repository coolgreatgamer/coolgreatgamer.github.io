let fs = fullscreen();

function setup() {
  alert("don't press s");
  new Canvas(500, 240);
  //alert("test");

}

//function mousePressed() {
   // if (kb.pressing('a')) {
      //let fs = fullscreen();

      //alert(fs);

      //fullscreen(!fs);
    
//}
//}
//function mousePressed() {
//  if (kb.released('j')) {
//    let fs = fullscreen();
//    fullscreen(!fs);
//  }
//  if (kb.presses('j')) {
//    let fs = fullscreen();
//    fullscreen(!fs);
//  } 
//}

function keyPressed() {
  
  if (keyIsPressed == true) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (keyIsPressed == false) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}