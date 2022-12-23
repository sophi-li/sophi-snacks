import stylesheet from "./App.module.css";
import React from "react";
import data from "./data";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

import Select from "react-select";

const cityDescription = {
  Manhattan:
    "I spent the summer of 2021 in Manhattan. I visited most of these spots 2+ times. I can’t wait to go back to Scarr’s Pizza and Joe’s Steam Rice Roll.",
  "San Francisco":
    "I grew up in San Francisco. In this list, you'll find some of local gems and hot trendy spots. Naploeon, Perilla, and Neighbor Bakehouse hold a special place in my heart.",
  Seattle:
    "These are some of my favorite spots I crammed into a 4 day Seattle trip. If I were in Seattle longer, Piroshky Piroshky and Sea Wolf Bakery would become my most visited spots.",
  Portland:
    "I’ve visited Portland a handful of times. These are spots I keep going back to. Most notable are Nong’s, Pambiche, and Jen’s Pastries.",
  Oakland:
    "I worked in Oakland for a year. This list features some of my favorite lunch and post-work dinner + drinks spots. I've been to both Drake’s and Bare Knuckle 5+ times.",
  Hawaii:
  "These are some of my favorite spots during a vacation in December 2022. Kaka'ako Farmer's Market, Nisshodo, and Helena's Hawaiian Food are my top recommendations."
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
  let defaultCity = cityOptions[0].value

  let tempRestaurants = [];
  const defaultRestaurants = data.reduce(function (result, d) {
    if (d.city === defaultCity) {
      tempRestaurants.push(d);
    }
    return tempRestaurants;
  }, [])

  const initialDefaultCategories = [...new Set([].concat.apply([], defaultRestaurants.map((item) =>item.category)))]
  const defaultCategories = initialDefaultCategories.map(i => {
    return {"category": i, "isActive": false}
  }).filter(i => i.category !== undefined)

  const [selectedCity, setSelectedCity] = React.useState(defaultCity);
  const [selectedRestaurants, setSelectedRestaurants] = React.useState(
      defaultRestaurants
  );
  const [selectedCategories, setSelectedCategories] = React.useState(defaultCategories)

  function handleCityChange(e) {
    // Update restaurants to reflect new city
    setSelectedCity(e.value);
    let restaurants = [];
    let newSelectedRestaurants = data.reduce(function (result, d) {
      if (d.city === e.value) {
        restaurants.push(d);
      }
      return restaurants;
    }, []);
    setSelectedRestaurants(newSelectedRestaurants);

    // Update categories to reflect new city
    const newCategories = [...new Set([].concat.apply([], newSelectedRestaurants.map((item) =>item.category)))]
    const newDefaultCategories = newCategories.map(newCategory => {
      return {"category": newCategory, "isActive": false}
    }).filter(category => category.category !== undefined)
    setSelectedCategories(newDefaultCategories)
  }

  function handleCategoryChange(e) {
    const clickedCategory = e.target.innerHTML
    let hasActiveCategory = false

    // Set selected category to isActive and clear old category's isActive
    selectedCategories.forEach(category => {
      if (category.category === clickedCategory) {
        category.isActive = !category.isActive
        if (category.isActive) {
          hasActiveCategory = true
        }
      } else {
        category.isActive = false
      }
    })
    // Reset restaurants back to full list based on selected city
    let allCityRestaurants = [];
    let allCityRestaurantsList = data.reduce(function (result, d) {
      if (d.city === selectedCity) {
        allCityRestaurants.push(d);
      }
      return allCityRestaurants;
    }, []);

    // Filter the full selected city list based on the selected category
    let filteredCategoryList = []
    if (hasActiveCategory) {
      allCityRestaurantsList.reduce(function (result, d) {
        if (d.category?.includes(clickedCategory)) {
          filteredCategoryList.push(d);
        }
      }, []);
      setSelectedRestaurants(filteredCategoryList)
    } else {
      setSelectedRestaurants(allCityRestaurantsList);
    }
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
        <div className={stylesheet.categories}>
          {selectedCategories.map((category) => {
          if (category) {
            return <button className={category.isActive ? stylesheet.categoryButtonActive : stylesheet.categoryButton } onClick={(e) => handleCategoryChange(e)}>{category.category}</button>
          }
        } )}</div>
        <label htmlFor="cityDropdown" className={stylesheet.selectLabel}>
          Use the filters above to browse through different cities and categories.
        </label>

        <p className={stylesheet.description}>
          Welcome! I’m{" "}
          <a
            href="https://sophiali.blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sophia
          </a>.
           I enjoy travelling and trying new food.
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
          <p className={stylesheet.keyItem}>🍸 Alcohol</p>
          <p className={stylesheet.keyItem}>☕️ Caffeine</p>
        </div>
      </div>
      <div className={stylesheet.restaurantContainer}>
        {selectedRestaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}

export default App;
