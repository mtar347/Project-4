let playButton = 0
let img 
let piano, fx, drums, vocals, bass;
let stop = true;

let button1 = '#ee6200';
  let button2 = '#8e1ea2';
  let button3 = '#ff467a';
  let button4 = '#0e21a0';
  let button5 = '#ffc81e';
  let button6 = '#bbcb2e';





async function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton = '#295a29'
    img = await loadImage('play.png')
     bass = await loadSound('song/bass.mp3'),
  fx = await loadSound('song/fx.mp3'),
  drums = await loadSound('song/drums.mp3'),
  vocals = await  loadSound( 'song/vocals.mp3'),
  piano = await loadSound('song/piano.mp3')

}


function draw() {

   background(54,65,90);
  noStroke();
  
  // button 1
   if(mouseX >= width/2-350&& mouseX <= width/2-150&& mouseY >=80&& mouseY <= 280){
    button1 = '#e89b5b';
  } else{
    button1 = '#ee6200';
  }
  fill(button1);
  square(width/2-350,80, 200);

  // botton 2
  if(mouseX >= width/2-80&& mouseX <= width/2+120&& mouseY >=80&& mouseY <= 280){
    button2 = '#c654c3';
  } else{
    button2 = '#8e1ea2';
  }
  fill(button2);
  square(width/2-80, 80, 200);

  // botton 3
  if(mouseX >= width/2+200&& mouseX <= width/2+400&& mouseY >=80&& mouseY <= 280){
    button3 = '#d552a3';
  } else{
    button3 = '#ff467a';
  }
  fill(button3);
  square(width/2+200, 80,200);

  // button 4
  if(mouseX >= width/2-350&& mouseX <= width/2-150&& mouseY >=350&& mouseY <= 550){
    button4 = '#619dc6';
  } else{
    button4 = '#0e21a0';
  }
  fill(button4);
  square(width/2-350, 350, 200);

  // button 5
  if(mouseX >= width/2-80&& mouseX <= width/2+120&& mouseY >=350&& mouseY <= 550){
    button5 = '#f7d794';
  } else{
    button5 = '#ffc81e';
  }
  fill(button5);
  square(width/2-80, 350,200);

  // button 6
  if(mouseX >= width/2+200&& mouseX <= width/2+400&& mouseY >=350&& mouseY <= 550){
    button6 = '#b7d894';
  } else{
    button6 = '#bbcb2e';
  }
  fill(button6);
  square(width/2+200,350,200);

    // play button
  push()
  fill(playButton)
  
  square(width/2, 0, 75)
  image(img, width/2, 0, 75, 75)

  // hover over play button
  if (mouseX >= width/2 && mouseX <= (width/2) + 100 && mouseY >= 0 && mouseY <= 75){
    playButton = '#00ff00'
  }else{
    playButton = '#295a29'
  }
  pop()


}
// play and stop function
function mousePressed(){
  if(stop === true){
    
piano.play()
fx.play()
drums.play()
vocals.play()
  bass.play()
stop = false 
  }
  else{
    piano.stop()
fx.stop()
drums.stop()
vocals.stop()
  bass.stop()
stop = true 
    
  }
}
