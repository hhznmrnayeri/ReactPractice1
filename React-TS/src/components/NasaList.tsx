import { useState } from "react";
import Nasa from "./Nasa";
import { Nasa as NasaType } from "./Nasa.types";

export default function NasaList() {
  const [nasaArray, setNasaArray] = useState<NasaType[]>([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    if (count > 0) {
      let res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Q5GRsWcW4ZCKNQlkBAbBU9g9RaKOedI5FU7XP7GR&count=${count}`
      );
      let data = await res.json();
      setNasaArray(data);
      setCount(0);
    } else {
      setNasaArray([]);
    }
  };
  const countHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };
  return (
    <>
      <div className="flex items-center justify-center my-10 gap-4">
        <input
          type="number"
          className="p-4 border border-blue-700 rounded outline-none"
          value={count}
          onChange={(event) => countHandler(event)}
        />
        <button
          className="bg-blue-700 text-white p-4 rounded"
          onClick={() => getData()}
        >
          data
        </button>
      </div>
      {nasaArray.length ? (
        nasaArray.map((item, index) => <Nasa {...item} key={index}></Nasa>)
      ) : (
        <div></div>
      )}
    </>
  );
}
