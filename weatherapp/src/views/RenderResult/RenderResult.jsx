import { useState } from "react";
import { WeatherResult } from "../../components/WeatherResult/WeatherResult";
import { getWeather } from "../../services/getWeather";
import search from "../../assets/img/search.png";
import searchInitIcon from "../../assets/searchIcon.svg";

export const RenderResult = () => {
  const [weatherCountry, setWeatherCountry] = useState(null);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWeather();
  }

  const handleWeather = async () => {
    try {
      setIsLoading(true);

      const weather = await getWeather(country);
      setWeatherCountry(weather);
    
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

 

  return (
    <div
      className="bg-blue-100 rounded-lg min-w-[300px] h-5/6 m-auto 
    md:max-w-[500px] md:min-w-[400px] md:rounded-sm md:min-h-[600px] 
    lg:max-w-[50%] lg:min-w-[400px] lg:rounded-md flex flex-col items-center"
    >
      <form className="flex gap-3 justify-around" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="p-3 rounded-2xl shadow-xl mt-3"
          value={country}
          onChange={handleSearch}
        />
        <button type="submit" className="bg-transparent rounded-full border-2 px-3">
          <img src={search} alt="" className="w-[30px] h-[30px]" />
        </button>
      </form>

      {
        weatherCountry
          ? isLoading
            ? <Loader />
            : <WeatherResult weatherCountry={weatherCountry} />
          : <img className="flex mt-40 w-60" src={searchInitIcon} alt="welcome" />
      }
    </div>
  );
};

export const Loader = () => {
  return <p>Cargando..</p>;
};
