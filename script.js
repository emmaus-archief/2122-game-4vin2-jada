/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 595; // x positie vijand
var vijandY = 40; // y positie vijand

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
if (keyIsDown(KEY_LEFT)) {
  spelerX = spelerX - 8
};
if (keyIsDown(KEY_RIGHT)) {
  spelerX = spelerX + 8
};

 
  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
 

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond

  createCanvas(1280, 720);
  background('lightblue');

  fill("green");
  rect(0, 640, 1280, 100); //gras
  
  // vijand

  fill("black");
  ellipse(vijandX, vijandY, 50, 50); 

  vijandY += 5;

  if (vijandY === 250) {
    
  };
    
  //vijandX = random (20, 700);

  // kogel

  // speler

  fill("white");
  rect(spelerX - 25, 605, 50, 50);
  fill("black");
  ellipse(spelerX, 630, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  

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
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
