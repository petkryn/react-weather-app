import { FC, useState, useEffect } from "react";
import MainTitle from "../../components/MainTitle";
import Button from "../../components/Button";
import Input from "../../components/Input";
import WeatherCardDay from "../../components/WeatherCardDay";
import WeatherCardWeek from "../../components/WeatherCardWeek";
import { WeatherWeekInterface } from "../../components/WeatherCardWeek";
import "./style.css";
import { apiConstants } from "../../constants/api-constants";

interface City {
  name: string;
  isWeatherDay: boolean;
}

const Home: FC = () => {
  const [weatherDay, setWeatherDay] = useState(null);
  const [weatherWeek, setWeatherWeek] = useState<WeatherWeekInterface | null>(
    null
  );
  const [weatherError, setWeatherError] = useState<string>("");

  const [city, setCity] = useState<City | null>(
    JSON.parse(localStorage.getItem("city") || "null")
  );
  const [inputValue, setInputValue] = useState(""); //
  const [favoriteCities, setFavoriteCities] = useState<string[]>(
    JSON.parse(localStorage.getItem("favoriteCities") || "[]")
  );

  useEffect(() => {
    console.log(city);
    if (city && city.name) {
      setInputValue(city.name);
      getWetherDay(city.name);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  const getWetherDay = (name?: string) => {
    setWeatherError("");

    if (inputValue) {
      fetch(`${apiConstants.urlDay}?q=${inputValue}&key=${apiConstants.keyDay}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            throw new Error(data.error.message);
          }
          setWeatherDay(data);
        })
        .catch(() => {
          setWeatherError("This locality was not found");
          setWeatherDay(null);
        });

      localStorage.setItem(
        "city",
        JSON.stringify({ name: inputValue, isWeatherDay: true })
      );
    }
  };

  const getWetherWeek = () => {
    setWeatherError("");
    setWeatherWeek(null);

    const { startDate, endDate } = formatDates();
    fetch(
      `${apiConstants.urlWeek}/${inputValue}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${apiConstants.keyWeek}&contentType=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("This locality was not found");
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !data.days || !data.resolvedAddress || !data.days.length) {
          throw new Error("This locality was not found");
        }
        setWeatherWeek(data);
      })
      .catch(() => {
        setWeatherError("This locality was not found");
        setWeatherWeek(null);
      });

    localStorage.setItem(
      "city",
      JSON.stringify({ name: inputValue, isWeatherDay: false })
    );
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

  const addFavoriteCity = () => {
    if (!favoriteCities.includes(inputValue)) {
      setFavoriteCities((prevState) => {
        return [...prevState, inputValue];
      });
    }
  };

  const deleteFavoriteCity = (cityNameToDelete: string) => {
    setFavoriteCities((prev) =>
      prev.filter((city) => city !== cityNameToDelete)
    );
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
          <Button customClick={addFavoriteCity}>Add Favorite Cities</Button>
        </div>
      </div>

      {weatherError && (
        <div className="weather-errors">
          {weatherError && (
            <p className="error__style">Error: {weatherError}</p>
          )}
        </div>
      )}

      {(weatherDay || weatherWeek) && (
        <div className="weather-cards">
          {weatherDay ? <WeatherCardDay data={weatherDay} /> : ""}

          {weatherWeek
            ? weatherWeek.days.map((day) => <WeatherCardWeek data={day} />)
            : ""}
        </div>
      )}

      {favoriteCities.length > 0 && (
        <div className="favorites">
          <h3>Favorite cities:</h3>
          <ul>
            {favoriteCities.map((city) => (
              <li
                key={city}
                className="favorite-city"
                onClick={() => {
                  setInputValue(city);
                  getWetherDay();
                }}
              >
                <span>{city}</span>
                <span
                  className="delete__city"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFavoriteCity(city);
                  }}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
