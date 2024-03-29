import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { RestaurantCardType } from "@/app/page";
import { calculateReview } from "@/app/utils/calculateReview";
import Link from "next/link";

function RestaurantCard({ restaurant }: { restaurant: RestaurantCardType }) {
  const renderAverage = () => {
    const average = calculateReview(restaurant.reviews);
    if (average > 4) return "Awesome";
    else if (average < 4 && average > 3) return "Good";
    else if (average <= 3 && average > 0) return "Average";
    else return "";
  };
  return (
    <div className="border-b flex pb-5">
      <img src={restaurant.main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars numero = {calculateReview(restaurant.reviews)} />
          </div>
          <p className="ml-2 text-sm">{renderAverage()}</p>
          <p className="ml-2 text-sm">{restaurant.reviews.length} reviews</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
