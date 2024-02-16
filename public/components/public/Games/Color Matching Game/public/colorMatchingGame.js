// 'This Website is made bY Kamel Amen :) ;
var output = document.getElementById('output');
var guess = document.getElementById('guess');
var yourGuesses = document.querySelector('.yourGuesses');
var rightGuesses = document.querySelector('.rightGuesses');
var easyOptionBtn = document.getElementById('easy');
var mediumOptionBtn = document.getElementById('medium');
var hardOptionBtn = document.getElementById('hard');
var arr1 = [];
var arr2 = [];
var myT;
var loop = 0;
var game_play = false;

function start(e) {
  let colorsArr = [
    'red',
    'yellow',
    'green',
    'blue',
    'orange',
    'gray',
    'chartreuse',
    'aqua',
    'brown',
    'pink',
    'purple',
    'chocolate',
  ];
  let levelChooser = [...document.querySelectorAll('.option')];
  var colorArr = [];
  if (e === 'easy') {
    for (i = 0; i < 6; i++) {
      colorArr.push(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
    }
    easyOptionBtn.classList.add('active-option');
    mediumOptionBtn.classList.remove('active-option');
    hardOptionBtn.classList.remove('active-option');
  } else if (e === 'medium') {
    for (i = 0; i < 9; i++) {
      colorArr.push(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
    }
    easyOptionBtn.classList.remove('active-option');
    mediumOptionBtn.classList.add('active-option');
    hardOptionBtn.classList.remove('active-option');
  } else if (e === 'hard') {
    for (i = 0; i < colorsArr.length; i++) {
      colorArr.push(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
    }
    easyOptionBtn.classList.remove('active-option');
    mediumOptionBtn.classList.remove('active-option');
    hardOptionBtn.classList.add('active-option');
  } else {
    return;
  }

  var html = '';
  game_play = true;
  arr1 = [];
  arr2 = [];
  guess.innerHTML = '';
  let cPicker =
    'display: inline-block; width: 28%; height: 135px; margin: 10px; cursor: pointer; border: 2px solid #aaa; text-align: center; border-radius: 25% 0 ; box-shadow: 3px 3px 3px #aaa; font: normal 2em/135px Josefin Sans';

  for (var x = 0; x < colorArr.length; x++) {
    html +=
      '<div class="' +
      colorArr[x] +
      '" style="background-color:' +
      colorArr[x] +
      '; ' +
      cPicker +
      '" onclick="oGuess(this)">' +
      colorArr[x] +
      '</div>';
  }
  document.getElementById('cButtons').innerHTML = html;

  for (var x = 0; x < 4; x++) {
    var r = colorArr[Math.floor(Math.random() * colorArr.length)];
    arr1.push(r);
  }
  loop = 0;
  myT = setTimeout(goWhite, 200);
}

function goWhite() {
  output.style.backgroundColor = 'white';
  myT = setTimeout(goColor, 200);
}

function goColor() {
  output.style.backgroundColor = arr1[loop];
  loop++;
  if (loop >= arr1.length) {
    clearTimeout(myT);
  }
  myT = setTimeout(goWhite, 750);
}

function oGuess() {
  if (game_play) {
    var g = event.target.className;
    var d = document.createElement('div');
    d.className = 'box';
    d.style.backgroundColor = g;
    d.dataset.v = arr2.length;
    d.onclick = function () {
      if (game_play) {
        var iRemove = event.target.getAttribute('data-v');
        arr2.splice(iRemove, 1);
        event.target.parentNode.removeChild(event.target);
      }
    };
    guess.appendChild(d);
    arr2.push(g);
    if (arr2.length == arr1.length) {
      game_play = false;
      if (arr1.toString() == arr2.toString()) {
        alert('Well Done :)');
      } else {
        document.getElementById('popup1').style =
          'visibility: visible;opacity: 1;';
        var result = '';
        for (let i = 0; i < arr1.length; i++) {
          result += '<tr><td>' + arr2[i] + '</td><td>' + arr1[i] + '</td></tr>';
        }

        var table =
          '<table class="table table-striped"><thead><tr><th>Your Guesses</th><th>Right Guesses</th></tr></thead><tbody>' +
          result +
          '</tbody></table>';

        document.getElementById('content').innerHTML = table;
      }
    }
  }
}

document.getElementById('close').onclick = () => {
  document.getElementById('popup1').style = 'visibility: hidden;opacity: 0;';
};
