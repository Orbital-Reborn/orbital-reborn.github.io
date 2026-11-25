    const params = new URLSearchParams(window.location.search);
    const gameIndex = params.get("game");
    const selectedGame = games_list[gameIndex];

    const heading = document.getElementById("output");
    const iframe = document.getElementById("game-frame");

    if (selectedGame) {
      heading.textContent = selectedGame.name;
      iframe.src = selectedGame.url;
    } else {
      heading.textContent = "No valid game found in URL";
    }