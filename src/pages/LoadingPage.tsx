import React from "react";
import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ReactLoading
        type="spinningBubbles"
        color="#0000FF"
        height={150}
        width={90}
      />
    </div>
  );
};

export default LoadingPage;
