import { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import ForecastOfTheDay from './ForecastOfTheDay';
import styles from './Forecast.module.css';

function Forecast({ coordinates, data, }) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleResponse = (response) => {
    setForecast(response.data.daily);
    setLoaded(true);
  };

  useEffect(() => {
    setForecast(null);
    setLoaded(false);

    axios
      .get(
        `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=5t4badf2211oab190e2bd035f7fefd1a`
      )
      .then(handleResponse);
  }, [coordinates]);

  if (loaded) {
    return (
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.mainForecast}>
            {forecast.map((dailyForecast, index) => {
              if (index > 0 && index < 6) {
                return <ForecastOfTheDay key={index} data={dailyForecast} />;
              }
              return null;
            })}
          </div>
          <h2>Today's Hightlights</h2>
          <div></div>
          <div className={styles.mainHighlights}>
            <div className={styles.mainHighlightsCol}>
              <p>Wind status</p>
              <div className={styles.colDate}>
                {Math.round(data.wind)}
                <span>mph</span>
              </div>
            </div>
            <div className={styles.mainHighlightsCol}>
              <p>Humidity</p>
              <div className={styles.colDate}>
                {data.humidity}
                <span>%</span>
              </div>
            </div>
            <div className={styles.mainHighlightsCol}>
              <p>Feels like</p>
              <div className={styles.colDate}>
                {Math.round(data.feelsLike)}
                <span>℃</span>
              </div>
            </div>
            <div className={styles.mainHighlightsCol}>
              <p>Air Pressure</p>
              <div className={styles.colDate}>
                {data.pressure}
                <span>mb</span>
              </div>
            </div>
          </div>
        </div>
        <footer>
          created by{' '}
          <a href="https://github.com/VladkaG" target="_blank" rel="noreferrer">
            Vladyslava
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className={styles.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </div>
    );
  }
}

export default Forecast;
