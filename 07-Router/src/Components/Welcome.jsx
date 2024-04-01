import React from "react";

export const Welcome = ({ onGetPostClick }) => {
  return (
    <div className="flex flex-col items-center content-center gap-4 text-blue-500 my-[50px]">
      <h1 className="text-[36px]">There are no posts available...!</h1>

      {/* <button
        className="btn btn-primary text-white font-semibold bg-blue-700 hover:bg-blue-400 text-[20px] w-32 "
        onClick={onGetPostClick}
      >
        Fetch Posts
      </button> */}
    </div>
  );
};
