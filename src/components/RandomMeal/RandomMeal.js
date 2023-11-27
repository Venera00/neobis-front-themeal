import { useEffect, useState } from "react";
import { getRandomMeal } from "../../api/axios";
import { Link } from "react-router-dom";
import "./RandomMeal.css";

const RandomMeal = () => {
  const [randomFood, setRandomFood] = useState({});

  useEffect(() => {
    getRandomMeal().then(({ data }) => {
      setRandomFood(data.meals[0]);
    });
  }, []);
  return (
    <>
      <div className="random-meal">
        <div className="random-meal__info">
          <h2 className="random-meal__constant">Meal of the day</h2>
          <Link to={randomFood.idMeal} className="link">
            <p className="random-meal__title">{randomFood.strMeal}</p>

            <p className="random-meal__category">
              {randomFood.strCategory} | {randomFood.strArea}
            </p>
          </Link>
        </div>
        <div className="random-meal-img">
          <Link to={randomFood.idMeal}>
            <img src={randomFood.strMealThumb} alt={randomFood.strMeal} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RandomMeal;
