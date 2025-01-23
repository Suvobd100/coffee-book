import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

function Home() {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      
      {/* Banner */}
      <Banner/>
      <Heading title={'Browse Coffees by Category'} 
      subtitle={'Chose your desired coffee category to brows through specific coffees that fit in your taste'}/>
      {/* Heading */}
      {/* Categories tab section*/}
      <Categories categories={categories}/>
      {/* Dynamic Nested Components */}
      <Outlet/>
    </div>
  );
}

export default Home;
