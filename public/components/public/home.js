window.onload = buildGames();

// Start Section 1
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter d-inline-block'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700,
  })
  .add({
    targets: '.ml11 .line',
    translateX: [
      0,
      document.querySelector('.ml11 .letters').getBoundingClientRect().width +
        10,
    ],
    easing: 'easeOutExpo',
    duration: 700,
    delay: 100,
  })
  .add({
    targets: '.ml11 .letter',
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });
// End Section 1

// Start Section 2
const typeWriter = document.getElementById('typewriter-text');
const text = 'HELLO AND WELCOME TO "JUST PLAY"';
typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
// End Section 2

// Start Section 3
function buildGames() {
  const data = [
    {
      id: 1,
      name: 'Word Scramble Game',
      info: 'Simple guessing the right word game, with 3 different levels of difficulty and points battery to collect all your correct answers with points.',
      image: './assets/Games/wordScrambleGuessingGame.png',
      game: './public/Games/Word Scramble Guessing Game/wordScrambleGuessingGame.html',
    },
    {
      id: 2,
      name: 'Guess The Number Game',
      info: 'Guess the numbers game, with 3 different levels of difficulty and points battery to collect all your correct answers with points.',
      image: './assets/Games/GuessTheNumber.png',
      game: './public/Games/Guess The Number/guessTheNumber.html',
    },
    {
      id: 3,
      name: 'Guessing Word Game',
      info: 'Guess the right word from the squares down. You have 3 lives and timer to keep tracking and 5 levels fo difficulty to choose from.',
      image: './assets/Games/GuessTheWorld.png',
      game: './public/Games/Guessing Word Game/guessingWordGame.html',
    },
    {
      id: 4,
      name: 'Hit The Computer',
      info: 'Hit the computers to achieve success as you have certain number of computers that you must hit.',
      image: './assets/Games/HitaComputer.png',
      game: './public/Games/Hit A Computer/hitAComputer.html',
    },
    {
      id: 5,
      name: 'Memory Game',
      info: 'Remember the pictures places and win, all what you do is collect and translated to points.',
      image: './assets/Games/MemoryGame.png',
      game: './public/Games/Memory Game/MemoryGame.html',
    },
    {
      id: 6,
      name: 'Color Matching Game',
      info: 'Match the color and win.',
      image: './assets/Games/ColorMatchingGame.png',
      game: './public/Games/Color Matching Game/colorMatchingGame.html',
    },
  ];

  const gamesArea = document.querySelector('#gamesArea');
  gamesArea.innerHTML = data.map((game) => {
    return `<div class="game text-dark d-inline-block m-3" key=${game.id}>
      <div class="card" style="width: 18rem;">
      <img src="${game.image}" class="card-img-top" style="height: 10rem;" alt="${game.name}">
      <div class="card-body">
        <h5 class="card-title text-danger text-decoration-underline">${game.name}</h5>
        <p class="card-text text-secondary">${game.info}</p>
        <a href="${game.game}" class="btn btn-danger" target="_blank">Play</a>
      </div>
      </div>
    </div>`;
  });
}
// End Section 3
