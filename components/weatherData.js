import { getWeather } from './weather';

export function weatherData(element, city) {
  element.innerHTML = `
    <div id="location"></div>
    <div class="flex-container container" id="current">
      <div class="flex-item" id="condition-image-container"></div>
      <div class="flex-item font-24 text-700 border-right" id="current-temp"></div>
      <div class="flex-item" id="condition-text"></div>
    </div>
    <div class="flex-container container flex-item-justify-content" id="forecast">
    </div>
  `;

  const getData = async (e) => {
    const result = await getWeather(city);

    let location = document.querySelector('#location');
    location.textContent = `${result.location.name}, ${result.location.country}`;

    //current
    let temp_c = document.querySelector('#current-temp');
    temp_c.textContent = `${result.current.temp_c}°`;

    const conditionImage = new Image(50, 50);
    conditionImage.src = `https:${result.current.condition.icon}`;
    let current = document.querySelector('#condition-image-container');
    current.appendChild(conditionImage);

    let conditionText = document.querySelector('#condition-text');
    conditionText.textContent = `${result.current.condition.text}`;

    //forecast
    let forecast = document.querySelector('#forecast');
    let forecastDay = result.forecast.forecastday;

    forecastDay.map((f) => {
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('flex-item');
      forecastItem.classList.add('forecast-item');

      const forecastDate = document.createElement('div');

      forecastDate.textContent = `${new Date(f.date).toDateString()}`;
      forecastItem.appendChild(forecastDate);

      const container1 = document.createElement('div');
      container1.classList.add('flex-container');
      forecastItem.appendChild(container1);

      const forecastConditionImage = new Image(50, 50);
      forecastConditionImage.src = `https:${f.day.condition.icon}`;
      forecastConditionImage.classList.add('flex-item');
      container1.appendChild(forecastConditionImage);

      const container2 = document.createElement('div');
      container2.classList.add('flex-item');
      container1.appendChild(container2);

      const forecastMaxTempC = document.createElement('div');
      forecastMaxTempC.textContent = `${f.day.maxtemp_c}°`;
      container2.appendChild(forecastMaxTempC);

      const forecastMinTempC = document.createElement('div');
      forecastMinTempC.textContent = `${f.day.mintemp_c}°`;
      container2.appendChild(forecastMinTempC);

      forecast.appendChild(forecastItem);

      console.log(forecastItem);
    });
  };

  getData();
}
