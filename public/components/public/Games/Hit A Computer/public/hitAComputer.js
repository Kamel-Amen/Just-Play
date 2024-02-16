// 'Kamel Amen' says Hi :)

var computers, duration, sCom, interval;
var timer = 0,
  remain = 0,
  durationTime = 0;
var offices = 8;

function build(level) {
  document.getElementById('btn').style.transform = 'translateX(1250px)';
  document.getElementById('gameBoard').style.transform = 'translateX(0)';
  clearInterval(interval);
  /* Start Levels */
  if (level === 'veryEasy') {
    remain = 10;
    timer = 45;
    durationTime = 1000;
  } else if (level === 'easy') {
    remain = 15;
    timer = 45;
    durationTime = 900;
  } else if (level === 'medium') {
    remain = 20;
    timer = 30;
    durationTime = 700;
  } else if (level === 'hard') {
    remain = 30;
    timer = 45;
    durationTime = 500;
  } else if (level === 'veryHard') {
    remain = 50;
    timer = 60;
    durationTime = 400;
  } else {
    return;
  }
  /* End Levels */

  var html = '<h1>Hit the Computer</h1>';
  for (let x = 0; x < offices; x++) {
    html +=
      '<div class="office shadow"><div class="desk"></div><div class="computer"></div></div>';
  }
  document.querySelector('.gameBoard').innerHTML = html;
  computers = document.querySelectorAll('.computer');
  for (let i = 0; i < computers.length; i++) {
    computers[i].addEventListener('click', hitComputer, false);
  }

  interval = setInterval(function () {
    document.getElementById('timer').innerText = timer;
    document.getElementById('remain').innerText = remain;
    if (remain <= 0 || timer <= 0) {
      check();
    } else {
      if (timer <= 0 || remain <= 0) {
        check();
      } else {
        timer--;
      }
    }
  }, 1000);
  start();
}

function start() {
  popUp();
}

function popUp() {
  sCom = computers[Math.floor(Math.random() * computers.length)];
  sCom.classList.remove('popDown');
  sCom.classList.add('popUp');
  let rTime = Math.floor(Math.random() * 10) * 120 + durationTime;
  duration = setTimeout(hideComputer, rTime);
}

function hideComputer() {
  sCom.classList.remove('popUp');
  popUp();
}

function hitComputer(event) {
  event.target.classList.remove('popUp');
  event.target.classList.add('popDown');
  remain--;
  popUp();
}

function check() {
  if (remain <= 0) {
    alert('WellDone, U WiN :)');
    setGameOver();
    return;
  } else if (timer <= 0) {
    alert('SoRRy, U Out of Time :(');
    setGameOver();
    return;
  } else {
    return;
  }
}

function setGameOver() {
  clearInterval(interval);
  document.getElementById('btn').innerText = 'replay';
  document.querySelector('.gameBoard').innerHTML = '';
  document.querySelector('#timer').innerText = '00';
  document.querySelector('#remain').innerText = '00';
  alert(
    'If you want to play again hit the start button OR choose a level from the menu on the page left.'
  );
}
