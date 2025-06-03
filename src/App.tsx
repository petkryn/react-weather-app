import "./App.css";
import Button from "./components/Button";
import WeatherCardDay from "./components/WeatherCardDay";
import WeatherCardWeek from "./components/WeatherCardWeek";
import Input from "./components/Input";
import MainTitle from "./components/MainTitle";

function App() {
  const testData: any = {
    location: {
      name: "Kyiv",
      region: "Kyyivs'ka Oblast'",
      country: "Ukraine",
      lat: 50.4333,
      lon: 30.5167,
      tz_id: "Europe/Kiev",
      localtime_epoch: 1747744899,
      localtime: "2025-05-20 15:41",
    },
    current: {
      last_updated_epoch: 1747744200,
      last_updated: "2025-05-20 15:30",
      temp_c: 14.8,
      temp_f: 58.6,
      is_day: 1,
      condition: {
        text: "Patchy rain nearby",
        icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
        code: 1063,
      },
      wind_mph: 7.6,
      wind_kph: 12.2,
      wind_degree: 341,
      wind_dir: "NNW",
      pressure_mb: 1008,
      pressure_in: 29.77,
      precip_mm: 0.08,
      precip_in: 0,
      humidity: 61,
      cloud: 78,
      feelslike_c: 14.1,
      feelslike_f: 57.3,
      windchill_c: 14.1,
      windchill_f: 57.3,
      heatindex_c: 14.8,
      heatindex_f: 58.6,
      dewpoint_c: 7.4,
      dewpoint_f: 45.4,
      vis_km: 10,
      vis_miles: 6,
      uv: 4.2,
      gust_mph: 10.4,
      gust_kph: 16.8,
    },
  };
  return (
    <div className="main__page">
      <MainTitle titleText="Simple Weather App"/>
      <div className="main__content">
        <Input/>
        <div className="search">
          <Button buttonText="weather day" />
          <Button buttonText="weather week" />
        </div>
      </div>

      <div className="weather-cards">
        {/* @ts-ignore */}
        <WeatherCardDay data={testData} />
        <WeatherCardWeek data={testData} />
      </div>
    </div>
  );
}

export default App;
