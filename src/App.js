import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import WeatherAPI from "./apis/WeatherAPI";

import SimpleMap from "./components/Map/Map";
const KEY = "Your API KEY";

const App = () => {
  const [arrDay, setArrDay] = useState([]);
  const onTextSubmit = async (text) => {
    const response = await WeatherAPI.get(
      "https://api.weatherapi.com/v1/forecast.json?",
      {
        params: {
          q: text,
          key: KEY,
          days: 7,
        },
      }
    );
    setArrDay(convertToWeatherList(response.data.forecast.forecastday));
    console.log(response);
  };

  const onMapClick = async (text) => {
    const response = await WeatherAPI.get(
      "https://api.weatherapi.com/v1/forecast.json?",
      {
        params: {
          q: text,
          key: KEY,
          days: 7,
        },
      }
    );
    setArrDay(convertToWeatherList(response.data.forecast.forecastday));
  };

  const convertToWeatherList = (oldWeatherList) => {
    return oldWeatherList.map((item) => {

      return {
        day: item.date,
        status: item.day.condition.icon,
        temprature: { day: item.day.maxtemp_c, night: item.day.mintemp_c },
      };
    });
  };
  
  return (
    <div className="App">
      <div className="v-header container">
        <div className="fullscreen-video-wrap">
          <video
            loop autoPlay muted
            className="wrapper__video"
            src="weather.mp4"
          ></video>
        </div>
        <div className="header-overlay">
          <Title>Weather App</Title>
        </div>
        <div
          className="header-content"
          style={{ margin: "auto", width: "100%" }}
        >
          <div>
            <SearchBar onFormSubmit={onTextSubmit} />
          </div>

          <WeatherContainer
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            {arrDay.map((weatherDay) => {
              return (
                <CardWrapper key={Math.random()}>
                  <WeatherCard
                    day={weatherDay.day}
                    status={weatherDay.status}
                    temprature={weatherDay.temprature}
                  />
                </CardWrapper>
              );
            })}
          </WeatherContainer>
          <div className="H1">
            <h1>Click on The map to get 7 days forecast</h1>
          </div>
            <SimpleMap onClick={onMapClick} />
        </div>
      </div>
    </div>
  );
};

export default App;

const CardWrapper = styled.div`
  width: 100%;
`;
const WeatherContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: white;
  font-style: italic;
  font-size: 70px;
`;
