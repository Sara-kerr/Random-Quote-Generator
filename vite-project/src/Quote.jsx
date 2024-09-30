import { useState, useEffect } from "react";
import React from "react";
import MyImage from "./assets/MyImage.png";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const apiKey = "xI1ROK11Oqg1AvqT8Uapgg==HWrtI4UkVOC1AZC1";

  const getQuote = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes",
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      const data = await response.json();

      console.log("API Response:", data);
      const fetchedQuote = data[0];

      setQuote(fetchedQuote.quote);
      setAuthor(fetchedQuote.author);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 ">
        <div className="w-2/4 p-6 rounded-md bg-gradient-to-r from-blue-200 to-cyan-200">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl my-5">Quote of the day</h1>
            <img className="w-10 h-10 mt-2" src={MyImage} alt="doule quotes" />
          </div>

          <blockquote>
            "{quote}"
            <div className="text-right mr-7 mt-3">
              — <i>{author}</i>
            </div>
          </blockquote>
          <button
            className="text-white font-medium rounded-md bg-gradient-to-r from-indigo-400 to-cyan-400 pr-3 pl-3 pt-2 pb-2"
            onClick={getQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
