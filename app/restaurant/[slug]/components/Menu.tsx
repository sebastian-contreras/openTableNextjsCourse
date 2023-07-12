 
import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

function Menu({menu}:{menu:Item[]}) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          {/* MENU CARD */}
          {menu.length ? (
            menu.map(carta=>(
              <MenuCard key={carta.id} carta={carta}/>
            ))
          ):<p>This restaurant doens have a menu</p>}
          
          {/* MENU CARD */}
        </div>
      </div>
    </main>
  );
}

export default Menu;
