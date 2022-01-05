import stylesheet from "./App.module.css";
import React from "react";
import data from "./data";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

import Select from "react-select";

function App() {
  let cities = [
    ...new Set(
      data.map((d) => {
        return d.city;
      })
    ),
  ];
  let cityOptions = cities.map((c) => {
    return { value: c, label: c };
  });
  let initRestaurants = [];
  const [selectedCity, setSelectedState] = React.useState(cityOptions[0].value);
  const [selectedCityRestaurants, setSelectedCityRestaurants] = React.useState(
    data.reduce(function (result, d) {
      if (d.city === selectedCity) {
        initRestaurants.push(d);
      }
      return initRestaurants;
    }, [])
  );

  function handleCityChange(e) {
    setSelectedState(e.value);
    let restaurants = [];
    let newSelectedCityRestaurants = data.reduce(function (result, d) {
      if (d.city === e.value) {
        restaurants.push(d);
      }
      return restaurants;
    }, []);
    setSelectedCityRestaurants(newSelectedCityRestaurants);
  }
  return (
    <div className={stylesheet.App}>
      <div className={stylesheet.blurbContainer}>
        <h1 className={stylesheet.title}>
          Sophi <span className={stylesheet.titleSnack}>Snacks</span>
        </h1>
        <Select
          isSearchable={false}
          defaultValue={cityOptions[0]}
          options={cityOptions}
          onChange={(e) => handleCityChange(e)}
        />

        <p className={stylesheet.description}>
          Hi! I’m{" "}
          <a
            href="https://twitter.com/sophia_wyl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sophia
          </a>
          , lover of travel and trying new food. These are some of my favorite
          restaurants, cafes, and bars in {selectedCity}.
        </p>
        <p>Use the dropdown above to browse through different cities.</p>
        <p className={stylesheet.description}>
          View{" "}
          <a
            href="https://github.com/sophi-li/sophi-snacks"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code here
          </a>
          .
        </p>
      </div>
      <div className={stylesheet.restaurantContainer}>
        {selectedCityRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
}

export default App;
