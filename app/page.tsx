import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug:string,
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews:Review[]

}

const fetchRestaurant = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug:true,
      cuisine: true,
      location: true,
      price: true,
      reviews:true
    },
  });
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurant();
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
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant}></RestaurantCard>
          ))}
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
    </>
  );
}
