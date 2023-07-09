 
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

function Search() {
  return (
<>
        {/* HEADER */}
       <Header></Header>
          {/* SEARCH SIDE BAR */}
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar></SearchSideBar>
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard/>
            {/* RESAURANT CAR */}
          </div>
        </div>
</>
  );
}

export default Search;
