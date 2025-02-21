"use client";
import React, { useRef } from "react";

const Demand = () => {
  const formRef = useRef(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "05db89b1-5bf0-4292-a97a-dd87c5fc318d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        

        formRef.current.reset(); 
      } else {
        console.error("Submission failed", res);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
  <form
    ref={formRef}
    onSubmit={onSubmit}
    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
  >
    <h2 className="text-3xl font-bold text-center mb-6">Contact us</h2>

    <div className="mb-5 input-box">
      <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
      <input
        type="text"
        className="field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Enter your name"
        name="name"
        required
      />
    </div>

    <div className="mb-5 input-box">
      <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
      <input
        type="email"
        className="field w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Enter your email"
        name="email"
        required
      />
    </div>

    <div className="mb-5 input-box">
      <label className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
      <textarea
        name="message"
        className="field mess w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Enter your message"
        required
        rows="4"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
    >
      Envoyer le Message
    </button>
  </form>
</section>

  );
};


export default Demand;

