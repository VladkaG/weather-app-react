import { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';

import './App.css';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
  const [city, setCity] = useState('Kharkiv');
  const [weather, setWeather] = useState({
    temperature: '0',
  });
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [setSelectedCity] = useState('Kharkiv');

  const toggleSearchForm = () => {
    setShowSearchForm(!showSearchForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    toggleSearchForm();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.shecodes.io/weather/v1/current?query=${city}&key=5t4badf2211oab190e2bd035f7fefd1a`
        );
        setWeather({
          temperature: response.data.temperature.current,
          description: response.data.condition.description,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [city]);

  const updateCity = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  const handleCityClick = async (selectedCity) => {
    try {
      const response = await axios.get(
        `https://api.shecodes.io/weather/v1/current?query=${selectedCity}&key=5t4badf2211oab190e2bd035f7fefd1a`
      );
      setWeather({
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
      });
      setSelectedCity(selectedCity);
    } catch (error) {
      console.log(error);
    }
    setCity(selectedCity);
    toggleSearchForm();
  };

  return (
    <div className="App">
      <div className="container">
        {showSearchForm ? (
          <div className="sidebar">
            <div className="sidebar-button">
              <button onClick={toggleSearchForm}>
                <MdOutlineClose />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="sidebar-search-form">
              <input
                type="search"
                placeholder="&#x1F50E;&#xFE0E;  search location"
                onChange={updateCity}
              ></input>
              <button type="submit">Search</button>
            </form>
            <div className="sidebar-default-cities">
              <button onClick={() => handleCityClick('Kharkiv')}>
                Kharkiv
              </button>
              <button onClick={() => handleCityClick('London')}>London</button>
              <button onClick={() => handleCityClick('Barcelona')}>
                Barcelona
              </button>
            </div>
          </div>
        ) : (
          <Weather
            toggleSearchForm={toggleSearchForm}
            temperature={weather.temperature}
            description={weather.description}
            city={city}
          />
        )}
        <Forecast />
      </div>
    </div>
  );
}

export default App;
