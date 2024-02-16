// "This Website is Made By 'Kamel Amen' :)"
/* Start Variables */
const randomWordsArr = [
  'Milk',
  'Banana',
  'Orange',
  'Course',
  'National',
  'Country',
  'Company',
  'Plane',
  'Complete',
  'WellCome',
  'Bird',
  'Apple',
  'Environment',
  'Lion',
  'Tiger',
  'Animal',
  'Hello',
  'WellDone',
  'Egypt',
  'Cairo',
  'Website',
  'Words',
  'Sea',
  'See',
  'Hands',
  'Hair',
  'Government',
  'Building',
  'Sky',
  'Nightmare',
];
var myArray = [];
var wordsArr = [];
var keyWord = '';
var lives = 3;
var sec = 0;
var interval;
/* End Variables */

// Generating a Random Word.
function randomWordGenerator() {
  keyWord = myArray[Math.floor(Math.random() * myArray.length)];
  message("Find The NeXt Word >> <span class='word'>" + keyWord + '</span>');
}

// Start The Game With the level of difficulty.
function start(level) {
  clearInterval(interval);
  wordsArr = [];
  let wordsNumber = 0;
  if (level === 'veryEasy') {
    wordsNumber = 5;
    sec = 15;
  } else if (level === 'easy') {
    wordsNumber = 10;
    sec = 15;
  } else if (level === 'medium') {
    wordsNumber = 15;
    sec = 30;
  } else if (level === 'hard') {
    wordsNumber = 20;
    sec = 45;
  } else if (level === 'veryHard') {
    wordsNumber = 30;
    sec = 60;
  } else {
    return;
  }

  let holderArr = [...randomWordsArr];
  for (let i = 0; i < wordsNumber; i++) {
    let randomNum = Math.floor(Math.random() * holderArr.length);
    wordsArr[i] = holderArr[randomNum];
    holderArr.splice(randomNum, 1);
  }

  myArray = wordsArr.slice();
  myArray.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  interval = setInterval(function () {
    document.getElementById('seconds').innerText = sec;
    if (myArray.length <= 0 || lives <= 0) {
      setGameOver();
    } else {
      if (sec <= 0) {
        alert('SoRRy You are out of Time :( ');
        setGameOver();
      } else {
        sec--;
      }
    }
  }, 1000);

  build();
  randomWordGenerator();
}

function build() {
  //alert('You have 3 lives, GOOD LUCK :) ');
  let html = '';
  for (let x = 0; x < wordsArr.length; x++) {
    var str = myArray[x];
    var shuffledWord = str
      .split('')
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join('');
    html +=
      '<div id="box" class="box d-inline-block overflow-hidden text-center" onmouseover="uText(this,\'' +
      shuffledWord +
      '\')" onmouseout="uText(this,\'Hidden Word ' +
      (x + 1) +
      '\')" onclick="eEle(this,\'' +
      str +
      '\')" >Hidden Word ' +
      (x + 1) +
      '</div>';
  }
  document.getElementById('output').innerHTML = html;
}

function uText(t, mes) {
  t.innerHTML = mes;
}

function eEle(t, s) {
  let n = myArray.indexOf(s);
  if (s == keyWord) {
    t.parentNode.removeChild(t);
    myArray.splice(n, 1);
    randomWordGenerator();
  } else {
    lives--;
    document.getElementById('lives-num').innerText = lives;
    t.parentNode.removeChild(t);
    myArray.splice(n, 1);
    randomWordGenerator();
    if (lives <= 0) {
      alert(
        'SoRRy you out of lives :(  ,  To PlaY again hit the replay button.'
      );
      setGameOver();
    }
  }

  if (myArray.length <= 0) {
    setGameOver();
  }
}

function setGameOver() {
  lives = 3;
  message('GAME OVER!');
  clearInterval(interval);
  document.getElementById('output').innerHTML = '';
  document.getElementById('lives-num').innerText = lives;
  document.getElementById('startBtn').innerText = 'REPLAY';
}

function message(mes) {
  document.getElementById('message').innerHTML = mes;
}

/* Start Levels */
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('.menu').style.opacity = '0';
  document.querySelector('.levels').classList.add('enter');
});
document.querySelector('#exit').addEventListener('click', () => {
  document.querySelector('.menu').style.opacity = '1';
  document.querySelector('.levels').classList.remove('enter');
});
