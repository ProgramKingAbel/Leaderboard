const id = localStorage.getItem(JSON.parse('Idgame'));
if (id) {
  localStorage.setItem(JSON.stringify('gameId', id));
}