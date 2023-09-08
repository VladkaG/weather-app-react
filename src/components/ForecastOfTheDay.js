import styles from './ForecastOfTheDay.module.css';
import clear from '../images/Clear.png';
import liteCloud from '../images/LightCloud.png';
import brokenClouds from '../images/HeavyCloud.png';
import overcastClouds from '../images/HeavyCloud.png';
import shower from '../images/Shower.png';
import rain from '../images/HeavyRain.png';
import thunderstorm from '../images/Thunderstorm.png';
import snow from '../images/Snow.png';
import mist from '../images/mist-day.png';

function ForecastOfTheDay({ data }) {
  const weatherIcons = {
    'clear sky': clear,
    'sky is clear': clear,
    'few clouds': liteCloud,
    'scattered clouds': brokenClouds,
    'broken clouds': brokenClouds,
    'overcast clouds': overcastClouds,
    'shower rain': shower,
    'light rain': rain,
    'moderate rain': rain,
    thunderstorm: thunderstorm,
    snow: snow,
    fog: mist,
    mist: mist,
  };

  const timestamp = data.time;
  const date = new Date(timestamp * 1000);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return (
    <div className={styles.forecastOfTheDay}>
      <p>{dayOfWeek}</p>
      <img
        src={weatherIcons[data.condition.description]}
        alt={data.condition.description}
      ></img>
      <div className={styles.forecastTemp}>
        <span>{Math.round(data.temperature.maximum)}°C</span>
        <span>{Math.round(data.temperature.minimum)}°C</span>
      </div>
    </div>
  );
}

export default ForecastOfTheDay;
