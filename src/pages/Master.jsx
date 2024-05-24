import React from "react";
import Card from "../components/Card";

const Master = () => {
  return (
    <>
      <h1 className="text-center font-body text-4xl font-bold mb-8 max-sm:text-2xl">
        Master Plan
      </h1>
      <div className="my-12">
        <div className="flex items-center gap-8 justify-center max-sm:flex-col">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Master;
