import React, { useState } from "react";
import CardList from "./CardList";
import NumberList from "./NumberList";
import Data from "../../utils/Data.json";
import CardBeasiswa from "../Card/CardBeasiswa";

const PaginationPB = () => {
  // const [PBData, setPBData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Data.slice(firstPostIndex, lastPostIndex);

  
  return (
    <div className="justify-center h-auto lg:w-[70vw] grid">
      <div className="w-[70vw] flex items-center justify-around flex-wrap">
        {currentPosts.map((items: any, index: number): any => {
          return (
            <CardBeasiswa
              key={index}
              tag_level={items.TagLevel}
              tag_country={items.TagCountry}
              tag_cost={items.TagCost}
              name={items.name}
              open_registration={items.open_registration}
              close_registration={items.close_registration}
              provider={items.provider}
            />
          );
        })}
      </div>
      <div className=" mt-[20px] sm:mt-[100px] justify-center flex">
        <NumberList
          totalPosts={Data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PaginationPB;
