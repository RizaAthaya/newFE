import React from "react";

const Test3 = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center bg-white">
      <div className="overflow-x-auto m-auto flex justify-center ">
        <table className="table w-[70vw]">
          {/* head */}
          <thead className="">
            <tr className="">
              <th></th>
              <th className="text-gray-200">Name</th>
              <th className="text-gray-200">Job</th>
              <th className="text-gray-200">Favorite Color</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* row 1 */}
            <tr className="bg-white">
              <th className="text-center bg-gray-100">1</th>
              <td className="bg-gray-100 text-black ">Cy Ganderton</td>
              <td className="bg-gray-100 text-black">Quality Control Specialist</td>
              <td className="bg-gray-100 text-black">Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="text-center bg-gray-100">2</th>
              <td className="bg-gray-100 text-black">Hart Hagerty</td>
              <td className="bg-gray-100 text-black">Desktop Support Technician</td>
              <td className="bg-gray-100 text-black">Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="text-center bg-gray-100">3</th>
              <td className="bg-gray-100 text-black">Brice Swyre</td>
              <td className="bg-gray-100 text-black">Tax Accountant</td>
              <td className="bg-gray-100 text-black">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test3;
