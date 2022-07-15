import React from "react";
import type { AppProps } from "next/app";

interface Props {
  children: React.ReactNode;
}

const SidebarContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full h-auto mx-auto px-6 py-8 bg-tl-main">
      <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
        {/* <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-tl-paper border-b border-gray-600">
          Post
        </div> */}
        {/* <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-tl-paper border-b border-gray-600">
          Post
        </div>
        <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-tl-paper border-b border-gray-600">
          Post
        </div>
        <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-tl-paper border-b border-gray-600">
          Post
        </div>
        <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-tl-paper border-b border-gray-600">
          Post
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default SidebarContent;
