import PropTypes from "prop-types";

const Cards = ({ coffee }) => {
  console.log(coffee);

  // {
  //     "id": 7,
  //     "name": "Flat White",
  //     "image": "https://i.ibb.co.com/9GJp9MR/robbie-down-LI8iny-Hnm-A-unsplash.jpg",
  //     "category": "Brewed Coffee",
  //     "ingredients": [
  //         "Espresso",
  //         "Steamed Milk"
  //     ],
  //     "nutrition_info": {
  //         "calories": 130,
  //         "fat": 5,
  //         "carbohydrates": 10,
  //         "protein": 6
  //     },
  //     "origin": "Australia",
  //     "type": "Creamy",
  //     "description": "A velvety coffee drink made with espresso and microfoam milk.",
  //     "making_process": "Brew a double shot of espresso. Steam milk to create a smooth microfoam. Pour the milk over the espresso, aiming for a creamy blend without a thick layer of foam.",
  //     "rating": 4.5,
  //     "popularity": 87
  // }
  const {
    id,
    name,
    category,
    origin,
    image,
    ingredients,
    nutrition_info,
    type,
    description,
    making_process,
    rating,
    popularity,
  } = coffee || {};
  return <div>{
    <h1>{name}</h1>
    }
   
    </div>;
};

Cards.propTypes = {
  coffee: PropTypes.object,
};

export default Cards;
