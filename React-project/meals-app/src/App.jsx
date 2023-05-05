import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [meal, setMeal] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    const { data } = await Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );    
    setMeal(data.meals?.[0]);
  };    
  
  return (
    <div className="text-center">
      <div className={`${meal ? 'my-5' : 'my-[244px]'}`}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="ex-burger"
      />
      <button onClick={handleSearch} className="bg-orange-200 ml-[5px]">Search</button>
      </div>
      {meal && (
        <div className="">
          <h1>{meal.strMeal}</h1>
          <div className="lg:flex lg:justify-center mx-auto lg:items-center text-lg lg:text-xl">
            <img
              src={meal.strMealThumb}
              alt="Meal thumbnail"
              className="w-60 mx-auto my-[13px] lg:h-[450px] lg:w-[450px]"
            />
            <h2 className="bg-orange-200 lg:invisible">Ingredients:</h2>
            <ul className=" text-start mx-auto inline-block list-decimal">
              {Array.from({ length: 20 }).map((_, index) => {
                const ingredient = meal[`strIngredient${index + 1}`];
                const measure = meal[`strMeasure${index + 1}`];
                if (!ingredient) return null;
                return (
                  <li key={ingredient}>
                    {measure} {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
