import { getLocation } from './weather';
import { weatherData } from './weatherData';

export function searchBar() {
  const input = document.querySelector('input');
  input.addEventListener('input', updateValue);
}

const updateValue = async (e) => {
  const list = document.querySelector('#list');

  const result = await getLocation(e.target.value);
  console.log(result);

  list.innerHTML = '';

  result.map((r) => {
    let option = document.createElement('div');
    // option.setAttribute('href', '#');
    option.textContent = `${r.name}, ${r.region}`;
    option.className = 'list';
    option.value = `${r.name}`;
    option.addEventListener('click', selectValue);
    list.appendChild(option);
  });
};

const selectValue = (e) => {
  const selectedValue = e.target.value;
  weatherData(document.querySelector('#weather-data'), selectedValue);
  const list = document.querySelector('#list');
  list.innerHTML = '';
  const input = document.querySelector('input');
  input.value = '';
};
