import React from "react";
import CardBeasiswa from "../Card/CardBeasiswa";
// import Data from "../../utils/Data.json";

const CardList = (cardsBeasiswa: any) => {
  return (
    <div className="px-[1%] w-[85%] flex items-center justify-around">
      {cardsBeasiswa.map((items: any, index: number) => {
        <CardBeasiswa
          key={index}
          id={items.id}
          tag={items.tag}
          title={items.title}
          date={items.date}
        />;
      })}
    </div>
  );
};

export default CardList;
