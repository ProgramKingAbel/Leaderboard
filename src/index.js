import { getData } from './modules/apiData';
import postUserData from './modules/userInput';
import './styles/main.css';
const form = document.getElementById('dataForm');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', postUserData);
refresh.addEventListener('click', getData);
