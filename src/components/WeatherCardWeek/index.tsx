import "./style.css";
import { FC } from "react";

interface TestDataInterface {
  location: LocationInterface;
  current: CurrentInterface;
}

interface LocationInterface {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface CurrentInterface {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

interface WeatherCardWeekProps {
  data: TestDataInterface;
}

const WeatherCardWeek: FC<WeatherCardWeekProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="weather__card__week">
      <h3>{data.current.last_updated}</h3>
      <p>
        <span>City:</span>
        {data.location.name}
      </p>
      <p>
        <span>Temperature:</span>
        {data.current.temp_c}°C
      </p>
      <p>
        <span>Weather:</span>
        {data.current.condition.text}
      </p>
      <img
        className="week_img"
        src={data.current.condition.icon}
        alt="icon-weather"
      ></img>
    </div>
  );
};

export default WeatherCardWeek;
