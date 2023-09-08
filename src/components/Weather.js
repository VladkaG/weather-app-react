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
import error from '../images/error.png';

function Weather({ toggleSearchForm, handleLocationClick, data, city }) {
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

  const timestamp = data.time;
  const date = new Date(timestamp * 1000);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  const weatherIcons = {
    'clear sky': clear,
    'few clouds': liteCloud,
    'scattered clouds': brokenClouds,
    'broken clouds': brokenClouds,
    'overcast clouds': overcastClouds,
    'light intensity shower rain': shower,
    'shower rain': shower,
    'light rain': rain,
    'moderate rain': rain,
    thunderstorm: thunderstorm,
    snow: snow,
    fog: mist,
    mist: mist,
    'location error': error,
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
        <div className={styles.mainBackground}>
          <div className={styles.mainImageContainer}>
            <span>
              <img
                className={styles.mainImage}
                src={weatherIcons[data.description]}
                alt={data.description}
              ></img>
            </span>{' '}
          </div>
        </div>
        <div className={styles.mainTemp}>
          {Math.round(data.temperature)}
          <span>℃</span>
        </div>
        <p>{data.description}</p>
        <div className={styles.mainDate}>
          <div className={styles.date}>
            <span>Today</span>
            <span>•</span>
            <span>{formattedDate}</span>
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
