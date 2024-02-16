// 'This Website is Made By "Kamel AmEn" :)'

/* Start Variables */
var myArr = [
  'Lion',
  'WellCome',
  'Hello',
  'Course',
  'Milk',
  'Tiger',
  'Bird',
  'Building',
  'Roof',
  'Boy',
  'Girl',
  'Father',
  'Mother',
  'Brother',
  'Sister',
  'GrandFather',
  'GrandFather',
  'GrandMother',
  'Complete',
  'Choose',
  'Mistake',
  'World',
  'Snake',
  'Dog',
  'Cat',
  'Mouse',
  'Rabbit',
  'Carrot',
  'Ball',
  'Fish',
  'Country',
  'Container',
  'Money',
  'Match',
  'Extra',
  'Government',
  'Environment',
  'Night',
  'NightMare',
  'Beautiful',
  'Nice',
  'IceCream',
  'SnowBall',
  'Thunder',
];
var randomWord = '';
var interval;
var timer = 60,
  points = 'SOON',
  remainGuesses = 0,
  pointsBatteryMeter = 100,
  pointsLevelMeter = 0,
  gameNumber = 0,
  lives = 0;
/* End Variables */

/* Start Functions */
function start(level) {
  clearInterval(interval);
  setGameOver();
  document.querySelector('.options').style.opacity = 1;
  currentGameLevel = level;
  gameNumber++;
  document.querySelector('.start').disabled = true;
  document.querySelector('.window').style.transform = 'rotateX(92deg)';
  document.querySelector('#guessBtn').disabled = false;

  if (level === 'easy') {
    lives = 3;
    remainGuesses = 5;
    pointsLevelMeter = 20;
  } else if (level === 'medium') {
    lives = 2;
    remainGuesses = 10;
    pointsLevelMeter = 10;
  } else if (level === 'hard') {
    lives = 1;
    remainGuesses = 20;
    pointsLevelMeter = 5;
  } else {
    throw Error('SomeThing Went Wrong, SoRRy');
  }

  document.querySelector('#guesses').innerText = remainGuesses;
  document.querySelector('#lives').innerText = lives;
  interval = setInterval(() => {
    document.querySelector('#timer').innerText = timer;
    timer--;
    check();
  }, 1000);
  document.getElementById('myInput').focus();
  generateRandomWord();
}

function generateRandomWord() {
  let w = myArr[Math.floor(Math.random() * myArr.length)];
  w = w.toLowerCase();
  randomWord = w;
  let s = '';
  let wLength = w.length;
  for (let x = 0; x < wLength; x++) {
    let i = Math.floor(Math.random() * w.length);
    s += w[i];
    w = w.substr(0, i) + w.substr(i + 1);
  }
  document.querySelector('.guess-area > h2').innerHTML =
    "Guess This Word: <span class='shuffled-word'>" + s + '</span>';
  console.log('CheatSheet >>> ' + randomWord);
}

function rGuess() {
  let userGuess = document.getElementById('myInput');
  if (userGuess.value.toLowerCase() === randomWord.toLowerCase()) {
    updatePointsBattery();
    remainGuesses--;
    document.querySelector('#guesses').innerText = remainGuesses;
    document.getElementById('myInput').focus();
    document.getElementById('myInput').value = '';
  } else {
    lives--;
    document.querySelector('#lives').innerText = lives;
    document.getElementById('myInput').focus();
    document.getElementById('myInput').value = '';
  }
  generateRandomWord();
}

function updatePointsBattery() {
  pointsBatteryMeter -= pointsLevelMeter;
  document.querySelector('.points-bar').style.height = pointsBatteryMeter + '%';
}

function check() {
  if (remainGuesses === 0) {
    alert('WellDone You Win :)');
    updateRecords();
    setGameOver();
    return;
  } else if (timer === 0) {
    alert('SoRRy You out oF Time :(');
    updateRecords();
    setGameOver();
    return;
  } else if (lives === 0) {
    alert('SoRRy You out oF Lives :(');
    updateRecords();
    setGameOver();
    return;
  } else {
    return;
  }
}

function updateRecords() {
  document.querySelector('.records').innerHTML +=
    '<li class="row m-0"><span class="col-1">' +
    gameNumber +
    '</span><span class="col">' +
    points +
    '</span><span class="col">' +
    remainGuesses +
    '</span><span class="col">' +
    (60 - timer) +
    '</span><span class="col">' +
    currentGameLevel +
    '</span></li>';
}

function setGameOver() {
  clearInterval(interval);
  timer = 60;
  pointsBatteryMeter = 100;
  document.querySelector('.points-bar').style.height = pointsBatteryMeter + '%';
  document.querySelector('#guesses').innerText = '0';
  document.querySelector('#lives').innerText = '0';
  document.querySelector('#timer').innerText = '00';
  document.querySelector('#guessBtn').disabled = true;
  document.querySelector('.guess-area > h2').innerHTML =
    'To Play Again Choose any Level From the levels Menu';
}
