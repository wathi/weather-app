import './style.css';
import { searchBar } from './components/searchBar.js';
import { weatherData } from './components/weatherData.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="flex-container" id=Navbar>
      <div class="flex-item" id="title">Weather</div>
      <div class="flex-item" id="search-bar">
        <label for="input"></label>
        <input 
          type="search" 
          id="input" 
          name="input"
          placeholder = "Search for a place"
          autofocus
          >
        </div>
    </div>  
    <div id="list"></div>
    <div class="container" id="weather-data"><div>
  </div>
`;

searchBar();
weatherData(document.getElementById('weather-data'));
