import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";

const CoffeeCards = () => {
    const naviget=useNavigate();
  // coffee from routes data
  const data = useLoaderData();
  // dynamic category shown
  const { category } = useParams();

  // for filter category wise coffee

  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredCoffeeByCategory = [...data].filter(
        (c) => c.category === category
      );
      setCoffee(filteredCoffeeByCategory);
    } else {
      setCoffee(data.slice(0, 6));
    }
  }, [data, category, setCoffee]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {coffee.map((c) => (
          <Cards key={c.id} coffee={c} />
        ))}
      </div>
      <button onClick={()=>naviget('/coffees')}
       className="btn btn-active btn-accent flex justify-center items-center">
        View All
        
        </button>
    </>
  );
};
CoffeeCards.propTypes = {
  category: PropTypes.object,
};
export default CoffeeCards;
