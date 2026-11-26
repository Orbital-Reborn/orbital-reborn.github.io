    const params = new URLSearchParams(window.location.search);
    const gameIndex = params.get("game");
    const selectedGame = games_list[gameIndex];
    const title = document.getElementById('tab-title');
    const heading = document.getElementById('output');
    const iframe = document.getElementById('game-frame');
    const FullscreenButton = document.getElementById('Fullscreen-button')
const baseWidth = iframe.offsetWidth;
const baseHeight = iframe.offsetHeight;


    if (selectedGame) {
      heading.textContent = selectedGame.name;
title.textContent = `Orbital Reborn | playing ${selectedGame.name}`;
      iframe.src = selectedGame.url;
    } else {
      heading.textContent = 'No valid game found in URL';
    }

    function FullscreenClicked() {
      iframe.requestFullscreen();
    }

  FullscreenButton.addEventListener('click', FullscreenClicked);

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement === iframe) {
    // Calculate how much bigger the screen is than the iframe
    const scale = Math.min(window.innerWidth / baseWidth, window.innerHeight / baseHeight);
    iframe.style.zoom = scale;
  } else {
    // Reset when exiting fullscreen
    iframe.style.zoom = 1;
  }
});