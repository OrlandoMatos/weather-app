import { useState } from "react";
import search from "../../assets/img/search.png";
import { weatherResult } from "../../services/weatherResult";
import { useEffect } from "react";

export const Search = () => {
  const [country, setCountry] = useState("london");

  function namecountry(e) {
    const searchCountry = e.target.value;
    setCountry(searchCountry);
  }

  return (
    <div className="flex justify-around">
      <input
        type="text"
        className="p-3 rounded-2xl shadow-xl mt-3"
        onChange={namecountry}
      />
      <button className="shadow-xl bg-transparent rounded-md ">
        {" "}
        <img src={search} alt="" className="w-[30px] h-[30px]" />
      </button>
    </div>
  );
};
