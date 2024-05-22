import React from "react";
import Form from "../components/Form";
import MapComponent from "../components/Map";

const Contact = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-center font-body text-4xl font-bold mb-8 py-6">
          Contact us
        </h1>

        <div className="flex items-center justify-center gap-4 mx-12 my-6">
          <div className="basis-[50%]">
            <MapComponent />
          </div>
          <div className="basis-[50%]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
