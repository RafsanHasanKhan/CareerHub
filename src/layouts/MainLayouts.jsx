import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import './MainLayout.css'
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;