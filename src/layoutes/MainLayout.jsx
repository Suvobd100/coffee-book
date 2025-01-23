import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className=" ">
      <Toaster />
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-236px)] py-12 container mx-auto">
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
