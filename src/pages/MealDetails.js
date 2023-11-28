import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealParams } from "../api/axios";
import "./MealDetails.css";

const MealDetails = () => {
  const [mealDetails, setMealDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMealParams(id)
      .then((resp) => {
        setMealDetails(resp.data.meals[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <div className="meal-header">
        <div>
          <p className="random-meal__title">{mealDetails.strMeal}</p>
          <p className="random-meal__category">
            {mealDetails.strCategory} | {mealDetails.strArea}
          </p>

          <h3 className="ingredients-title">Ingredients</h3>
          <ul>
            {Object.keys(mealDetails)
              .filter((key) => key.includes("Ingredient") && mealDetails[key])
              .map((key, index) => (
                <li key={index}>
                  {mealDetails[key]} - {mealDetails[`strMeasure${index + 1}`]}
                </li>
              ))}
          </ul>
        </div>
        <img
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
          className="detail-img"
        />
      </div>

      <div className="meal-info">
        <h3 className="instructions-title">Instructions</h3>
        <p className="instructions-text">{mealDetails.strInstructions}</p>
        <a
          href={mealDetails.strYoutube}
          target="_blank"
          className="youtube-btn"
        >
          Watch on Youtube
        </a>
      </div>
    </>
  );
};

export default MealDetails;
