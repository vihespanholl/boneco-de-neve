let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(500, 500);
  background("white");
  cor = ("purple");
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill(cor);
  rect (posicaoHorizontal, posicaoVertical, 50);
 
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal--;
  }
  if(mouseX> posicaoHorizontal){
    posicaoHorizontal++;
  }
  if(mouseIsPressed){
    cor= color(random(0,255),random(0,255),random(0,255));
  }}