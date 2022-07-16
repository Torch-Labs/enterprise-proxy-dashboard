import React from "react";

interface Props {
  title?: string;
}

const Paper: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex w-full h-60 items-center justify-center mx-auto bg-tl-paper rounded-md">
      <div className="flex-col w-full h-full p-3">
        <h1 className="object-top-left font-medium text-white">
          {title ?? ""}
        </h1>
      </div>
    </div>
  );
};

export default Paper;
