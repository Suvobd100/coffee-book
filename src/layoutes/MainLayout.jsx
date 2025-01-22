import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function MainLayout() {
  return (
    <div>
        {/* Navbar */}
        <Navbar/>
     <div className="min-h-[calc(100vh-236px)] py-12">
           {/* Dynamic Section */}
     </div>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default MainLayout