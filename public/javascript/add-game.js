async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="game-title"]').value;
  const game_locale = document.querySelector('input[name="game-url"]').value;

  const response = await fetch(`/api/games`, {
    method: "POST",
    body: JSON.stringify({
      title,
      game_locale,
      max_spots,
      sport,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-game-form")
  .addEventListener("submit", newFormHandler);
