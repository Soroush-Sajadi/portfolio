import React from "react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );
};
