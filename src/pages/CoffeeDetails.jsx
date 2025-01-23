// import { object } from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../assets/nutrition.png";
import { addFavorite } from "../utils";

const CoffeeDetails = () => {
  // get all data loader hook
  const allCoffeesData = useLoaderData();
  // console.log(allCoffeesData);
  // receive id by use prams hook
  const { id } = useParams();

  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleCoffeeData = allCoffeesData.find(
      (coffee) => coffee.id === parseInt(id)
    );
    setCoffee(singleCoffeeData);
  }, [allCoffeesData, id]);

  // destructuring  data
  const {
    // id: coffeeID,
    name,
    // category,
    // origin,
    image,
    ingredients,
    nutrition_info,
    // type,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  // Handel favorite btn click function 
  const handelFavorite=(coffee)=>{
      addFavorite(coffee);

  }
  return (
    <div className="my-12">
      {/* Description */}
      <h2 className="text-2xl md:text-4xl font-thin my-6">{description}</h2>
      {/* Image */}
      <div className="w-full h-full md:h-[500px] object-cover overflow-hidden">
        <img className="w-full h-full rounded-xl" src={image} alt="page cover image" />
      </div>
      {/* Title and Favorite Button */}
      <div className="flex justify-between items-center my-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-thin">{name}</h2>
          <p className="text-base">Popularity : {popularity}</p>
          <p className="text-base">Rating : {rating}</p>
        </div>
        <div>
          <button onClick={()=>handelFavorite(coffee)} className="btn btn-warning">Add Favorite</button>
        </div>
      </div>
      {/* making process */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-thin"> Making Process :</h2>
        <p className=" text-base">{making_process}</p>
      </div>

      {/* Ingredient info */}

      <div className="my-6 flex justify-center gap-6">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-2xl font-thin">Ingredient :</h2>
            <ul className="text-xl ml-12">
              {ingredients &&
                ingredients.map((i, indx) => (
                  <li className="list-disc" key={indx}>
                    {i}
                  </li>
                ))}
            </ul>
            {/* Nutrition Info */}
            <h2 className="text-2xl font-thin">Nutrition:</h2>
            <ul className="text-xl ml-12">
              {nutrition_info &&
                Object.keys(nutrition_info).map((n,index) => (
                  <li className="list-disc" key={index}>
                    {n}: {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Nutrition Image */}
        <div className="flex-1">
          <img src={nutritionImg} alt="" />
        </div>
      </div>

      {/* main div end */}
    </div>
  );
};

export default CoffeeDetails;
