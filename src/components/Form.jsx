import React from "react";

const Form = () => {
  return (
    <>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Enter your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile No.</span>
          </label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="border border-gray-300 outline-gray-300 px-4 py-2 rounded-md"
            name="message"
            id=""
            placeholder="Enter your message"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
