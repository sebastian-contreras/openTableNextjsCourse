import emptyStar from "public/empty-star.png";
import halfStar from "public/half-star.png";
import fullStar from "public/full-star.png";
import Image from "next/image";
import { difference } from "next/dist/build/utils";
function Stars({ numero }: { numero: number }) {
  const renderStar = () => {
    const stars = [];
    var difference = numero;
    for (let index = 0; index < 5; index++) {
      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) stars.push(halfStar);
      else stars.push(emptyStar);
      difference = difference - 1;
    }
    return stars.map((e) => {
      return <Image src={e} className="w-4 h-4 mr-1" alt="" />;
    });
  };

  return <div className="flex items-center">{renderStar()}</div>;
}

export default Stars;
