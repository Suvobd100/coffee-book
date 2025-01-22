import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function MainLayout() {
  return (
    <div className=" ">
        {/* Navbar */}
        <Navbar/>
     <div className="min-h-[calc(100vh-236px)] py-12 container mx-auto px-12">
           {/* Dynamic Section */}
           <Outlet/>
     </div>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default MainLayout