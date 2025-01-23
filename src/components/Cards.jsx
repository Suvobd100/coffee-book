import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ coffee }) => {
//   console.log(coffee);

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
  return (
    <>
      {
        <Link to={`/coffee/${id}`}>
          <div className="card card-compact bg-base-100 w-96 shadow-xl mb-12">
            <figure className="w-full h-48 overflow-hidden">
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="grid grid-cols-2">
              <h2 className="card-title">Name :</h2>
              <h2 className="text-xl">{name}</h2>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-bold">Category : </p> <span>{category}</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-bold">Type : </p> <span>{type}</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-bold">Origin : </p> <span>{origin}</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-bold">Rating : </p> <span>{rating}</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="font-bold">Popularity : </p> <span>{popularity}</span>
              </div>
              
            </div>
          </div>
        </Link>
      }
    </>
  );
};

Cards.propTypes = {
  coffee: PropTypes.object,
};

export default Cards;
