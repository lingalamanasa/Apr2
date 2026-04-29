import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Services() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setMeals(res.data.meals.slice(0, 8)));
  }, []);

  return (
    <div className="container">
      <h2>Our Menu 🍕</h2>

      <div className="grid">
        {meals.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <img src={meal.strMealThumb} />
            <h3>{meal.strMeal}</h3>

            <Link to={`/services/${meal.idMeal}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;