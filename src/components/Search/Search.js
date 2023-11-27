import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchMeal } from "../../api/axios";
import "./Search.css";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMeal(searchItem)
      .then((resp) => {
        setSearchResult(resp.data.meals || []);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="search-section">
      <h2 className="search__title">Find your meal</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Find your meal"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
      <div className="search-result">
        {searchResult === null
          ? "No result"
          : searchResult.map((meal) => (
              <div key={meal.idMeal} className="meal-item">
                <Link to={`/meal/${meal.idMeal}`}>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="meal-img"
                  ></img>
                  <div className="meal-details">
                    <h3 className="details-title">{meal.strMeal}</h3>
                    <p className="details-category">
                      {meal.strCategory} | {meal.strArea}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;
