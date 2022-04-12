import stylesheet from "./App.module.css";
import React from "react";
import data from "./data";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

import Select from "react-select";

const cityDescription = {
  Manhattan:
    "I spent a summer in Manhattan and visited most of these spots at least 2+ times. I can’t wait to go back to Scarr’s Pizza and Joe’s Steam Rice Roll.",
  "San Francisco":
    "I grew up in San Francisco. In this list, you'll find some of local gems and hot trendy spots. Naploeon, Perilla, and Neighbor Bakehouse hold a special place in my heart.",
  Seattle:
    "These are some of my favorite spots I crammed into a 4 day Seattle trip. If I were in Seattle longer, Piroshky Piroshky and Sea Wolf Bakery would become my most visited spots.",
  Portland:
    "I’ve visited Portland a handful of times and these are spots I keep going back to. Most notable are Nong’s, Pambiche, and Jen’s Pastries.",
  Oakland:
    "I worked in Oakland for a year. This list features some of my favorite lunch and post-work dinner + drinks spots. I've been to both Drake’s and Bare Knuckle 5+ times.",
};

function App() {
  let cities = [
    ...new Set(
      data.map((d) => {
        return d.city;
      })
    ),
  ];
  let cityOptions = cities
    .map((c) => {
      return { value: c, label: c };
    })
    .sort((a, b) => {
      return a.value > b.value ? 1 : -1;
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
    <main className={stylesheet.App}>
      <div className={stylesheet.blurbContainer}>
        <h1 className={stylesheet.title}>
          Sophi <span className={stylesheet.titleSnack}>Snacks</span>
        </h1>
        <Select
          id="cityDropdown"
          isSearchable={false}
          defaultValue={cityOptions[0]}
          options={cityOptions}
          onChange={(e) => handleCityChange(e)}
        />
        <label htmlFor="cityDropdown" className={stylesheet.selectLabel}>
          Use the dropdown above to browse through different cities.
        </label>

        <p className={stylesheet.description}>
          Welcome! I’m{" "}
          <a
            href="https://sophiali.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sophia
          </a>
          , lover of travel and trying new food. These are some of my favorite
          restaurants, cafes, and bars in {selectedCity}.
        </p>
        <p className={stylesheet.description}>
          {cityDescription[selectedCity]}
        </p>
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
        <div className={stylesheet.keyContainer}>
          <p className={stylesheet.keyItem}>🌱 Vegetarian</p>
          <p className={stylesheet.keyItem}>ⓥ Vegan</p>
        </div>
      </div>
      <div className={stylesheet.restaurantContainer}>
        {selectedCityRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}

export default App;
