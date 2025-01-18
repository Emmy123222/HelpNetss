import React, { useState } from "react";

interface PledgeProps {
  onClose: () => void;
}

const Pledge: React.FC<PledgeProps> = ({ onClose }) => {
  const [pledgeName, setPledgeName] = useState("");
  const [pledgeAmount, setPledgeAmount] = useState("");

  const handlePledge = () => {
    alert(`Thank you for your pledge, ${pledgeName}! Amount: $${pledgeAmount}`);
    onClose(); // Close the modal after submission
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white rounded-[26px] shadow-lg p-10 w-full max-w-[400px]"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <h1 className="text-xl font-semibold text-center mb-2">
          Support Our Cause
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your donation will provide and support other communities in need
        </p>

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
            className="w-full bg-white border border-gray-300 p-3 rounded-[26px] focus:outline-none focus:ring focus:ring-black text-black"
            required
          />
          <input
            type="number"
            placeholder="Pledge Amount"
            value={pledgeAmount}
            onChange={(e) => setPledgeAmount(e.target.value)}
            className="w-full bg-white border border-gray-300 p-3 rounded-[26px] focus:outline-none focus:ring focus:ring-black text-black"
            required
            min={1}
          />
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-[26px] hover:bg-gray-800 transition duration-200"
          >
            Pledge
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pledge;
