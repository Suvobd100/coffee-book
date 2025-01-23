import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";
import { useState } from "react";

function Coffees() { 
  // load all coffee's data
  const coffeeAllData = useLoaderData();
  // console.log(coffeeAllData);
  // used for shorting purpose
  const [coffees, setCoffees]=useState(coffeeAllData);

  const handleShort=(sortBy)=>{
    if (sortBy=='popularity'){
      // sort by popularity
      const sorted = [...coffeeAllData].sort((a,b)=>b.popularity-a.popularity);
      setCoffees(sorted);
    }else if(sortBy=='rating'){
      // sort by ratting
      const sorted = [...coffeeAllData].sort((a,b)=>b.rating-a.rating);
      setCoffees(sorted);
    }
  }


  return(
 <>
 <div className="flex justify-between items-center">
    <div>
      <h2 className="text-3xl font-thin">
        Short Coffee&apos;s by Popularity & Rating-&gt; 
      </h2>
    </div>
    <div className="space-x-4"> 
      <button onClick={()=>handleShort('popularity')} className="btn btn-warning">Short By Popularity</button>
      <button onClick={()=>handleShort('rating')} className="btn btn-warning">Short By Ratting</button>
    </div>
 </div>
 <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
  {coffees.map((c) => (
    <Cards key={c.id} coffee={c} />
  ))}
</div>
 
 </>
 )
}

export default Coffees;
