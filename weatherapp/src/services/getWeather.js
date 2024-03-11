import axios from "axios";

export const getWeather = async (country) => {
  const api_key = "6d17c0630938ab8955b93dafa9d26ebf";

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}`
  );

  return response.data;
};
