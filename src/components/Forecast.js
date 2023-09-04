import styles from './Forecast.module.css';

function Forecast() {
  return (
    <div className={styles.main}>
      <div className={styles.mainButtons}></div>
      <div className={styles.mainContent}>
        <div className={styles.mainForecast}>
          <div className={styles.forecastColumn}></div>
        </div>
        <div className={styles.mainHighlights}></div>
      </div>
      <footer></footer>
    </div>
  );
}

export default Forecast;
