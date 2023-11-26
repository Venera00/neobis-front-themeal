import React from "react";
import { useEffect, useState } from "react";
import { getRandomMeal } from "../../api";
import "./RandomMeal.css";

const RandomMeal = () => {
  const [randomFood, setRandomFood] = useState({});

  useEffect(() => {
    getRandomMeal().then(({ resp }) => {
      setRandomFood(resp.meals[0]);
    });
  }, []);
  return (
    <div>
      <h2>The meal of the day</h2>
    </div>
  );
};

export default RandomMeal;
