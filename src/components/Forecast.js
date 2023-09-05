import { useState } from 'react';
import ForecastOfTheDay from './ForecastOfTheDay';
import styles from './Forecast.module.css';

function Forecast() {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(null);

  return (
    <div className={styles.main}>
      <div className={styles.mainButtons}></div>
      <div className={styles.mainContent}>
        <div className={styles.mainForecast}></div>
        <div className={styles.mainHighlights}></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Forecast;
