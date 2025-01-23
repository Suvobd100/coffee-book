import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

function Coffees() {
  const coffeeAllData = useLoaderData();
  return(
 <>
 <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
  {coffeeAllData.map((c) => (
    <Cards key={c.id} coffee={c} />
  ))}
</div>
 
 </>
 )
}

export default Coffees;
