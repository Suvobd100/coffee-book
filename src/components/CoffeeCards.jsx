import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";

const CoffeeCards = () => {
  // coffee from routes data
  const data = useLoaderData();
  // dynamic category shown
  const { category } = useParams();

  // for filter category wise coffee

  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const filteredCoffeeByCategory = [...data].filter(
      (c) => c.category === category
    );
    setCoffee(filteredCoffeeByCategory);
  }, [data, category,setCoffee]);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {coffee.map((c) => (
        <Cards key={c.id} coffee={c} />
      ))}
    </div>
  );
};
CoffeeCards.propTypes = {
  category: PropTypes.object,
  
};
export default CoffeeCards;
