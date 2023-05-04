import React from "react";

const Test4 = () => {
  return (
    <div className="min-h-[100vh] items-center flex w-[100vw] justify-center">
      <form>
        <h3 className="mb-[10px]">Inputan</h3>
        <input
          type="text"
          placeholder="Type here"
          className="input w-[100%] mb-[10px]"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input w-[100%] mb-[10px]"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input w-[100%] mb-[10px]"
        />
        <br />
       <button className="btn btn-active bg-white text-black">Button</button>

      </form>
    </div>
  );
};

export default Test4;
