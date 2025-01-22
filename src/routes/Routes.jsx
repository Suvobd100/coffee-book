import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import CoffeeCards from "../components/CoffeeCards";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path: "/category/:category",
            element:<CoffeeCards/>,
            loader: ()=> fetch('../coffees.json')
          },
          
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },  
     
    ],
  },
]);

export default routes;
