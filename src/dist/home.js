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
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Start Section 2
const typeWriter = document.getElementById('typewriter-text');
const text = 'HELLO AND WELCOME TO "JUST PLAY"';
typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

// End Section 2
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Start Section 3
fetch('/src/dist/data.json')
  .then((response) => response.json())
  .then((data) =>
    data.map((game) => {
      let html = `
        <div class='game overflow-hidden row m-0'>
          <video class='col-6 overflow-hidden' loop autoplay>
            <source src='${game.videoSrc}' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div class='col-6 ps-3 text-center game-info'>
            <h2>${game.name}</h2>
            <p class="my-5">${game.info}</p>
            <a href='${game.game}' target='_blank'>
              <button class='btn btn-dark btn-lg'>Play Now</button>
            </a>
          </div>
        </div>
        <hr style="height:5px; width:50%;" class="mx-auto" />
        `;
      document.getElementById('games').innerHTML += html;
    })
  );
// End Section 3
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Start Section 4
