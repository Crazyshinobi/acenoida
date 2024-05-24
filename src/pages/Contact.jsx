import React from "react";
import Form from "../components/Form";
import MapComponent from "../components/Map";

const Contact = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-center font-body text-4xl font-bold mb-8 py-6 max-sm:text-2xl">
          Contact us
        </h1>

        <div className="flex items-center justify-center gap-4 mx-12 my-6 max-sm:flex-col max-sm:items-center max-sm:w-[100%] max-sm:mx-2 max-sm:my-2">
          <div className="basis-[50%] max-sm:basis-[100%] max-sm:w-[90%]">
            <MapComponent />
          </div>
          <div className="basis-[50%] max-sm:basis-[100%] max-sm:w-[100%]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
