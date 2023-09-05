import styles from './ForecastOfTheDay.module.css';

function ForecastOfTheDay() {
  return (
    <div className={styles.forecastOfTheDay}>
      <p>Tomorrow</p>
      <img></img>
      <div className={styles.forecastTemp}>
        <span>16°C</span>
        <span>11°C</span>
      </div>
    </div>
  );
}

export default ForecastOfTheDay;
