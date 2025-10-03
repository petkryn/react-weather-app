import "./style.css";
import { FC } from "react";

export interface DayWeather {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
}

export interface WeatherWeekInterface {
  address: string;
  days: DayWeather[];
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  timezone: string;
  tzoffset: number;
}

interface WeatherCardWeekProps {
  data: DayWeather;
}

const WeatherCardWeek: FC<WeatherCardWeekProps> = ({ data }) => {
  return (
    <div className="weather__card__week">
      <ul className="days__list">
        <li key={data.datetime} className="day__item">
          <p>
            <strong>{data.datetime}</strong>
          </p>
          <p>Avg: {data.temp}°C</p>
          <p>Min: {data.tempmin}°C</p>
          <p>Max: {data.tempmax}°C</p>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCardWeek;
