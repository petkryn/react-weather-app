import { FC } from "react";
import MainTitle from "../../components/MainTitle";
import Button from "../../components/Button";
import Input from "../../components/Input";
import WeatherCardDay from "../../components/WeatherCardDay";
import WeatherCardWeek from "../../components/WeatherCardWeek";
import { weatherDayData } from "../../data/weather-day";

const Home: FC = () => {
  return (
    <div className="main__page">
      <MainTitle titleText="Simple Weather App" />
      <div className="main__content">
        <Input />
        <div className="search">
          <Button buttonText="weather day" />
          <Button buttonText="weather week" />
        </div>
      </div>

      <div className="weather-cards">
        <WeatherCardDay data={weatherDayData} />
        <WeatherCardWeek data={weatherDayData} />
      </div>
    </div>
  );
};

export default Home;
