//https://www.weatherapi.com/
const apiKey = 'edfe619e43de4db9839220900231511';
const numDays = 3;

export async function getLocation(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${location}`,
      { mode: 'cors' }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWeather(location = 'auto:ip', days = numDays) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}`,
      { mode: 'cors' }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
