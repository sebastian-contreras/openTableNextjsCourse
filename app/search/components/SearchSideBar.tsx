import { fetchCuisine, fetchLocation } from "@/app/services/fetch";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

function SearchSideBar({
  location,
  cuisine,
  searchParams,
}: {
  location: Location[];
  cuisine: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const prices = [
    { price: PRICE.CHEAP, label: "$" },
    { price: PRICE.REGULAR, label: "$$" },
    { price: PRICE.EXPENSIVE, label: "$$$" },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {location.map((place) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, city: place.name },
            }}
          >
            <p className="font-light text-reg">{place.name}</p>{" "}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisine.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: { ...searchParams, cuisine: cuisine.name },
            }}
          >
            <p className="font-light text-reg">{cuisine.name}</p>{" "}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex mr-2">
          {prices.map(({ price, label }) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: price },
              }}
              className="border w-full text-reg font-light text-center rounded-l p-1"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
