import { Item } from "@prisma/client";

 

function MenuCard({carta}:{carta:Item}) {
  return (
    <div className=" border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg">{carta.name}</h3>
      <p className="font-light mt-1 text-sm">
        {carta.description}
      </p>
      <p className="mt-7">${carta.price}</p>
    </div>
  );
}

export default MenuCard;
