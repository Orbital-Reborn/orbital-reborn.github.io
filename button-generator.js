
const container = document.getElementById("games-grid");

for (let i = 0; i < games_list.length; i++) {
  const button = document.createElement("button");
  button.textContent = games_list[i].name;
button.addEventListener("click", () => {
    window.location.href = `play.html?game=${i}`;
});
  container.appendChild(button);
}
