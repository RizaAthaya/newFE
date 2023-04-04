import React from "react";

interface props {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}
const NumberList = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="mb-[120px] flex text-white items-center">
      {pages.map((page, index) => {
        return (
          <div className="bg-[#192BC2] rounded-[8px] w-[40px] h-[40px] mr-[8px] items-center flex mx-auto justify-center">
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NumberList;
