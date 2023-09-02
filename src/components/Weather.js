import { MdLocationOn } from 'react-icons/md';
import { RiFocus3Line } from 'react-icons/ri';
import styles from './Weather.module.css';
import hail from '../images/Hail.png';

function Weather({ toggleSearchForm, temperature, description, city }) {
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
        <button className={styles.currentLocationButton}>
          <RiFocus3Line />
        </button>
      </div>
      <div className={styles.mainContent}>
        <img src={hail} alt="weather-icon"></img>
        <h2>
          {Math.round(temperature)}
          <span>℃</span>
        </h2>
        <p>{description}</p>
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
  );
}

export default Weather;
