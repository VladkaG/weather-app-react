import { MdLocationOn } from 'react-icons/md';
import { RiFocus3Line } from 'react-icons/ri';
import styles from './Weather.module.css';
import clear from '../images/Clear.png';
import liteCloud from '../images/LightCloud.png';
import brokenClouds from '../images/HeavyCloud.png';
import overcastClouds from '../images/HeavyCloud.png';
import shower from '../images/Shower.png';
import rain from '../images/HeavyRain.png';
import thunderstorm from '../images/Thunderstorm.png';
import snow from '../images/Snow.png';
import mist from '../images/mist-day.png';

function Weather({
  toggleSearchForm,
  handleLocationClick,
  temperature,
  description,
  city,
  icon,
}) {
  const date = new Date();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayOfWeek = daysOfWeek[date.getDate()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  const weatherIcons = {
    'clear sky': clear,
    'few clouds': liteCloud,
    'scattered clouds': brokenClouds,
    'broken clouds': brokenClouds,
    'overcast clouds': overcastClouds,
    'moderate rain': shower,
    'light rain': rain,
    thunderstorm: thunderstorm,
    snow: snow,
    mist: mist,
  };

  return (
    <div className={styles.main}>
      <div className={styles.weatherButtons}>
        <button
          onClick={toggleSearchForm}
          type="button"
          className={styles.searchButton}
        >
          Search for places
        </button>
        <button
          onClick={handleLocationClick}
          className={styles.currentLocationButton}
        >
          <RiFocus3Line />
        </button>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <img
            className={styles.mainImage}
            src={weatherIcons[description]}
            alt={description}
          ></img>{' '}
          <h2>
            {Math.round(temperature)}
            <span>℃</span>
          </h2>
          <p>{description}</p>
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.mainDate}>
            <div className={styles.date}>
              <span>Today</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className={styles.location}>
            <span>
              <MdLocationOn />
            </span>
            <span>{city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
