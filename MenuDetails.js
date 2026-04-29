import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeal(res.data.meals[0]));
  }, [id]);

  if (!meal) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} />
      <p><b>Category:</b> {meal.strCategory}</p>
      <p><b>Area:</b> {meal.strArea}</p>
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default MenuDetails;