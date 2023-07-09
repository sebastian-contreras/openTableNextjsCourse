import Navbar from "@/app/components/Navbar";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
 

function MenuPage() {
  return (
<>
        {/* NAVBAR */} {/* HEADER */}
        <Header/>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
          <RestaurantNavBar/>
            {/* RESAURANT NAVBAR */} {/* MENU */}
            <Menu/>
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
</>
  );
}

export default MenuPage;
