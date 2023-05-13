import React from "react";
import CardBeasiswa from "../Card/CardBeasiswa";
// import Data from "../../utils/Data.json";

const CardList = (cardsBeasiswa: any) => {
  return (
    <div className="px-[1%] w-[85%] flex items-center justify-around">
      {cardsBeasiswa.map((items: any, index: number) => {
        <CardBeasiswa
        key={index}
        tag_level={items.tag_level}
        tag_country={items.tag_country}
        tag_cost={items.tag_cost}
        name={items.name}
        open_registration={items.open_registration}
        close_registration={items.close_registration}
        provider={items.provider}
        />;
      })}
    </div>
  );
};

export default CardList;
