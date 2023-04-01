import React from "react";

//assets
import profile from "../../assets/Profileee.svg";

const BoxChat = () => {
  return (
    <div className="p-5 mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-20 w-20 rounded-full" src={profile} alt="Logo" />
      </div>
      <div className="p-3 text-center">
        <div className="text-xl font-bold text-blue-300 flex">ChitChat</div>
        <p className="text-purple-400">You have a new message!</p>
        <button className="mt-3 flex px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
    </div>
  );
};

export default BoxChat;
