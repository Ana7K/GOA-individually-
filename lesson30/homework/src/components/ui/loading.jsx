import React from "react";

export default function Loading() {
  return (
    <div className="absolute top-1/2 right-1/2">
      <div className="size-20 border-t-5 border-t-blue-900 rounded-full animate-spin"></div>
      <h1 className="font-extrabold text-blue-500">Loading Sea Lions...</h1>
    </div>
  );
};