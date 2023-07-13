import Stars from "@/app/components/Stars";
import { calculateReview } from "@/app/utils/calculateReview";
import { Review } from "@prisma/client";

 
function Rating({reviews}:{reviews:Review[]}) {
  const numero = calculateReview(reviews)
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars numero={numero}/>
        <p className="text-reg ml-3">{numero}</p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviews.length} Reviews</p>
      </div>
    </div>
  );
}

export default Rating;
