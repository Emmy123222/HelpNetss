import React, { useState } from "react";

const Unpledge = () => {
  const [pledgeName, setPledgeName] = useState("");
  const [pledgeAmount, setPledgeAmount] = useState("");

  const handlePledge = () => {
    alert(`Thank you for your pledge, ${pledgeName}! Amount: $${pledgeAmount}`);
    // Add functionality to process the pledge here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
      <div className="bg-white rounded-[26px] shadow-lg p-10 w-full max-w-[400px]">
        <h1 className="text-xl font-semibold text-center mb-2">
          Support Our Course
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your donation will provide and support other communities in need
        </p>

        <h2 className="text-center font-medium text-lg mb-6">Pledge $20</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePledge();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Pledge Name"
            value={pledgeName}
            onChange={(e) => setPledgeName(e.target.value)}
            className="w-full border border-gray-300  p-3 focus:outline-none focus:ring focus:ring-black rounded-[26px]"
            required
          />

          <input
            type="number"
            placeholder="Pledge Amount"
            value={pledgeAmount}
            onChange={(e) => setPledgeAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-[26px] p-3 focus:outline-none focus:ring focus:ring-black"
            required
            min={1}
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-[26px] hover:bg-gray-800 transition duration-200"
          >
            Unpledge
          </button>
        </form>
      </div>
    </div>
  );
};

export default Unpledge;
