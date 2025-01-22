import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layoutes/MainLayout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    },
]) 

export default routes