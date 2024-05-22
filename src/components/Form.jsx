import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || mobile == "" || message == "") {
      toast.error("Please fill all the details!");
    } else {
      console.log(name, email, mobile, message);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    }
  };
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}

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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}

          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
