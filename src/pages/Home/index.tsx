import { FC, useState } from "react";
import MainTitle from "../../components/MainTitle";
import Button from "../../components/Button";
import Input from "../../components/Input";
import WeatherCardDay from "../../components/WeatherCardDay";
import WeatherCardWeek from "../../components/WeatherCardWeek";
import { WeatherWeekInterface } from "../../components/WeatherCardWeek";
import "./style.css";

const Home: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [weatherDay, setWeatherDay] = useState(null);
  const [weatherWeek, setWeatherWeek] = useState<WeatherWeekInterface | null>(
    null
  );
  const urlDay = "https://api.weatherapi.com/v1/current.json";
  const keyDay = "33e53c5f75d247f69fc135030251803";
  const urlWeek =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const keyWeek = "95YUCEXKBE9VZZ6Y7EQWNEZXK";

  const getWetherDay = () => {
    fetch(`${urlDay}?q=${inputValue}&key=${keyDay}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }
        setWeatherDay(data);
      })
      .catch((error) => {
        // mainWeatherInfo.innerHTML = `<p class="error__style">This locality was not found</p>`;
      });
  };

  const getWetherWeek = () => {
    const { startDate, endDate } = formatDates();
    fetch(
      `${urlWeek}/${inputValue}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${keyWeek}&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }
        setWeatherWeek(data);
      })
      .catch((error) => {
        // mainWeatherInfo.innerHTML = `<p class="error__style">This locality was not found</p>`;
      });
  };

  const formatDates = () => {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 6);

    const formatDate = (date: any) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const startDate = formatDate(today);
    const endDate = formatDate(end);
    return { startDate, endDate };
  };

  return (
    <div className="main__page">
      <MainTitle titleText="Simple Weather App" />
      <div className="main__content">
        <Input
          customType="text"
          customPlaceholder="Search city"
          isDisabled={false}
          customValue={inputValue}
          customOnChange={(event) => setInputValue(event.target.value)}
        />
        <div className="search">
          <Button customClick={getWetherDay}>Weather day</Button>
          <Button customClick={getWetherWeek}>Weather week</Button>
        </div>
      </div>

      <div className="weather-cards">
        {weatherDay ? <WeatherCardDay data={weatherDay} /> : ""}
        {weatherWeek
          ? weatherWeek.days.map((day) => <WeatherCardWeek data={day} />)
          : ""}
      </div>
    </div>
  );
};

export default Home;
