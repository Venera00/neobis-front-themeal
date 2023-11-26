import axios from "axios";

const instance = axios.create({
  baseURL: "www.themealdb.com/api/json/v1/1/",
  headers: {
    "Content-Type": "application.json",
  },
});

export const searchMeal = (searchItem) =>
  instance.get("search.php", { params: { s: searchItem } });
export const getRandomMeal = () => instance.get("random.php");
export const getMealParams = (id) =>
  instance.get("lookup.php", { params: { i: id } });
