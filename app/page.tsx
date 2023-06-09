import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <main>
        {/* HEADER */}
        <Header></Header>
        {/* SEARCH BAR */}
        {/* HEADER */} {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {/* CARD */}
          <RestaurantCard></RestaurantCard>
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
    </>
  );
}
