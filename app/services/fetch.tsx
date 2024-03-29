import {
  Cuisine,
  Location,
  PRICE,
  PrismaClient,
  Restaurant,
  Review,
  User,
} from "@prisma/client";
import { RestaurantCardType } from "../page";

const prisma = new PrismaClient();

export const searchRestaurantsByCity = async (
  city?: string,
  cuisine?: string,
  price?: PRICE
): Promise<RestaurantCardType[]> => {
  const search = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          contains: city,
          mode: "insensitive",
        },
      },
      cuisine: {
        name: {
          equals: cuisine,
        },
      },
      price: {
        equals: price,
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
  if (!search) {
    throw new Error();
  }
  return search;
};

export const fetchLocation = async (): Promise<Location[]> => {
  const location = await prisma.location.findMany();
  if (!location) {
    throw new Error();
  }
  return location;
};

export const fetchCuisine = async (): Promise<Cuisine[]> => {
  const cuisine = await prisma.cuisine.findMany();
  if (!cuisine) {
    throw new Error();
  }
  return cuisine;
};

export const fetchReviewsRestaurant = async (slugpass: string) => {
  const reviewsget = await prisma.restaurant.findMany({
    where: {
      slug: slugpass,
    },
    select: {
      reviews: true,
    },
  });
  if (!reviewsget) {
    throw new Error();
  }
  const array = reviewsget.map((e) => e.reviews);
  return array;
};

export const userWithEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
export const userWithEmailPublic = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      first_name:true,
      last_name:true,
      city:true,
      email:true,
      phone:true
    },
  });

  return user;
};
export const NewUser = async (
  firstName: string,
  lastName: string,
  city: string,
  password: string,
  email: string,
  phone: string
) => {
  const newUser = prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      city,
      password,
      email,
      phone,
    },
  });
  return newUser;
};
