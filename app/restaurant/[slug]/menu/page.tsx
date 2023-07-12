import Navbar from "@/app/components/Navbar";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { Metadata, ResolvingMetadata } from "next";
import { Item, PrismaClient } from "@prisma/client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const name = "Menu of " + params.slug;
  return {
    title: name,
  };
}

const prisma = new PrismaClient();

const fetchMenuRestaurant = async (slug: string)=> {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if(!restaurant){
    throw new Error;
  }
  return restaurant.items;
};

async function MenuPage({ params }: { params: { slug: string } }) {
  const menu = await fetchMenuRestaurant(params.slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      {/* RESAURANT NAVBAR */}
      <RestaurantNavBar slug={params.slug} />
      {/* RESAURANT NAVBAR */} {/* MENU */}
      <Menu menu={menu}/>
      {/* MENU */}
    </div>
  );
}

export default MenuPage;
