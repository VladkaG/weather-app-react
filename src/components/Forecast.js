import ForecastOfTheDay from './ForecastOfTheDay';
import styles from './Forecast.module.css';

function Forecast() {
  return (
    <div className={styles.main}>
      <div className={styles.mainButtons}></div>
      <div className={styles.mainContent}>
        <div className={styles.mainForecast}>
          <ForecastOfTheDay />
          <ForecastOfTheDay />
          <ForecastOfTheDay />
          <ForecastOfTheDay />
          <ForecastOfTheDay />
        </div>
        <div className={styles.mainHighlights}></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Forecast;
