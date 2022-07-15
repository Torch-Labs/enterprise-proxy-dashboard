import React from "react";

const home = () => {
  return (
    <div className="flex-col">
      <div className="flex w-full h-60 items-center justify-center mx-auto bg-tl-paper rounded-md">
        Post
      </div>
      <div className="flex flex-row justify-evenly gap-3 mt-3">
        <div className="flex w-1/3 h-60 items-center justify-center mx-auto bg-tl-paper rounded-md">
          Post
        </div>
        <div className="flex w-2/3 h-60 items-center justify-center mx-auto bg-tl-paper rounded-md">
          Post
        </div>
      </div>
    </div>
  );
};

export default home;
