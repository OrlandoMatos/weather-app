import {
  IconDropletHalf2,
  IconMapPin,
  IconPropeller,
} from "@tabler/icons-react";

export const WeatherResult = ({ weatherCountry }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-7 gap-8">
      <div className="">
        <img
          src={`https://openweathermap.org/img/wn/${weatherCountry?.weather[0].icon}@2x.png`}
          alt="Imagen de temperatura."
        />
      </div>
      <div className="text-stone-700 text-4xl">
        <span> {weatherCountry?.weather[0].description}</span>
      </div>

      <div className="text-blue-500 text-5xl pt-3 flex">
        <h2> {weatherCountry?.main.temp}</h2>
        <span>&deg;C</span>
      </div>

      <div className="flex pt-3 text-3xl items-center gap-2">
        <IconMapPin />
        <span>{weatherCountry?.name}</span>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-5">
        <aside className="bg-blue-200 flex flex-col items-center rounded-sm">
          <IconDropletHalf2 />{" "}
          <span>{weatherCountry?.main.humidity} km/h </span>
          <p>Humedad</p>
        </aside>

        <aside className="bg-blue-200 flex flex-col items-center min-w-32 max-w-32 rounded-md">
          <IconPropeller />
          {weatherCountry?.wind.speed}
          <p> viento</p>
        </aside>
      </div>
    </div>
  );
};
