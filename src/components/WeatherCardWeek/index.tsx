import "./style.css";
import { FC } from "react";

export interface DayWeather {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  icon?: string;
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
  const iconUrl = data.icon
    ? `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${data.icon}.png`
    : "";

  return (
    <div className="weather__card__week">
      <ul className="days__list">
        <li key={data.datetime} className="day__item">
          <h3>
            <strong>{data.datetime}</strong>
          </h3>
          <p>
            <span>Avg:</span> {data.temp}°C
          </p>
          <p>
            <span>Min:</span> {data.tempmin}°C
          </p>
          <p>
            <span>Max:</span> {data.tempmax}°C
          </p>

          <img src={"../../img/" + data.icon + ".svg"} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default WeatherCardWeek;
