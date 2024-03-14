//  ' Kamel Amen ' Says Hi :)

/* Start Variables */
var gameBoard = document.getElementById('gameBoard');
var time = document.querySelector('.timer');
var movesPara = document.getElementById('moves');
var message = document.getElementById('message');
var cardFlipped = -1;
var timer = 0,
  moves = 0,
  mins = 0,
  seconds = 0;
var playLockout = false,
  gamePlay = false,
  duration = 0,
  startBtnDisplay = 0;
const tileImages = [],
  tileArray = [],
  tfo = [];
var playerStatusArr = [],
  playerStatusObj = {},
  points = 0;
/* End Variables */

/* Functions */
function startGame() {
  document.querySelector('.start').style.opacity = 0;
  startBtnDisplay = setTimeout(() => {
    document.querySelector('.start').style.display = 'none';
  }, 750);
  if (!gamePlay) {
    gamePlay = true;
    tileImages = [
      `./assets/game/1.jpg`,
      `./assets/game/2.jpg`,
      `./assets/game/3.jpg`,
      `./assets/game/4.jpg`,
      `./assets/game/5.jpg`,
      `./assets/game/6.jpg`,
    ];
    tileArray = tileImages.concat(tileImages);
    shuffleArray(tileArray);
    buildBoard();
  }

  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      mins++;
      seconds = 0;
    }
    time.innerText = mins + ' Mins ' + seconds + ' Secs';
  }, 1000);
}

/* Most Important Function in Arrays With in JS */
function shuffleArray(array) {
  for (let x = array.length - 1; x > 0; x--) {
    let holder = Math.floor(Math.random() * (x + 1));
    let itemValue = array[x];
    array[x] = array[holder];
    array[holder] = itemValue;
  }
  return array;
}
/* Most Important Function in Arrays With in JS */

function buildBoard() {
  let html = '';
  let x = 0;
  tileArray.forEach((e) => {
    x++;
    html += '<div class="gameTile">';
    html +=
      '<img id="cardZ' +
      x +
      '" src="http://via.placeholder.com/150/333/ffcc44?text=Click" onclick="pickCard(' +
      (x - 1) +
      ',this);" class="flipImage"></div>';
  });
  gameBoard.innerHTML = html;
}

function pickCard(i, t) {
  moves++;
  movesPara.innerText = moves;
  if (!playLockout && !isInArray(t.id, tfo)) {
    if (cardFlipped >= 0) {
      cardFlip(i, t);
      playLockout = true;
      if (checkSrc(tfo[tfo.length - 1]) === checkSrc(tfo[tfo.length - 2])) {
        message.innerText = 'Match Found';
        cardFlipped = -1;
        playLockout = false;
        if (tfo.length === tileArray.length) {
          setGameOver();
        }
      } else {
        message.innerText = 'No Match';
        duration = setInterval(hideCard, 1000);
      }
    } else {
      cardFlipped = i;
      cardFlip(i, t);
    }
  } else {
    message.innerText = 'Choose Again !!';
  }
}

function isInArray(v, array) {
  return array.indexOf(v) > -1;
}

function cardFlip(i, t) {
  t.src = tileArray[i];
  tfo.push(t.id);
}

function checkSrc(a) {
  return document.getElementById(a).src;
}

function hideCard() {
  for (let x = 0; x < 2; x++) {
    let vid = tfo.pop();
    document.getElementById(vid).src =
      'http://via.placeholder.com/150/333/ffcc44?text=Click';
  }
  clearInterval(duration);
  cardFlipped = -1;
  playLockout = false;
}

function setGameOver() {
  clearInterval(timer);
  clearTimeout(startBtnDisplay);
  updateStatusArr();
  gamePlay = false;
  tfo = [];
  moves = 0;
  seconds = 0;
  mins = 0;
  gameBoard.innerHTML = '';
  time.innerText = '0 Mins 0 Secs';
  movesPara.innerText = '0';
  message.innerText = 'Play Again :)';
  document.querySelector('.start').style.display = 'inline-block';
  document.querySelector('.start').style.opacity = 1;
  document.querySelector('.start').innerText = 'Replay';
}

function updateStatusArr() {
  calculatePoints();
  playerStatusObj = {
    points: points,
    moves: moves,
    mins: mins,
    seconds: seconds,
  };
  playerStatusArr.push(playerStatusObj);
  updateStatus(playerStatusArr);
}

function calculatePoints() {
  points = 0;
  if (moves <= 15) {
    points = 10;
  } else if (moves > 15 && moves <= 25) {
    points = 5;
  } else {
    points = 1;
  }
  console.log(points);

  if (mins >= 0 && seconds <= 10) {
    points += 15;
  } else if (mins >= 0 && seconds <= 15 && seconds > 10) {
    points += 10;
  } else if (mins >= 0 && seconds <= 25 && seconds > 15) {
    points += 5;
  } else {
    points += 1;
  }
  console.log(points);
}

function updateStatus(arr) {
  document.querySelector('.info').innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    document.querySelector('.info').innerHTML +=
      '<div class="row mt-1"><p class="col-4">' +
      arr[i].points +
      '</p><p class="col-4">' +
      arr[i].mins +
      ':' +
      arr[i].seconds +
      '</p><p class="col-4">' +
      arr[i].moves +
      '</p></div>';
  }
}
/* Functions */
