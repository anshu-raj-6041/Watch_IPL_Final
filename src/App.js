import React from "react";
import data from "./data";
import Tours from "./components/Tours"
import { useState } from "react";

import { useEffect } from "react";



const App = () => {

  const [theme, setTheme] = useState("dark");


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle the theme between "dark" and "light"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  // const [category, setCategory] = useState(filterData[0].title);

  // tours ko data se initialize kr diya
  // tours me 7 cities ka data hai
  const [tours, setTours] = useState(data);
  // const [category, setCategory] = useState(filterData[0].title);

  // kyuki id unique hoti hai
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 className="re">No Season Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh Content</button>
        <a href="https://www.animatedimages.org/cat-cricket-1840.htm"><img src="https://www.animatedimages.org/data/media/1840/animated-cricket-image-0018.gif" border="0" alt="animated-cricket-image-0018" /></a>

      </div>

    );
  }

  return (
    <div className="App">
      <button className="btn-light-dark" onClick={toggleTheme}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      {/* <h2>IPL Trophies</h2> */}
      <Tours tours={tours} removeTour={removeTour} />

    </div>




  )
};

export default App;