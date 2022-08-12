import React from "react"
const api = {
  key: "69c141ed344d28b2c751c92d9170fb8b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  let date = String(new window.Date())
  date = date.slice(0,15)

  const [query, setQuery] = React.useState("")
  const [weather, setWeather] = React.useState({})
  
  const search  = evt =>{
        if (evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setQuery("");
                setWeather(result);
                console.log(result)
                console.log(query)
            });
        }
    }
  
  return (
    <div className={(typeof weather.main != "undefined")
     ? ((weather.main.temp > 15) 
      ? "app warm"
      : "app") 
     : "app earth"}>
      <main>
        <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
    </div>
        <div className="location-box">
        <div className="location">{weather.name}</div>
        <div className="date">{date}</div>
        </div>
        <div className="weather-box">
        {weather.main ? <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? "temp hot" : "temp cold") : "temp"}>{weather.main.temp}°C</div> : null}
        {weather.weather ? <div className="weather">{weather.weather[0].main}</div> : null}
        </div>
      </main>
    </div>
  );
}


export default App;
