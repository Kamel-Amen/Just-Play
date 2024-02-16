/* Start Options
let option1 = document.getElementById('1-player');
let option2 = document.getElementById('2-player');
let option3 = document.getElementById('3-player');
let option4 = document.getElementById('4-player');
let timer = 0;
function optionChoose() {
    let arr = [...document.querySelectorAll('.option-btn')];
    arr.map(m => m.disabled = true);
    var holder = setInterval(() => {
        timer++;
        //console.log(timer);
        if (timer === 1) { arr[0].style = 'transition: all 0.4s ease-in-out; opacity:0'; }
        if (timer === 2) { arr[1].style = 'transition: all 0.5s ease-in-out; opacity:0'; }
        if (timer === 3) { arr[2].style = 'transition: all 0.6s ease-in-out; opacity:0'; }
        if (timer === 4) { arr[3].style = 'transition: all 0.7s ease-in-out; opacity:0'; }
        if (timer === 5) { arr.map(m => m.style.display = "none"); }
        if (timer === 6) { clearInterval(holder); }
    }, 1000);

    specifyPlayersNumber();
}

function specifyPlayersNumber() {

}
 End Options */

// " This Website has been created BY KAMEL AMEN ";
window.onload = build;

function build() {
  //alert('U Have 9 souls');
  myArray = [];
  for (var x = 0; x < 3; x++) {
    var random = Math.floor(Math.random() * 9);
    myArray[x] = random;
  }
  document.getElementById('guess-1').focus();
  //console.log(myArray)
}

var output = document.getElementById('output');
var num1 = document.getElementById('guess-1');
var num2 = document.getElementById('guess-2');
var num3 = document.getElementById('guess-3');
var souls = 9;

function start() {
  var guessArray = [Number(num1.value), Number(num2.value), Number(num3.value)];
  for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i] < 0 || guessArray[i] > 9) {
      alert('Please Enter a valid number between 0 and 9');
      setGameOver();
      return;
    }
  }

  for (let x = 0; x < myArray.length; x++) {
    if (
      myArray[x] === guessArray[x] &&
      myArray[x + 1] === guessArray[x + 1] &&
      myArray[x + 2] === guessArray[x + 2]
    ) {
      alert('WellDone U Win');
      document.getElementById('message').style.width = '400PX';
      document.getElementById('message').innerHTML = 'WellDone, U Win';
      setGameOver();
      return;
    }
    output.innerHTML += check(guessArray[x], myArray[x]);
    document.getElementById('guess-1').focus();
  }

  if (souls <= 0) {
    alert('Game Over, U LOSE');
    document.getElementById('message').style.width = '400PX';
    document.getElementById('message').innerHTML = 'Game Over, U LOSE';
    setGameOver();
    return;
  } else {
    alert('your have ' + souls + ' souls.');
    output.innerHTML += '<br>';
    document.getElementById('guess-1').focus();
  }
}

function check(a, b) {
  if (a > b) {
    souls--;
    return '<span>L</span>';
  }
  if (a < b) {
    souls--;
    return '<span>H</span>';
  }
  if (a === b) {
    return '<span>' + a + '</span>';
  }
}

function setGameOver() {
  output.innerHTML = '';
  num1.value = '';
  num2.value = '';
  num3.value = '';
  souls = 9;
  build();
}
