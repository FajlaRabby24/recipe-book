import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className=" min-h-[calc(100vh-402px)] flex items-center justify-center">
      <ScaleLoader />
    </div>
  );
};

export default Loading;
