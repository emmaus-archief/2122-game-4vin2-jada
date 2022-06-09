/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var aantal = 0;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = UITLEG;

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const ARROW_UP = 38;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 400; // x positie vijand
var vijandY = 40; // y positie vijand

var kogelX = 400; // x positie kogel
var kogelY = 640; // y positie kogel
var kogelSchiet = false;
var punt = false;
var puntenTelling = 0;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
if (keyIsDown(37)) {
  spelerX = spelerX - 9
};
if (keyIsDown(39)) {
  spelerX = spelerX + 9
};

 // vijand
 if (vijandY < 620) {
   vijandY += 2
 };

  // kogel
  if (kogelSchiet === false &&
    keyIsDown(38)) {
    kogelSchiet = true;
    kogelX = spelerX;
    kogelY = spelerY; 
   };

   if (kogelSchiet === true) { // kogel word afgeschoten
   kogelY = kogelY - 5;
   }

   if (kogelSchiet === true &&
    kogelY < 0) 
  {
      kogelSchiet = false; // kogel gaat weg
    }

  }

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {

 // botsing kogel tegen vijand
  if(kogelY - vijandY < 50 &&
   kogelY - vijandY > -50 &&
   kogelX - vijandX < 50 &&
   kogelX - vijandX > -50) {
     console.log("tegenstander uitgeschakeld");
     kogelSchiet = false;
     console.log("plus 1 punt");
     puntenTelling = puntenTelling +1;
     console.log("piuntenTelling"+puntenTelling);
  vijandX = random(30, 1260);
  vijandY = 40;
  }

}


/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  background('lightblue');

  fill("green");
  rect(0, 640, 1280, 100); //gras
  
  // vijand

  fill("black");
  ellipse(vijandX, vijandY, 50, 50); 

  vijandY += 3;
   console.log ("vijandY =" + vijandY);
  
   // kogel
  if (kogelSchiet === true) {
   fill("purple");
  ellipse(spelerX, kogelY, 30, 30);
  }

  // speler

  fill("white");
  rect(spelerX - 25, 605, 50, 50);
  fill("black");
  ellipse(spelerX, 630, 10, 10);

  // punten en health
  textSize(25);
  fill("black");
  text("points: " + puntenTelling, 1150, 30);

}

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (vijandY >= 620) {
    aantal = aantal + 1;
    //console.log("botsing" + aantal)
    return true;
  } else {
    return false;   
  }
}



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    console.log("vijandY " + vijandY);
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
      console.log("game over");
      }
    }

 //var tekenGameover = function() {
  if (spelStatus === GAMEOVER) {
    console.log("GAMEOVER");
    fill(0, 0, 0);
    textSize(50);
    text("GAMEOVER" , 460, 400);

    fill(0, 0, 0);
    textSize(30);
    text("press spatie to respawn", 447, 450);
  }

    if (keyIsDown(32)) { //spatie
    spelStatus = UITLEG;
     }
    

  //var tekenUitleg = function() {
    if (spelStatus === UITLEG) {
    console.log("uitleg");
    textSize(35);
    fill ("lightblue");
    rect (0, 0, 1280, 720);

   

    fill("red");
    text("Beweeg de 2 pijlen van links en rechts om je tank te bewegen.", 120, 300);
    text ("Druk op de bovenste pijl om een kogel af te vuren.", 120, 350);
    text ("Laat de vliegtuigen niet op de grond komen, dan is het GAMEOVER.", 120, 400);
    fill ("black");
    text ("Druk op ENTER om te starten", 420, 500);

    line(440, 207, 850, 207);
    strokeWeight(4); 
    fill("black");
    textSize(45)
    text("TAKE THEM DOWN", 440, 200);
  
  if(keyIsDown(13)) { // enter
      spelStatus = SPELEN;
      spelerX = 600;
      vijandX = 400;
      vijandY = 40;
      kogelY = 640;
      kogelSchiet = false;
     }
    }
  }

