import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils";
import Cards from "../components/Cards";
// import { useLocation } from "react-router-dom";

function Dashboard() {
  // const location=useLocation();
  // const {pathname}=useLocation();
  // console.log(pathname);

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);

  // handel remove function
  const handelRemove = (id) => {
    removeFavorite(id);
    // state update for refresh the dashboard
    const favorites = getAllFavorites();
    setCoffees(favorites);
  };

  return (
    <>
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here"
        }
      />
      {/* render coffees card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
        {coffees.map((c) => (
          <Cards handelRemove={handelRemove} key={c.id} coffee={c} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
