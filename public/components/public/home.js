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
window.onload = fetch('./public/home.json')
  .then((res) => res.json())
  .then((data) => buildGames(data));

function buildGames(data) {
  const gamesArea = document.querySelector('#gamesArea');
  gamesArea.innerHTML = data.map((game) => {
    return `<div class="game text-dark d-inline-block m-3">
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
