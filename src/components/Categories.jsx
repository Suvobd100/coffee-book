import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
  // console.log(categories);
  return (
    <div role="tablist" className="tabs tabs-lifted mb-4">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) => `tab text-2xl font-thin 
          ${isActive ? "tab-active [--tab-border-color:orange]" : ""}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
