import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import SpaceContent from "./SpaceContent";

function App() {
  const api_key = "pU4NsG6fIg98UQCpGicxpavg8Ar1nBG7dQ2lZNdh";

  const [spaceData, setSpaceData] = useState({});
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (date) {
      getSpaceData();
      setIsLoading(true);
    }
    console.log("useeffect hit");
  }, [date]);

  const getSpaceData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
    );

    const data = await response.json();
    setSpaceData(data);
    console.log(data);
    console.log("fetch works");
    setIsLoading(false);
  };

  const updateDate = (e) => {
    setDate(e.target.value);
    console.log(date);
    console.log("update Date WORKS!");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>South Coast Cosmos Society</h1>
        <p>Select a date below to view NASA's Astronomy Photo of the Day:</p>
        <form className="date-form">
          <input
            className="date-input"
            type="date"
            value={date}
            onChange={updateDate}
          />
        </form>
        {isLoading && <div className="loading">⌛️ Loading...</div>}
      </div>
      {!isLoading && <SpaceContent data={spaceData}/>}
    </div>
  );
}

export default App;
