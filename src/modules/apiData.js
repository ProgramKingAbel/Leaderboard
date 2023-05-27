import display from './displayData.js';

const game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/basketball/scores/';

// get the data from the API
const getData = async () => {
  await fetch(game)
    .then((gameData) => gameData.json())
    .then((json) => display(json));
};

// send data to the API
const sendData = async (data) => {
  await fetch(game, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((sendData) => sendData.json());
  // .then((json) => console.log(json));
};

export { getData, sendData };