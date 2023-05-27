import { getData } from './modules/apiData.js';
import postUserData from './modules/userInput.js';
import './styles/main.css';

const form = document.getElementById('dataForm');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', postUserData);
refresh.addEventListener('click', getData);
