import { sendData } from './apiData';

const postUserData = (e) => {
  e.preventDefault();
  const pName = document.getElementById('name').value;
  const pScore = document.getElementById('score').value;

  if (pName && pScore) {
    const player = {
      user: pName,
      score: pScore,
    };
    sendData(player); 
    document.getElementById('dataForm').reset();
  }

};

export default postUserData;