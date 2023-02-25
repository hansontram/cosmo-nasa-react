import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

function App() {
  const api_key = "pU4NsG6fIg98UQCpGicxpavg8Ar1nBG7dQ2lZNdh";

  const [spaceData, setSpaceData] = useState([]);
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpaceData();
    setIsLoading(true);
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
          <input className="date-input" type="date" value={date} onChange={updateDate} />
        </form>
        {isLoading && <div className="loading">⌛️ Loading...</div>}
      </div>
      <h2>{spaceData.title}</h2>
      <div className="content-box"></div>
      {spaceData.media_type === "image" && 
        <img className="content-img" src={spaceData.url} alt={spaceData.title} />
      }
      {spaceData.media_type === "video" && 
        <iframe className="content-vid" src={spaceData.url} alt={spaceData.title} />
      }
      <p className="content-description">{spaceData.explanation}</p>
    </div>
  );
}

export default App;
