import Navbar from "@/app/components/Navbar";
import React from "react";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Tittle from "./components/Tittle";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCards from "./components/ReservationCards";
import { useParams } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { PrismaClient } from "@prisma/client";

export interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const name = params.slug;
  return {
    title: name,
  };
}
const prisma = new PrismaClient();
const fetchRestaurantbySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

async function RestaurantDetails({ params }: { params: { slug: string } }) {
  const restaurant = await fetchRestaurantbySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={restaurant.slug} />
        {/* RESAURANT NAVBAR */} {/* TITLE */}
        <Tittle name={restaurant.name} />
        {/* TITLE */} {/* RATING */}
        <Rating />
        {/* RATING */} {/* DESCRIPTION */}
        <Description description={restaurant.description} />
        {/* DESCRIPTION */} {/* IMAGES */}
        <Images images={restaurant.images} />
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews />
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCards />
      </div>
    </>
  );
}

export default RestaurantDetails;
