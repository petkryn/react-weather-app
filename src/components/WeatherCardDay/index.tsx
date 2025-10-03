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

interface WeatherCardDayProps {
  data: TestDataInterface;
}

const WeatherCardDay: FC<WeatherCardDayProps> = ({ data }) => {
  return (
    <div className="weather__card">
      <div className="title__info">
        <h2 className="main__card__title">{data.location.name}</h2>
        <p>{data.location.country}</p>
      </div>
      <div className="degree__info">
        <p className="card__temperature__info">{data.current.temp_c}</p>
        <img className="img__degree" src="img/градус цел.png" alt="foto" />
      </div>
      <img className="main__img" src={data.current.condition.icon} alt="foto" />
      <p className="card__weather__info">{data.current.condition.text}</p>
    </div>
  );
};

export default WeatherCardDay;
