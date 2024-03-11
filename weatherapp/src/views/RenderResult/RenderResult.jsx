import { useEffect, useState } from "react";
import { WeatherResult } from "../../Components/WeatherResult/WeatherResult";
import { getWeather } from "../../services/getWeather";
// import { Search } from "../../Components/Search/Search";
import search from "../../assets/img/search.png";
import {
  IconMapPin,
  IconPropeller,
  IconDropletHalf2,
} from "@tabler/icons-react";

export const RenderResult = () => {
  const [weatherCountry, setWeatherCountry] = useState(null);
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   weatherResult().then((data) => setWeatherCountry(data));
  // }, []);

  function handleSearch(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setCountry({ [name]: value });
    // console.log({ [name]: value });
  }

  async function handleWeather() {
    try {
      setIsLoading(true);
      const countryResult = await getWeather(country);
      setWeatherCountry(countryResult);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(country);
  return (
    <div
      className="bg-blue-100 rounded-lg min-w-[300px] h-5/6 m-auto 
    md:max-w-[500px] md:min-w-[400px] md:rounded-sm md:min-h-[600px] 
    lg:max-w-[50%] lg:min-w-[400px] lg:rounded-md"
    >
      <form className="flex justify-around">
        <input
          type="text"
          name="search"
          className="p-3 rounded-2xl shadow-xl mt-3"
          onChange={handleSearch}
        />
        <button className="shadow-xl bg-transparent rounded-md ">
          {" "}
          <img src={search} alt="" className="w-[30px] h-[30px]" />
        </button>
      </form>

      {weatherCountry ? (
        isLoading ? (
          <Loader />
        ) : (
          <WeatherResult weatherCountry={weatherCountry} />
        )
      ) : (
        "Wealcome"
      )}
    </div>
  );
};

export const Loader = () => {
  return <p>Cargando..</p>;
};
