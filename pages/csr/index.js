import React, { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      let jokeVal = result.joke
        ? result.joke
        : result.setup + ": " + result.delivery;
      setData(jokeVal);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return <p>{data ? `Your data: ${data}` : "Loading..."}</p>;
}
