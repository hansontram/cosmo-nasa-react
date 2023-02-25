import { useState, useEffect } from "react";
import "./App.css";




function App() {
    const API_KEY="5Znmc1rmmOhgreEKjpIzd9tHjWy2bOB9vhlqVwoi"
    


    const [data, setData] = useState([])
    const [date, setDate] = useState("2023-02-21")

    const getData = async () => {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
        );
    
        const data = await response.json();
        setData(data);
        console.log(data);
        console.log("data fetch works")
      };
    
        const handleChange = (e) => {
            setDate(e.target.value);
            console.log(setDate)
            console.log("handleChange Works!")
           };
  
    return (
    <div>
      <h1>Title</h1>
      <input
        type="date"
        onChange={handleChange}
        value={date}
        />
        <p>Selected Date: {date}</p>
    </div>
  )
}

export default App
