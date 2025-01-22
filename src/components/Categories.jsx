import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
    // console.log(categories);
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <Link key={category.category}
         to ={`/category/${category.category}`}
         role="tab" className="tab">
          {category.category}
        </Link>
      ))}
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
